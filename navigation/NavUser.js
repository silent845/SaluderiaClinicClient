import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenMain from '../screens/ScreenMain'
const Tab = createBottomTabNavigator()

const NavUser = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Main' component={ScreenMain} />
        </Tab.Navigator>
    )
}

export default NavUser
