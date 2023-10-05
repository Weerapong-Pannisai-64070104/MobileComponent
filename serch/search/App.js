import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchByNameScreen from './Screen/SearchByNameScreen';
import SearchBySalubScreen from './Screen/SearchBySalubScreen';
import SearchByTagScreen from './Screen/SearchByTagScreen';
import TestScreen from './Screen/Test';

const Tab = createMaterialTopTabNavigator();

function App() {
  return (
    <NavigationContainer>
      
      <Tab.Navigator screenOptions={{
      tabBarStyle: { backgroundColor: "#6667ab", height:"auto", paddingTop: 35 },
      tabBarLabelStyle: { fontSize: 15, fontWeight: "bold", color: "white"}
    }}>
        <Tab.Screen name="ชื่อสรุป" component={SearchBySalubScreen} />
        {/* <Tab.Screen name="test" component={TestScreen} /> */}
        <Tab.Screen name="แท็ก" component={SearchByTagScreen} />
        <Tab.Screen name="คนเขียน" component={SearchByNameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
