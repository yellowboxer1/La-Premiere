import axios from "axios";
import cheerio from "cheerio";

const clubMappings = {
    "ARS": "아스널",
    "LIV": "리버풀",
    "MCI": "맨시티",
    "AVL": "애스턴 빌라",
    "TOT": "토트넘",
    "MUN": "맨유",
    "WHU": "웨스트햄",
    "BHA": "브라이튼",
    "WOL": "울버햄튼",
    "NEW": "뉴캐슬",
    "CHE": "첼시",
    "FUL": "풀럼",
    "BOU": "본머스",
    "CRY": "팰리스",
    "BRE": "브렌트퍼드",
    "EVE": "에버턴",
    "NFO": "노팅엄",
    "LUT": "루턴",
    "BUR": "번리",
    "SHU": "셰필드"
};

const RankData = async () => {
    try {
        const response = await axios.get("https://www.premierleague.com/tables");
        const html = response.data;
        const $ = cheerio.load(html);
        const bodyList = $("tr");

        let ulList = [];
        let prevRank = -1;
        let prevMovement = -1;
        let rankSet = new Set(); // Store unique ranks
        bodyList.each((i, element) => {
            const rank = $(element).find("td.league-table__pos .league-table__value").text().trim();
            // Check if rank is not NaN and it does not already exist in the set, then add to the list and set
            if (!isNaN(parseInt(rank)) && !rankSet.has(rank) && ulList.length < 20) {
                const movement = $(element).find("td.league-table__pos .league-table__result-highlight").text().trim();
                const clubCode = $(element).find("td.team").text().replace(/\s/g, "").slice(-3);
                const club = clubMappings[clubCode];
                const played = $(element).find("td:nth-child(3)").text().replace(/\s/g, "");
                const win = $(element).find("td:nth-child(4)").text().replace(/\s/g, "");
                const draws = $(element).find("td:nth-child(5)").text().replace(/\s/g, "");
                const lose = $(element).find("td:nth-child(6)").text().replace(/\s/g, "");
                const points = $(element).find("td.points").text().replace(/\s/g, "");

                // Determine status based on comparison between rank and movement numbers
                let status = "";
                if (prevRank !== 0) {
                    if (parseInt(rank) < parseInt(movement)) {
                        status = "up";
                    } else if (parseInt(rank) > parseInt(movement)) {
                        status = "down";
                    } else {
                        status = "-";
                    }
                }

                ulList.push({
                    rank: parseInt(rank),
                    movement,
                    status,
                    club,
                    played,
                    win,
                    draws,
                    lose,
                    points
                });
                rankSet.add(rank);
                prevRank = parseInt(rank); // Update previous rank
                prevMovement = parseInt(movement); // Update previous movement
            }
        });
        return ulList;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default RankData;
