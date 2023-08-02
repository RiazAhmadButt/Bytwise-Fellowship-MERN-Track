import { TextInput } from '../../components/textInput/TextInput';
import loginSchema from '../../schemas/LoginSchema';
import {useFormik} from 'formik';
import styles from "./Login.module.css";

export const Login = () => {

    const {values, touched, handleBlur, handleChange, errors} = useFormik({
       initialValues : {
        username: '',
        password: ''
       },
       validationSchema : loginSchema
    })

    return (
        <div className={styles.loginWrapper}>
            <div className={styles.loginHeader}>
                Login to your account
            </div>
            <TextInput 
            type= 'text'
            vlaue= {values.username}
            name = 'username'
            onBlur= {handleBlur}
            onChange = {handleChange}
            placeholder = "username"
            error = {errors.username && touched.username ? 1: undefined}
            errormessage = {errors.username}
            />
            <TextInput 
            type= 'passord'
            vlaue= {values.password}
            name = 'password'
            onBlur= {handleBlur}
            onChange = {handleChange}
            placeholder = "password"
            error = {errors.password && touched.password ? 1: undefined}
            errormessage = {errors.password}
            />
            <button className={styles.loginBtn}>Login</button>
            <span>
                Don't have an account ? <button className={styles.registerBtn}>Register</button>
            </span>

        </div>
    )
}
