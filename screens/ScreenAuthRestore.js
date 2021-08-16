import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { COLORS, STYLES } from '../components/Styles'
import Store from '../stores/Store'

const ScreenAuthRestore = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('sasha@gray.me')

    const handleSubmit = async () => {
        setError(await Store.userRestore({ email }))
    }
    return (
        <View style={STYLES.containerCenter}>
            <Text>Restore access</Text>
            <TextInput style={STYLES.textInput} placeholder='sasha@gray.me' value={email} onChangeText={setEmail} />
            {error ? (<Text style={{ color: COLORS.ERROR }}>{error.message}</Text>) : (<Text></Text>)}
            <Button title='Reset' color={COLORS.ACCENT} onPress={handleSubmit} />
        </View>
    )
}

export default ScreenAuthRestore