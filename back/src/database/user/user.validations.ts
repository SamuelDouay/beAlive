import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    email: Yup.string().required(),
    name: Yup.string().required(),
    firstname: Yup.string().required(),
    age: Yup.number().integer().required(),
    connected: Yup.bool().required()
});

export const userRegisterSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
});

export const userLoginSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
});