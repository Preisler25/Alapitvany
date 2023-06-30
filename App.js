import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // https://reactnavigation.org/docs/getting-started
import PostPage from './buildingAssets/pages/postPage';
import InfoPage from './buildingAssets/pages/infoPage';


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={PostPage} />
        <Tab.Screen name="InfoPage" component={InfoPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}