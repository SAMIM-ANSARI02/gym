import * as Yup from 'yup'
 export const SignUpschema=Yup.object({
    username:Yup.string().min(2).max(26).required('please enter your name'),
    email:Yup.string().email().required("please enter your email"),
    phone:Yup.string().min(10).required('please enter phone number'),
    age:Yup.string().required('please enter age'),


 })