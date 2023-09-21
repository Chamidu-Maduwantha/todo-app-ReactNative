import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide header for welcome screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
