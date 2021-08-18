import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const HelperStorage = {
    getToken: async () => {
        return await SecureStore.getItemAsync('user_token');
    },
    setToken: async (token) => {
        try {
            await SecureStore.setItemAsync('user_token', token);

        } catch (error) {
            console.warn(error.message)
        }
    },

    setStorageValue: async (key, value) => {
        await AsyncStorage.setItem(key, value);
    },
    getStorageValue: async (key) => {
        return await AsyncStorage.getItem(key);
    },
    cleanStorage: async () => {
        await AsyncStorage.clear();
        await SecureStore.deleteItemAsync('user_token');
    }
}

export const Axi = axios.create({
    baseURL: 'https://api.saluderia.com/',
    timeout: 1000,
    timeoutErrorMessage: 'timeout error',
    headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json'
    }
})

Axi.interceptors.response.use(response => {
    return response;
}, error => {
    console.log(error);

    return Promise.reject(
        {
            'message': error.response?.data.message,
            'status': error.response?.status
        }
    );
})

Axi.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log('interceptor:request', error.request)
        return Promise.reject(error);
    })