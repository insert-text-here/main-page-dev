import {createStore} from 'redux'

function auth(state = { user: 'default' }, action: any) {
    return {user: 'non'}
}

const store = createStore(auth)

export default store;