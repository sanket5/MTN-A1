

export interface User{
    email: string;
    password: string;
}

export interface AuthState{
    isAuthenticated: boolean;
    user: null | User;
    errorMessage: string | null;
}
