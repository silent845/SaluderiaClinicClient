import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenMain from '../screens/ScreenMain'
import { MaterialCommunityIcons as MCI, FontAwesome as FA } from '@expo/vector-icons'
import { COLORS } from '../components/Styles'
import ScreenTherapists from '../screens/ScreenTherapists'
import ScreenUser from '../screens/ScreenUser'
const Tab = createBottomTabNavigator()

const NavUser = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: COLORS.ACCENT,
            tabBarInactiveTintColor: COLORS.INACTIVE,
            headerStyle: {
                backgroundColor: COLORS.ACCENT,
            },
            headerTitleStyle: {
                color: '#fff'
            }
        }}>
            <Tab.Screen name='Main' component={ScreenUser}
                options={{
                    title: 'Current User',
                    tabBarIcon: ({ color, size }) => <MCI name='cow' color={color} size={size} />
                }}
            />
            <Tab.Screen name='Therapists' component={ScreenTherapists}
                options={{
                    title: 'Therapists',
                    tabBarIcon: ({ color, size }) => <FA name='users' color={color} size={size} />
                }}
            />
        </Tab.Navigator>
    )
}

export default NavUser
