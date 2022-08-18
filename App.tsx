import React from 'react'
import { NavigationContainer } from '@react-navigation/native';

import { StackNavigator } from './src/navigator/StackNavigator';
import { StatusBar } from 'react-native';
import { PersmissionsProvider } from './src/context/PermissionsContext';

const AppState = ( {children} : { children: JSX.Element | JSX.Element[] }) => {
    return (
        <PersmissionsProvider>
            { children }
        </PersmissionsProvider>
    )
}


const App = () => {
    return (
        <NavigationContainer>
            <AppState>
                <StatusBar 
                    translucent= { true }
                    backgroundColor='rgba(180,180,180,0.1)'
                    barStyle='light-content'
                />
                <StackNavigator />
            </AppState>
        </NavigationContainer>
    )
}

export default App