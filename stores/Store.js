import { makeAutoObservable } from "mobx"
import { Axi, HelperStorage } from "./helper"

class RootStore {
    static instance = this.instance || new RootStore()

    user = {
        email: null,
        name: null,
        email_confirmed: null,
        is_therapist: null,
    }

    token = null

    constructor() {
        makeAutoObservable(this)
    }

    setToken = (token) => {
        this.token = token;
    }

    setUser = (user) => {
        this.user = user;
    }

    prepare = async () => {
        let savedToken = await HelperStorage.getToken();
        if (savedToken) {
            let user = JSON.parse(await HelperStorage.getStorageValue('@user'));
            if (user) this.setUser(user);
            if (savedToken) this.setToken(savedToken);
        }
    }

    userLogout = async () => {
        await HelperStorage.cleanStorage();
        this.setUser(null);
        this.setToken(null);
        delete Axi.defaults.headers.common['Authorization'];
    }

    fakeAuth = async (props) => {
        if (props) {
            this.user = props;
            this.token = this.user.access_token;
            await HelperStorage.setToken(this.token);
            await HelperStorage.setStorageValue('@user', JSON.stringify(this.user))
            Axi.defaults.headers.common['Authorization'] = 'Bearer ' + this.token;
        } else {
            this.user = {
                name: 'Sasha Gray',
                email: 'sasha@gray.me',
                email_confirmed: false,
                is_therapist: false,
            };
            this.token = 'FAKE_TOKEN';
        }
    }

    userUpdate = async () => {
        let response = await Axi.get('/user');
        this.setUser(response.data);
    }

    userResetPass = async (password) => {
        let result = null;
        result = await Axi.post('/reset_password', { 'token': this.token, 'password': password })
            .then(response => {
                console.log('response::', response.data);
                result = response.data;
                return result;
            })
            .catch(err => {
                console.log('error', err);
                switch (err.status) {
                    case 401:
                        this.userLogout();
                        break;
                    case 403:
                        //bot
                        break;
                    case 404:
                        //not found
                        break;
                    case 409:
                        //fukin shit
                        break;
                    default:
                        break;
                }
            });

            console.log('result 123', result);

        return result;
    }

};

const Store = RootStore.instance
export default Store