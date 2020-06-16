import React from 'react'
import styles from "./Wrapper.module.css"

export const Wrapper = (props) => {
    return (
        <div className={styles.Wrapper}>
            <h1>{props.title}</h1>
            {props.children}
        </div>
    )
}

export default Wrapper;