import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput } from 'react-native'
import { COLORS } from '../components/Styles'
import { Axi } from '../stores/helper'
import Store from '../stores/Store'

const ScreenAuth = ({ navigation }) => {
    const [error, setError] = useState(null)
    const [email, setEmail] = useState('sasha@gray.me')
    const [password, setPassword] = useState('')

    const handleEmail = (emailValue) => {
        setEmail(emailValue.trim())
    }

    const handleLogin = async () => {
        let res = null;
        try {
            res = await Axi.post('/login', { email, password });
            if (res.status === 200) {
                Store.fakeAuth(res.data);
            }
        } catch (err) {
            setError(err);
        }
    }

    return (
        <View style={styles.container}>
            <Text>Auth</Text>
            <TextInput style={styles.textInput} placeholder='sasha@gray.me'
                autoCompleteType='email'
                value={email}
                onChangeText={handleEmail}
            />
            <TextInput style={styles.textInput} placeholder='p@ssw0rd' autoCompleteType='password' secureTextEntry={true}
                value={password}
                onChangeText={setPassword}
            />
            {error ? (<Text style={{ color: COLORS.ERROR, }}>{error.message}</Text>) : <Text></Text>}

            <Button title='Login' color={COLORS.ACCENT} onPress={handleLogin} />
            <Button title='Fake Auth' color='red' onPress={Store.fakeAuth} />

            <View style={{ flexDirection: 'row' }}>
                <Button title='Restore' onPress={() => navigation.navigate('AuthRestore')} />
                <Button title='Register' onPress={() => navigation.navigate('AuthRegister')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 0.5,
        borderColor: COLORS.ACCENT,
        height: 30,
        width: 200,
        paddingHorizontal: 5,
        margin: 5,
    }
})

export default ScreenAuth