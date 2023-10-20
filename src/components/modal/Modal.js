import { useState } from "react"
import Button from "../Button"
import style from './Modal.module.css'

const Modal = ({setModal}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const getData = (e) => {
        e.preventDefault()
        let user = {name , email}
        console.log(user)
        setEmail('')
        setName('')
        setModal(false)
    }

    const setNameHandler = (e)=>setName(e.target.value);
    const setEmailHandler = (e) => setEmail(e.target.value);

    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <form onSubmit={getData}> 
                    <span className={style.closer} onClick={() => setModal(false)}>X</span>
                    <input type="text" placeholder="name"
                            value={name}
                            onChange={setNameHandler}/>
                    <input type="email" placeholder="email"
                            value={email}
                            onChange={setEmailHandler}/>
                    <Button>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default Modal