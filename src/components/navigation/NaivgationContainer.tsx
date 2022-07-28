import React from 'react'
import Welcome from '../screen/welcomeScreen/Welcome';
import Infomation from '../screen/infomationScreen/Infomation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const NaivgationContainer = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Infomation" component={Infomation} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NaivgationContainer