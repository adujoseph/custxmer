import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Calendar, CalendarList, Agenda } from 'react-native-calendars';
import { format } from 'date-fns';




const Calender = ({ item }) => {
    const formatDate = (_date) => format(_date, 'yyyy-MM-dd')

    const { dates, month, year } = item

    const initialDate = `${year}-${month}-01`;

    const getMarkedDates = (datelists = []) => {
        const markedDates = {}
        datelists.forEach(datelist => {
            const { date, mood } = datelist
            const formattedDate = formatDate(new Date(`${year}-${month}-${date}`));
            markedDates[formattedDate] = {
                ...markedDates[formattedDate],
                ...datelist,
                marked: true,
                emoji: mood === 'happy' ? '😊' : mood === 'sad' ? '😡' : mood === 'fair' ? '🤢' : mood,
                customStyles: {
                    container: {
                        backgroundColor: 'green',
                        padding: 5,
                        borderRadius: 10
                    },
                    text: {
                        color: 'white',
                        fontWeight: 'bold'
                    }
                }
            }
        })
        return markedDates
    };


    return (
        <View style={{ flex: 1 }}>
            <View style={{ paddingTop: 40 }}>
                <Text style={styles.headerText}>REACT NATIVE CALENDAR APP</Text>
            </View>

            <View>
                <Calendar
                    style={{
                        borderRadius: 10,
                        elevation: 4,
                        margin: 20,
                    }}
                    dayComponent={({date, state, marking, markingType}) => {
                        return (
                          <View>
                            {marking?.marked && <Text style={styles.emoji}>{marking?.emoji}</Text>}
                            <Text style={{textAlign: 'center', color: state === 'disabled' ? 'gray' : 'black', fontWeight: state === 'today' ? 'bold': 'normal'}}>{date.day}</Text>
                          </View>
                        );
                      }}
                    initialDate={initialDate}
                    onDayPress={day => {
                        console.log('selected day', day);
                    }}
            
                    onDayLongPress={day => {
                        console.log('selected day', day);
                    }}
                    onMonthChange={month => {
                        console.log('month changed', month);
                    }}
                    hideArrows={false}
                    hideExtraDays={true}
                    disableMonthChange={true}
                    firstDay={1}
                    hideDayNames={false}
                    showWeekNumbers={false}
                    disableArrowLeft={true}
                    disableArrowRight={true}
                    disableAllTouchEventsForDisabledDays={false}
                    markingType={'custom'}
                    markedDates={getMarkedDates(dates)}
                />
            </View>
        </View>
    )
}

export default Calender

const styles = StyleSheet.create({
    headerText: { fontWeight: 'bold', lineHeight: 19, letterSpacing: 2, textAlign: 'center', color: 'gray' },
    emoji: {
       position: 'absolute',
       bottom: 15,
       fontWeight: 'bold',
       color: 'red'
    },
})