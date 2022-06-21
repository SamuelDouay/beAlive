export interface IUser {
    email: String;
    name: string;
    firstname: string;
    username: string;
    age: number;
    connected: boolean;
}

export function createUser({ email, name, firstname, username, age, connected }: any): IUser {
    return { email, name, firstname, username, age, connected };
}


export interface IUserRegister {
    name: string;
    email: string;
    password: string;
}

export function createUserRegister({ name, email, password }: any): IUserRegister {
    return {
        name,
        email,
        password,
    };
}

export interface IUserLogin {
    email: string;
    password: string;
}

export function createUserLogin({ email, password }: any): IUserLogin {
    return {
        email,
        password,
    };
}