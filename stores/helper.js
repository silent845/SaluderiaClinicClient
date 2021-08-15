import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';

export const Helper = {
    getToken: async () => {
        let result = await SecureStore.getItemAsync('user_token')
        return result
    },
    setToken: async ({ token }) => {
        await SecureStore.setItemAsync('user_token', token)
    },
    getUser: async ({ token }) => {
        //await AsyncStorage.getItem('@user')
    }
}