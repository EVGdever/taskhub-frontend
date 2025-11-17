import React from "react";
import styles from "./register.module.css"

export const RegisterPage = () => {
    console.log(styles)
    return (
        <div className={styles.main}>
                <div className={styles.header}>
                    <div className={styles.logo}>
                        TaskHub
                    </div>
                </div>
                    <div className={styles.container}>
                        <div className={styles.block}>
                            <div className={styles.title1}>
                                <div className={styles.text1}>Регистрация</div>
                                <div className={styles.text2}>Заполните форму для регистрации</div>
                            </div>
                            <div className={styles.title2}>
                                <div className={styles.text3}>Email</div>
                                <input className={styles.form} placeholder="user@gmail.com" />
                            </div>
                            <div className={styles.title2}>
                                <div className={styles.text3}>Пароль</div>
                                <input type="password" className={styles.form} placeholder="••••••" />
                            </div>
                            <div className={styles.title2}>
                                <div className={styles.text3}>Повторить пароль</div>
                                <input type="password" className={styles.form} placeholder="••••••" />
                            </div>
                            <button className={styles.button}>Зарегестрироваться</button>
                        </div>
                    </div>
        </div>
    )
}