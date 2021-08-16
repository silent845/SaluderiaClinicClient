import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { COLORS, STYLES } from '../components/Styles'
import Store from '../stores/Store'

const ScreenAuthRegister = () => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('sasha@gray.me')
    const [name, setName] = useState('Sasha Gray')
    const [password, setPassword] = useState('')

    const handleSubmit = async () => {
        setError(await Store.userRegister({ email, name, password }))
    }

    return (
        <View style={STYLES.containerCenter}>
            <Text>Register</Text>
            <TextInput style={STYLES.textInput} placeholder='Sasha Gray' autoCompleteType='name' value={name} onChangeText={setName} />
            <TextInput style={STYLES.textInput} placeholder='sasha@gray.me' autoCompleteType='email' value={email} onChangeText={setEmail} />
            <TextInput style={STYLES.textInput} placeholder='p@ssw0rd' autoCompleteType='password' value={password} onChangeText={setPassword} />
            {error ? (<Text style={{ color: COLORS.ERROR }}>{error.message}</Text>) : <Text></Text>}
            <Button title='Submit' color={COLORS.ACCENT} onPress={handleSubmit} />
        </View>
    )
}

export default ScreenAuthRegister
