import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { COLORS, STYLES } from '../components/Styles'
import Store from '../stores/Store'

const ScreenAuthRestore = () => {
    const [error, setError] = useState('')
    const [email, setEmail] = useState('sasha@gray.me')

    const handleSubmit = async () => {
        setError(await Store.userRestore({ email }))
    }
    return (
        <View>
            <Text>Restore</Text>
            <TextInput style={STYLES.textInput} placeholder='sasha@gray.me' value={email} onChangeText={setEmail} />
            <Button title='Reset' color={COLORS.ACCENT} onPress={handleSubmit} />
            {error && (<Text style={{ color: COLORS.ERROR }}>{error}</Text>)}
        </View>
    )
}

export default ScreenAuthRestore