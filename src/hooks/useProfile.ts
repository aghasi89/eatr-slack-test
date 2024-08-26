import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { UserType } from "../utils/types";

export const useProfile = (userId?: number ) => {
    const { users } = useContext(AuthContext);
    const [user, setUser] = useState<UserType | null>(null);
    useEffect(() => {
        if(userId === undefined) return;
        for (let i = 0; i < users.length; i++) {
            if (users[i].id === userId) {
                setUser(users[i]);
                break;
            }
        }
    }, [userId, users]);
    return user
}
