import React from 'react'
import Welcome from '../screen/welcomeScreen/Welcome';
import Infomation from '@components/screen/infomationScreen/Infomation';
import EnjoyNoodles from '@components/screen/enjoyNoodlesScreen/EnjoyNoodles';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './Navigation';

const NaivgationContainer = () => {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Welcome" component={Welcome} />
                <Stack.Screen name="Infomation" component={Infomation} />
                <Stack.Screen name="EnjoyNoodles" component={EnjoyNoodles} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NaivgationContainer