export interface IUser {
    name: string;
    age: number,
    email: string;
    password: string;
}

export function createUser({ name, age, email, password }: any): IUser {
    return { name, age, email, password };
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