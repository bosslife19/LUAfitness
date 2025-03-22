import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import IconSymbols from '../../components/ui/IconSymbol';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbols size={28} name="house.fill" color={color} />,
        }}
      />
    </Tabs>
  );
}
