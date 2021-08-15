import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenMain from '../screens/ScreenMain'
import StackAuth from './StackAuth'
import { COLORS } from '../components/Styles'
import { Ionicons } from '@expo/vector-icons'
const Tab = createBottomTabNavigator()

const NavAuth = () => {
    return (
        <Tab.Navigator>
            <Tab.Group
                screenOptions={{
                    headerShown: false,
                    tabBarActiveTintColor: COLORS.ACCENT,
                    tabBarInactiveTintColor: COLORS.INACTIVE,
                }}
            >
                <Tab.Screen name='TabAbout' component={ScreenMain}
                    options={{
                        title: 'Services',
                        tabBarIcon: ({color, size}) => <Ionicons name='medical-outline' color={color} size={size} />
                    }}
                />
                <Tab.Screen name='TabAuth' component={StackAuth}
                    options={{
                        title: 'Auth',
                        tabBarIcon: ({color, size}) => <Ionicons name='lock-closed-outline' color={color} size={size} />
                    }}
                />
            </Tab.Group>
        </Tab.Navigator>
    )
}

export default NavAuth
