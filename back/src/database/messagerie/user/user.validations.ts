import * as Yup from 'yup';

export const userSchema = Yup.object().shape({
    name: Yup.string().required(),
    age: Yup.number().required(),
    email: Yup.string().required(),
    password: Yup.string().required(),
});

export const userLoginSchema = Yup.object().shape({
    email: Yup.string().required(),
    password: Yup.string().required(),
});