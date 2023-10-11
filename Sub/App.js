import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import FollowingScreen from './Screen/FollowingScreen';
import FollowerScreen from './Screen/FollowerScreen';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarStyle: { backgroundColor: "#6667ab", height: "auto", paddingTop: 35 },
        tabBarLabelStyle: { fontSize: 15, fontWeight: "bold", color: "white" }
      }}>
        <Tab.Screen name="ผู้ติดตาม" component={FollowerScreen} />
        <Tab.Screen name="กำลังติดตาม" component={FollowingScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;





