import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import cheerio from 'cheerio';

const urlPlayers = 'https://www.premierleague.com/stats/top/players/';
const urlClubs = 'https://www.premierleague.com/stats/top/clubs/';

const fetchData = async () => {
  try {
    // 선수 골 정보
    const playersResponse = await fetch(urlPlayers);
    const playersHtml = await playersResponse.text();
    const $players = cheerio.load(playersHtml);
    const playerName1 = $players('.top-stats__hero-first').eq(0).text().trim() + ' ' + $players('.top-stats__hero-last').eq(0).text().trim();
    const playerStat1 = $players('.top-stats__hero-stat').eq(0).text().trim();

     // 선수 골 2~5 정보
    const playerGoals = [];
    $players('.top-stats__row--').each((index, element) => {
    const playerName = $players(element).find('.top-stats__row-name').text().trim();
    const playerStat = $players(element).find('.top-stats__row-stat').text().trim();
    const playerNm = $players(element).find('.top-stats__row-pos').text().trim();
    const teamName = $players(element).find('.top-stats__row-team-name').text().trim();
    playerGoals.push({ playerName, playerStat, playerNm, teamName });
    });

    // 선수 어시스트 정보
    const playerName2 = $players('.top-stats__hero-first').eq(1).text().trim() + ' ' + $players('.top-stats__hero-last').eq(1).text().trim();
    const playerStat2 = $players('.top-stats__hero-stat').eq(1).text().trim();

    // 선수 어시스트 2~5 정보
    const assistsResponse = await fetch(urlPlayers);
    const assistsHtml = await assistsResponse.text();
    const $assists = cheerio.load(assistsHtml);

    const playerAssists = [];
    $assists('.top-stats__row--').each((index, element) => {
      const playerName = $assists(element).find('.top-stats__row-name').text().trim();
      const playerStat = $assists(element).find('.top-stats__row-stat').text().trim();
      const playerNm = $assists(element).find('.top-stats__row-pos').text().trim();
      const teamName = $assists(element).find('.top-stats__row-team-name').text().trim();
      playerAssists.push({ playerName, playerStat, playerNm, teamName });
    });


    // 클럽 골 정보
    const clubsResponse = await fetch(urlClubs);
    const clubsHtml = await clubsResponse.text();
    const $clubs = cheerio.load(clubsHtml);

    // 팀 골 정보
    const teamName1 = $clubs('.top-stats__hero-name').eq(2).text().trim();
    const teamStat1 = $clubs('.top-stats__hero-stat').eq(2).text().trim();

    // 클린 시트 정보
    const teamName2 = $clubs('.top-stats__hero-name').eq(3).text().trim();
    const teamStat2 = $clubs('.top-stats__hero-stat').eq(3).text().trim();

    // 데이터를 객체로 묶어서 반환합니다.
    return {
      playerName1,
      playerStat1,
      playerName2,
      playerStat2,
      teamName1,
      teamStat1,
      teamName2,
      teamStat2,
      playerGoals,
      playerAssists
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export const useStatsData = () => {
  const [statsData, setStatsData] = useState(null);

  useEffect(() => {
    const fetchStatsData = async () => {
      const data = await fetchData();
      if (data) {
        setStatsData(data);
      }
    };
    fetchStatsData();
  }, []);

  return statsData;
};

const Stats = () => {
  const statsData = useStatsData();
  
  if (!statsData) {
    return <Text>Loading...</Text>;
  }

  if (!statsData.playerName1) {
    console.error("Error: playerName1 is null");
    return <Text>Error: playerName1 is null</Text>;
  }

  // Add similar checks for other properties

  const { playerGoals, playerAssists, playerName1, playerStat1, playerName2, playerStat2, teamName1, teamStat1, teamName2, teamStat2 } = statsData;

  return (
    <View>
      <Text>Player 1: {playerName1}</Text>
      <Text>Player 1 Stat: {playerStat1}</Text>
      {playerGoals.map((player, index) => (
        <Text key={index}>{`${index + 1}. ${player.playerName}: ${player.playerStat}`}</Text>
      ))}
      <Text>Player 2: {playerName2}</Text>
      <Text>Player 2 Stat: {playerStat2}</Text>
      {playerAssists.map((player, index) => (
        <Text key={index}>{`${index + 1}. ${player.playerName}: ${player.playerStat}`}</Text>
      ))}
      <Text>Team 1: {teamName1}</Text>
      <Text>Team 1 Stat: {teamStat1}</Text>
      <Text>Team 2: {teamName2}</Text>
      <Text>Team 2 Stat: {teamStat2}</Text>
    </View>
  );
}

export default Stats;