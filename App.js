import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PostPage from './buildingAssets/pages/postPage';
import InfoPage from './buildingAssets/pages/infoPage';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarStyle: [
            {
              backgroundColor: '#252525',
              display: 'flex',
            },
            null,
          ],
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'newspaper' : 'newspaper-outline';
            } else if (route.name === 'InfoPage') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2AB4AB',
          tabBarInactiveTintColor: '#D9D9D9',
          headerShown: false, // Remove the top bar from all screens
        })}
        tabBarOptions={{
          style: { backgroundColor: '#252525' },
        }}>
        <Tab.Screen name="Home" component={PostPage} />
        <Tab.Screen name="InfoPage" component={InfoPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}