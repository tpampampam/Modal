import { useState } from 'react'
import Button from '../Button'
import ModalCallUs from '../modal/ModalCallUs'
import style from './Footer.module.css'

const Footer = ({setModalCallUs, setModalProblem}) => {
    

    return(
        <>
            <footer className={style.footer}>
                <div className={style.items}>
                    <span>Career</span>
                    <span>News</span>
                    <span>Something</span>
                    <span>Contacts</span>
                </div>
                <div className={style.btn}>
                    <Button onClick={() => setModalCallUs(true)}>Call us</Button>
                    <Button onClick={() => setModalProblem(true)}>Tell us about the problem</Button>
                </div>
            </footer>
        </>
    )
}
export default Footer