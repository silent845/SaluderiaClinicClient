import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenAuth from '../screens/ScreenAuth'
import ScreenAuthRegister from '../screens/ScreenAuthRegister'
import ScreenAuthRestore from '../screens/ScreenAuthRestore'
import ScreenMain from '../screens/ScreenMain'
const Stack = createNativeStackNavigator()

const StackAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Group screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Auth' component={ScreenAuth} />
            </Stack.Group>
            <Stack.Group>
                <Stack.Screen name='AuthRegister' component={ScreenAuthRegister} />
                <Stack.Screen name='AuthRestore' component={ScreenAuthRestore} />
            </Stack.Group>
        </Stack.Navigator>
    )
}

export default StackAuth