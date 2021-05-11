import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MainScreen } from './src/screens/MainScreen'
import { AddNewClient } from './src/screens/AddNewClient'
import { AboutClient } from './src/screens/AboutClient';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ClientProgress } from './src/screens/ClientProgress';
import { ClientEx } from './src/screens/ClientEx';

export default function App() {
  const [clients, setClients] = useState([])

  const addClient = (client) => {
    setClients((prevClients) => [ ...prevClients, {
      id: Date.now().toString(),
      surname: client.surname,
      name: client.name,
      height: client.height,
      weight: client.weight,
      bd: client.data,
      phone: client.phone,
      ex: []
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
        <Stack.Screen name='Info'>
          {props => <AboutClient {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Progress'>
          {props => <ClientProgress {...props} />}
        </Stack.Screen>
        <Stack.Screen name='Ex'>
          {props => <ClientEx {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
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
