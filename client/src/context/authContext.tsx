import React, { createContext, useContext, useState } from "react";
import { AdminLayout } from "../types";

interface AuthContextType {
    token: string | null;
    setToken: (token: string | null) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AdminLayout> = ({ children }) => {
    const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

    const saveToken = (newToken: string | null) => {
        setToken(newToken);
        if (newToken) {
            localStorage.setItem("token", newToken);
        } else {
            localStorage.removeItem("token");
        }
    };

    const logout = () => {
        saveToken(null);
    };

    return (
        <AuthContext.Provider value={{ token, setToken: saveToken, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// useAuth Hook'u: Kolay erişim için
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};