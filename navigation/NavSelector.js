import { NavigationContainer } from '@react-navigation/native'
import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text } from 'react-native'
import Store from '../stores/Store'
import NavAuth from './NavAuth'
import NavUser from './NavUser'

const NavSelector = observer(() => {
    return (
        <NavigationContainer>
            {Store.token ?
                <NavUser />
                :
                <NavAuth />
            }
        </NavigationContainer>
    )
})

export default NavSelector
