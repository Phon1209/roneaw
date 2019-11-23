import React from 'react'

const UserContext = React.createContext({
    name: '',
    id : 0,
    updateName : () => {}
});

const UserProvider = UserContext.Provider
const UserConsumer = UserContext.Consumer

export {UserProvider , UserConsumer};