import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

export const Helper = {
    getToken: async () => {
        return await SecureStore.getItemAsync('user_token')
    },
    setToken: async ({ token }) => {
        await SecureStore.setItemAsync('user_token', token)
    },
    getUser: async ({ token }) => {
        return await AsyncStorage.getItem('@user')
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
    return Promise.reject(
        {
            'message': error.response.data.message,
            'status': error.response.status
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