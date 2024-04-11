import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import moment from 'moment';
import { FontFamily } from '../GlobalStyles';
import 'moment/locale/ko'; // moment.js에 한국어 locale 추가
import CalendarStrip from 'react-native-calendar-strip';
import { width, height } from '../GlobalStyles';

export default class DatePicker extends Component {
  constructor(props) {
    super(props);
    moment.locale('ko'); // 한국어 locale 설정
  }

  pickDate = (date) => {
    this.props.setDate(date.format("YYYY-MM-DD"));
  }

  render(){
    const today = moment().startOf('day');
    return(
      <View style={styles.dateContainer}>
          <CalendarStrip
            scrollable
            style={{marginRight: width * 1, height:height * 100, paddingTop: height * 5, paddingBottom: height * 0}}
            highlightDateNumberStyle={{color: '#FF4438',  marginTop: height * 5, fontFamily:FontFamily.robotoMedium }}
            highlightDateNameStyle={{color: '#FF4438', fontFamily:FontFamily.notoSansRegular}}
            dateNameStyle={{color: '#929393',fontFamily:FontFamily.notoSansRegular }}
            onDateSelected={this.pickDate}
            calendarHeaderStyle={{ color: 'white',  fontFamily:FontFamily.notoSansMedium}}
            calendarHeaderContainerStyle={{ marginRight: width * 260, alignItems: 'left' }}   
            dateNumberStyle={{ color: 'white', marginTop: height * 5, fontFamily:FontFamily.robotoRegular }}
            leftSelector={<View />} // 왼쪽 화살표 없애기
            rightSelector={<View />} // 오른쪽 화살표 없애기
            useIsoWeekday={true} // 좌우 슬라이드를 구현하기 위해 추가
            calendarHeaderFormat="YYYY년 M월" // 날짜 형식 변경
            initialDate={today} // 시작일을 오늘로 설정
            formatDayHeader={(date) => {
              if (moment(date).isSame(today, 'day')) {
                return '오늘';
              } else {
                return moment(date).format('dd');
              }
            }}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateContainer: {
    flex: 1,
  },
});
