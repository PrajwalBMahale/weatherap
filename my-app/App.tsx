import React, { type PropsWithChildren } from 'react';
import  StyleSheet from 'react-native';
import Details1 from './Details1';
import Details2 from './Details2';
import { createStackNavigator } from '@react-navigation/stack';
import Index from './Index'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Index'>
        <Stack.Screen name=" " component={Index} />
        <Stack.Screen name="Details1" component={Details1} />
        <Stack.Screen name="Details2" component={Details2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;