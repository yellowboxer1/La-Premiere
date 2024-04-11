import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const fetchNextMatch = async (team) => {
    try {
        // Fetch teamId from AsyncStorage
        const selectedTeam = await AsyncStorage.getItem('selectedTeam');
        if (!selectedTeam) {
            throw new Error('Selected team not found in AsyncStorage');
        }

        const favor = {
            "아스널 FC": "1",
            "리버풀 FC": "10",
            "맨체스터 시티": "11",
            "애스턴 빌라": "2",
            "토트넘 홋스퍼": "21",
            "맨체스터 유나이티드": "12",
            "웨스트 햄": "25",
            "브라이턴": "131",
            "울브스": "38",
            "뉴캐슬": "23",
            "첼시 FC": "4",
            "풀럼": "34",
            "AFC 본머스": "127",
            "크리스탈 팰리스": "6",
            "브랜트퍼드": "130",
            "에버턴": "7",
            "노팅엄 포레스트": "15",
            "루턴타운": "163",
            "번리": "43",
            "셰필드": "18",
        };
        const teamId = favor[team];
        
        // Fetch data based on teamId or perform any other necessary logic
        const response1 = await axios.get(`https://port-0-api-fi1xh2bltwsbji2.sel5.cloudtype.app/favorData/${teamId}`);
        console.log('API Response:', response1.data1);
        const data1 = response1.data1;

        // Call getWinRate function
        await getWinRate(data1);
        
        return data1;
    } catch (error) {
        console.error('Error fetching next match:', error);
        throw error; // Propagate the error if needed
    }
};        

const getWinRate = async (data1) => {
    try {
        // Extracting data from the provided data object
        const headToHeadStats = data1.headToHeadStats;
        const recentFormGuide = data1.recentFormGuide;
        const recentMatches = data1.recentMatches;
        
        // Additional data
        const additionalData = {
            "Man City": {"Predicted Winning Percentage": 0.7466509538},
            "Liverpool": {"Predicted Winning Percentage": 0.6253942044},
            "Arsenal": {"Predicted Winning Percentage": 0.5641369277},
            "Spurs": {"Predicted Winning Percentage": 0.5086497359},
            "Man Utd": {"Predicted Winning Percentage": 0.5038132595},
            "Chelsea": {"Predicted Winning Percentage": 0.4452308927},
            "Fulham": {"Predicted Winning Percentage": 0.4121246514},
            "Everton": {"Predicted Winning Percentage": 0.3308052632},  
            "Wolves": {"Predicted Winning Percentage": 0.3491833333},    
            "Crystal Palace": {"Predicted Winning Percentage": 0.312427193},                        
            "Brentford": {"Predicted Winning Percentage": 0.4031098568},
            "West Ham": {"Predicted Winning Percentage": 0.4055702795},
            "Brighton": {"Predicted Winning Percentage": 0.3640427625},
            "Newcastle": {"Predicted Winning Percentage": 0.3840470574},
            "Aston Villa": {"Predicted Winning Percentage": 0.4422027948},
            "Burnley": {"Predicted Winning Percentage": 0.299996582},   
            "Nott'm Forest": {"Predicted Winning Percentage": 0.2583134583},                    
            "Sheffield Utd": {"Predicted Winning Percentage": 0.2939988257},     
            "Bournemouth": {"Predicted Winning Percentage": 0.3364638296},    
            "Luton": {"Predicted Winning Percentage": 0.2333333333},    
        };
        
        // Extracting team names     
        const teamNames = Object.keys(headToHeadStats);
        const homeTeam = teamNames[0];
        const awayTeam = teamNames[1];

        console.log('Home Team:', homeTeam);
        console.log('Away Team:', awayTeam);       
        
        // Calculating win rates based on head-to-head stats
        const totalMatches = parseInt(headToHeadStats[homeTeam].totalWins) + parseInt(headToHeadStats[awayTeam].totalWins);
        const homeWinRate = parseInt(headToHeadStats[homeTeam].totalWins) / totalMatches;
        const awayWinRate = parseInt(headToHeadStats[awayTeam].totalWins) / totalMatches;
        
        // Calculating win rates based on recent form guide
        const homeRecentFormWinRate = (recentFormGuide.home_team.match(/W/g) || []).length / 5;
        const awayRecentFormWinRate = (recentFormGuide.away_team.match(/W/g) || []).length / 5;
        
        // Calculating win rates based on recent matches
        let homeRecentMatchesWinRate = 0;
        let awayRecentMatchesWinRate = 0;
        for (const match of recentMatches) {
            if (match.result === `${homeTeam} win`) {
                homeRecentMatchesWinRate++;
            } else if (match.result === `${awayTeam} win`) {
                awayRecentMatchesWinRate++;
            }
        }
        homeRecentMatchesWinRate /= recentMatches.length;
        awayRecentMatchesWinRate /= recentMatches.length;
        
        // Calculate overall win rate prediction scores with weights
        const totalHomeScore = 0.118 * homeWinRate + 0.1875 * homeRecentFormWinRate + 0.3725 * homeRecentMatchesWinRate + 0.322 * additionalData[homeTeam]["Predicted Winning Percentage"];
        const totalAwayScore = 0.125 * awayWinRate + 0.2075 * awayRecentFormWinRate + 0.3728 * awayRecentMatchesWinRate + 0.2947 * additionalData[awayTeam]["Predicted Winning Percentage"];

        // Normalize probabilities
        const homeOverallWinRate = totalHomeScore / (totalHomeScore + totalAwayScore);
        const awayOverallWinRate = totalAwayScore / (totalHomeScore + totalAwayScore);
        
        // Output overall win rate prediction scores
        console.log(`Overall Win Rate Prediction for Home Team (${homeTeam}): ${homeOverallWinRate}`);
        console.log(`Overall Win Rate Prediction for Away Team (${awayTeam}): ${awayOverallWinRate}`);
        
        return {
            homeOverallWinRate,
            awayOverallWinRate
        };
    } catch (error) {
        console.error('Error calculating win rates:', error);
        throw error;
    }
};

export { getWinRate };