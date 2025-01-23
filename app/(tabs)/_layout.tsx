import { Text, View, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";

import { icons } from "@/constants";


const routes: TabInterface[] = [
  {
    routeName: "home",
    name: "Home",
    icon: icons.home
  },
  {
    routeName: "bookmark",
    name: "Bookmark",
    icon: icons.bookmark
  },
  
  {
    routeName: "create",
    name: "Create",
    icon: icons.plus
  },
  {
    routeName: "profile",
    name: "Profile",
    icon: icons.profile
  },
]

interface TabInterface {
  icon: any;
  color?: any;
  name: string;
  focused?: boolean;
  routeName?: string
}

const TabIcon = ({ icon, color, name, focused }: TabInterface) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image 
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="h-6 w-6"
      />
      <Text className={`${focused ? 'font-psemibold': 'font-pregular'} text-xs`} style={{color: color}}>{name}</Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: '#FFA001',
          tabBarInactiveTintColor: '#CDCDE0',
          tabBarStyle: {
            backgroundColor: '#161622',
            borderTopWidth: 1,
            borderTopColor: '#232533',
            height: 84
          }
        }}
      >
        {
          routes.map((value: TabInterface, index) => {
            return (
              <Tabs.Screen
                key={index}
                name={value.routeName}
                options={{
                  title: `${value.name}`,
                  headerShown: false,
                  tabBarIcon: ({ color, focused }) => (
                    <TabIcon 
                      icon={value.icon}
                      color={color}
                      name={value.name}
                      focused={focused}
                    />
                  ),
                }}
              />
            )
          })
        }
      </Tabs>
    </>
  );
};

export default TabsLayout;
