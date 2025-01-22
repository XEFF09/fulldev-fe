import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const HomePage = () => {
  return (
    <View className='flex justify-center items-center h-[100vh]'>
      <Text className='font-bold text-md text-secondary-200 font-pblack'>HomePage</Text>
      <Link
        href='/profile'
        className='text-blue-400'
      >click here</Link>
    </View>
  )
}

export default HomePage
