
import { useState, useEffect } from 'react'
import Button from './Button'
import style from './Header.module.css'
// import Modal from './modal/Modal'
// import ModalCallMe from './modal/ModalCallMe'

const Header = ({setModal, setModalCallMe}) => {

    return (
        <>
            <div className={style.header}>
                <Button onClick={() => setModal(true)}>Fill the form out</Button>
                <ul>
                    <li>Link1</li>
                    <li>Link2</li>
                    <li>Link3</li>
                </ul>
                <Button onClick={() => setModalCallMe(true)}>Call me</Button>
            </div>
            
        </>
    )
}

export default Header