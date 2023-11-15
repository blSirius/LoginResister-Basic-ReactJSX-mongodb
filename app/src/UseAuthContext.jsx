import React, { createContext, useContext, useEffect, useState } from 'react'

const UserAuthContext = createContext();

export function UserAuthContextProvider({ children }) {

    const [user, setUser] = useState({});

    function login(email, password) {
        return signInWithEmailAndPassword(auth, email, password)
        
    }

    function signUp(email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function logOut() {
        return signOut(auth);
    }


    return (
        <UserAuthContext.Provider value={{ user, login, signUp, logOut }} >
            {children}
        </UserAuthContext.Provider>
    )
}

export function useUserAuth() {
    return useContext(UserAuthContext);
}

