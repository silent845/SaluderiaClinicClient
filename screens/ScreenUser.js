import { observer } from 'mobx-react-lite'
import React from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import { useState } from 'react/cjs/react.development';
import { COLORS, STYLES } from '../components/Styles';
import Store from '../stores/Store'

const ScreenUser = observer(() => {
    const [pass, setPass] = useState('')
    const [result, setResult] = useState(null)

    handleResetPass = () => {
        const res = Store.userResetPass(pass);
        console.log('res:', res);
        setResult(res);
    }

    return (
        <View>
            <Text>Username</Text>
            <Text style={{ fontSize: 20, fontWeight: '700' }}>{Store.user?.name}</Text>
            <Text>New pass</Text>
            <TextInput style={STYLES.textInput} value={pass} onChangeText={setPass} />
            {result ? <Text>{result.message}</Text> : <Text></Text>}
            <Button title='Restore Pass' onPress={handleResetPass} />
            <Button title='Update' onPress={Store.userUpdate} />
            <Button title='Clean Storage' onPress={Store.userLogout} color={COLORS.ERROR} />
        </View>
    )
});

export default ScreenUser