import { makeAutoObservable } from "mobx"
import { Helper } from "./helper"

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

    fakeAuth = () => {
        this.user = {
            name: 'Sasha Gray',
            email: 'sasha@gray.me',
            email_confirmed: false,
            is_therapist: false,
        };
        this.token = 'FAKE_TOKEN';
    }

    load = async () => {
        const token = await Helper.getToken();
        if (token) {
            this.user = await Helper.getUser(token);
            this.token = token;
        }
    }

    userAuth = async (props) => {
        console.info(props)
    }

    userRestore = async (props) => {
        console.info(props)
    }

    userRegister = async (props) => {
        console.info(props)
        return 'Some error'
    }
}

const Store = RootStore.instance
export default Store