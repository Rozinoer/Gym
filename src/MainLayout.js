import React, {useState, useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainScreen } from './screens/MainScreen'
import { AddNewClient } from './screens/AddNewClient'
import { AboutClient } from './screens/AboutClient';
import { ClientProgress } from './screens/ClientProgress';
import { ClientEx } from './screens/ClientEx';
import { ClientContext } from './context/client/clientContext';
import { AddNewEx } from './screens/AddNewEx'

export const MainLayout = () => {
    const {clients, addClient, editClient} = useContext(ClientContext)
    const Stack = createStackNavigator();

    return <NavigationContainer>
            <Stack.Navigator initialRouteName='Main'>
                <Stack.Screen name='Main'>
                    {props => <MainScreen { ...props } clients={clients} />}
                </Stack.Screen>
                <Stack.Screen name='Add' >
                    {props => <AddNewClient { ...props } addClient={addClient} />}
                </Stack.Screen>
                <Stack.Screen name='Info'>
                    {props => <AboutClient {...props} editClient={editClient} />}
                </Stack.Screen>
                <Stack.Screen name='Progress'>
                    {props => <ClientProgress {...props} />}
                </Stack.Screen>
                <Stack.Screen name='Ex'>
                    {props => <ClientEx {...props} />}
                </Stack.Screen>
                <Stack.Screen name='AddEx'>
                    {props => <AddNewEx {...props}  />}
                </Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
}

