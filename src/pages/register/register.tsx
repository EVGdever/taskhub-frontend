import React from "react";
import styles from "./register.module.css"

export const RegisterPage = () => {
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
                                <div className={styles.label}>Email</div>
                                <input className={styles.input} placeholder="user@gmail.com" />
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Пароль</div>
                                <input type="password" className={styles.input} placeholder="••••••" />
                            </div>
                            <div className={styles.inputBlock}>
                                <div className={styles.label}>Повторить пароль</div>
                                <input type="password" className={styles.input} placeholder="••••••" />
                            </div>
                            <button className={styles.button}>Зарегестрироваться</button>
                        </div>
                    </div>
        </div>
    )
}