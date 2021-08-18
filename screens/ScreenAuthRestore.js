import { observer } from 'mobx-react-lite'
import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { COLORS, STYLES } from '../components/Styles'
import { Axi } from '../stores/helper'
import Store from '../stores/Store'

const ScreenAuthRestore = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('sasha@gray.me')

    const handleSubmit = async () => {
        let res = null;
        try {
            res = await Axi.put('/reset_password', { email });
        } catch (err) {
            setError(err)
        }
    }
    return (
        <View style={STYLES.containerCenter}>
            <Text>Restore access</Text>
            <Text>token: {Store.token}</Text>
            <TextInput style={STYLES.textInput} placeholder='sasha@gray.me' value={email} onChangeText={setEmail} />
            {error ? (<Text style={{ color: COLORS.ERROR }}>{error.message}</Text>) : (<Text></Text>)}
            <Button title='Reset' color={COLORS.ACCENT} onPress={handleSubmit} />
        </View>
    )
}

export default ScreenAuthRestore