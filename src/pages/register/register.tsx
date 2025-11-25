import React, {useState} from "react";
import styles from "./register.module.css"
import cn from "classnames"
import axios from "axios"

export const RegisterPage = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const notMatchError = password === repeatPassword && password.length >= 6 && repeatPassword.length >= 6;
    const handleRegister = () => {
        axios.post(
            "http://localhost:5000/api/auth/register",
            {
                name: name,
                email: email,
                password: password
            }
        )
        .then((response) => {
            console.log(response)
        })
    }

    return (
        <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        TaskHub
                    </div>
                </div>
                    <div className={styles.container}>
                        <div className={styles.block}>
                            <div className={styles.titleBlock}>
                                <div className={styles.title}>Регистрация</div>
                                <div className={styles.subTitle}>Заполните форму для регистрации</div>
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Имя</div>
                                <input
                                    className={styles.input}
                                    placeholder="Введите имя"
                                    value={name}
                                    onChange={(event) => {
                                        setName(event.target.value)
                                    }}
                                />
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Email</div>
                                <input
                                    className={styles.input}
                                    placeholder="user@gmail.com"
                                    value={email}
                                    onChange={(event) => {
                                        setEmail(event.target.value)
                                    }}
                                />
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Пароль</div>
                                <input
                                    type="password"
                                    className={cn([styles.input, !notMatchError && styles.inputError])}
                                    placeholder="••••••"
                                    value={password}
                                    onChange={(event) => {
                                        setPassword(event.target.value)
                                    }}
                                />
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Повторить пароль</div>
                                <input
                                    type="password"
                                    className={cn([styles.input, !notMatchError && styles.inputError])}
                                    placeholder="••••••"
                                    value={repeatPassword}
                                    onChange={(event) => {
                                        setRepeatPassword(event.target.value)
                                    }}
                                />
                                {!notMatchError && <div className={styles.error}>Пароли не совпадают</div>}
                            </div>
                            <button
                                className={cn( [styles.button, !notMatchError && styles.buttonDisabled])}
                                disabled={!notMatchError}
                                onClick={handleRegister}
                            >
                                Зарегестрироваться
                            </button>
                        </div>
                    </div>
        </div>
    )
}


