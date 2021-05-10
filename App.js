import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Navbar } from './src/components/Navbar'
import { MainScreen } from './src/screens/MainScreen'
import { AddNewClient } from './src/screens/AddNewClient'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { add } from 'react-native-reanimated';

export default function App() {
  const [clients, setClients] = useState([])

  const addClient = (client) => {
    setClients((prevClients) => [ ...prevClients, {
      id: Date.now().toString(),
      surnamename: 'Amosov',
      name: 'Jack',
      patronymic: 'Alexseevich',
      height: 187,
      weight: 72,
      bd: '04.04.00'
    }])
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Main'>
        <Stack.Screen name='Main' >
          {props => <MainScreen { ...props } clients={clients} addClient={addClient} />}
        </Stack.Screen>
        <Stack.Screen name='Add' >
          {props => <AddNewClient { ...props } addClient={addClient} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    // <View >
    //   <Navbar />
    //   <MainScreen clients={ clients }/>
    //   {/* <AddNewClient clients={ clients } addClient={ addClient }/> */}
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  clients: {
    paddingHorizontal: 15,
    alignItems: 'center',
  }
});
