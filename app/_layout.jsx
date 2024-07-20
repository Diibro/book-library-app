import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Slot, Stack } from 'expo-router'
import MainStyles from '../styles/main'

const RootLayout = () => {
     return (
          <Stack>
               <Stack.Screen name='index' options={{headerShown:false}} />
               <Stack.Screen name='books' options={{headerTitle: "All Books",headerStyle: MainStyles.header}} />
          </Stack>
     )
}

export default RootLayout
