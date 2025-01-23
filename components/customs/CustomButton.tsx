import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

interface CustomButtonInterface {
  title: string;
  handlePress: () => void;
  containerStyles?: string;
  isLoading: boolean;
  textStyles?: string;
}

const CustomButton = ({title, handlePress, containerStyles, isLoading, textStyles}: CustomButtonInterface) => {
  return (
    <TouchableOpacity 
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${isLoading ? 'opacity-50': ''}`}
      activeOpacity={0.7}
      onPress={handlePress}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton