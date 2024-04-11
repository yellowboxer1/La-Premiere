import * as Notifications from 'expo-notifications';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Alertsceen = () => {
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowAlert: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });

  const sendNotification = async () => {
    console.log('Sending notification...');
    try {
      await Notifications.scheduleNotificationAsync({
        content: {
          title: '알림 제목 테스트',
          body: '알림 내용 테스트',
        },
        trigger: null, // 즉시 보내려면 'trigger'에 'null'을 설정
      });
      console.log('Notification sent successfully.');
    } catch (error) {
      console.error('Error sending notification:', error);
    }
  };

  useEffect(() => {
    // ✅ 알림 전송 함수 호출
    console.log('Component mounted, sending notification...');
    sendNotification();

    const subscription = Notifications.addNotificationReceivedListener((notification) => {
      // ✅ 알림이 수신된 경우 처리할 코드
      console.log('Notification received:', notification);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    (async () => {
      console.log('Requesting notification permissions...');
      const { status } = await Notifications.requestPermissionsAsync();
      if (status !== 'granted') {
        console.log('Notification permission denied.');
        alert('알림 권한이 거부되었습니다!');
      } else {
        console.log('Notification permission granted.');
      }
    })();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Notification Test</Text>
      <Button title="Send Notification" onPress={sendNotification} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default Alertsceen;
