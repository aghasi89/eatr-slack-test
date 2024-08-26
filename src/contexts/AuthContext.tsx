import React, { createContext, useEffect, useState } from 'react';
import storage from '../utils/stogare';
import { AuthContextProps } from '../utils/interfaces';
import { UserType } from '../utils/types';
const AVATARS = [
    'https://avatar.iran.liara.run/public/job/operator/male',
    'https://avatar.iran.liara.run/public/job/teacher/female',
    'https://avatar.iran.liara.run/public/job/teacher/male',
    'https://avatar.iran.liara.run/public/job/farmer/male',
    'https://avatar.iran.liara.run/public/job/operator/female',
    'https://avatar.iran.liara.run/public/job/astronomer/female',
];  






export const AuthContext = createContext<AuthContextProps>({
    users:[],
    currentUser:null,
    isAuthenticated: false,
    login: () => {},
    logout: () => {},
});

const AuthContextProvider = ({children}:{children:React.ReactNode}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [users,setUsers] = useState<UserType[]>([]);
    const [currentUser,setCurrentUser] = useState<UserType|null>(null);
    useEffect(()=>{
        
        storage.getItem<UserType[]>('users').then((users)=>{
            if(users){
                setUsers(users)
            }}).catch((e)=>{
                console.log(e)
            });
    },[]);
    const login = (email:string,username:string) => {
        // Logic for login
        const user = users.find(user=>user.email === email);
        if(user === undefined){
            const newUser = {
                id:users.length+1,
                username:username,
                email:email,
                avatar:AVATARS[Math.floor(Math.random()*AVATARS.length)],
            }
            setUsers([...users,newUser]);
            storage.setItem('users',[...users,newUser]);
            setCurrentUser(newUser);
        }
        else{
            setCurrentUser(user);
        }
        
        setIsAuthenticated(true);
    };

    const logout = () => {
        // Logic for logout
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, currentUser,users }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;