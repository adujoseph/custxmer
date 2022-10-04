import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Calender from './src/components/Calender'

const App = () => {

  const dateObj = {
    dates: [
      {
        date: 4,
        mood: 'sad',
      },
      {
        date: 1,
        mood: 'sad',
      },
      {
        date: 4,
        mood: 'happy',
      },
      {
        date: 6,
        mood: 'fair',
      },
      {
        date: 27,
        mood: 'sad',
      }
    ],
    month: 10,
    year: 2022,
  }
  return (
    <Calender item={dateObj}/>
  )
}

export default App

const styles = StyleSheet.create({})