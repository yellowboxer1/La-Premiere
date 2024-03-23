import axios from "axios";
import cheerio from "cheerio";

const urlPlayers = "https://www.premierleague.com/stats/top/players/";
const urlClubs = "https://www.premierleague.com/stats/top/clubs/";

async function fetchPlayerStats() {
  try {
    const response = await axios.get(urlPlayers);
    const $ = cheerio.load(response.data);

    const playerName1 = $(".top-stats__player-name").eq(0).text().trim();
    const playerStat1 = $(".top-stats__player-stat").eq(0).text().trim();

    const playerName2 = $(".top-stats__player-name").eq(1).text().trim();
    const playerStat2 = $(".top-stats__player-stat").eq(1).text().trim();

    return {
      player1: {
        name: playerName1,
        stat: playerStat1
      },
      player2: {
        name: playerName2,
        stat: playerStat2
      }
    };
  } catch (error) {
    console.error('Error fetching player stats:', error);
    return null;
  }
}

async function fetchClubStats() {
  try {
    const response = await axios.get(urlClubs);
    const $ = cheerio.load(response.data);

    const teamName1 = $(".top-stats__club-name").eq(0).text().trim();
    const teamStat1 = $(".top-stats__club-stat").eq(0).text().trim();

    const teamName2 = $(".top-stats__club-name").eq(1).text().trim();
    const teamStat2 = $(".top-stats__club-stat").eq(1).text().trim();

    return {
      team1: {
        name: teamName1,
        stat: teamStat1
      },
      team2: {
        name: teamName2,
        stat: teamStat2
      }
    };
  } catch (error) {
    console.error("Error fetching club stats:", error);
    return null;
  }
}

export default {
  fetchPlayerStats,
  fetchClubStats
};