import { makeAutoObservable } from "mobx"
import { Axi, Helper } from "./helper"

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

    fakeAuth = (props) => {
        if (props) {
            console.log('props', props)
            this.user = props;
            //this.token = props.access_token;
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

    load = async () => {

    }

    userAuth = async (props) => {
        //sasha@gray.me 123
        let result = await Axi.post('/login', props);
        console.log('authResult:', result);
        if (result.status === 200) {
            this.fakeAuth(result.data)
        }
        return result;
    }

    userRestore = async (props) => {
        return await Axi.put('/reset_password', props);
    }

    userRegister = async (props) => {
        let result = await Axi.post('/user', props);
        return result
    }
}

const Store = RootStore.instance
export default Store