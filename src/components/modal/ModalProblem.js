import { useEffect } from "react"
import { useState } from "react"
import Button from "../Button"
import style from './Modal.module.css'


const ModalProblem = ({setModalProblem}) => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [text, setText] = useState('')

    const getData = (e) => {
        e.preventDefault()

        let problem = {
            name,
            phone,
            description:text
        }
        setName('')
        setPhone('')
        setText('')
        setModalProblem(false)
        console.log(problem)
    }

    return (
        <div className={style.wrapper} >
            <div className={style.modal__problem}>
                <form onSubmit={getData} > 
                    <span className={style.closer} onClick={() => setModalProblem(false)}>X</span>
                    <input type="text" placeholder="name"
                            value={name}
                            onChange={(e)=>setName(e.target.value)}/>
                    <input type="tel" placeholder="phone" name='tel'
                            value={phone}
                            onChange={e => setPhone(e.target.value)}/>
                    <textarea type='text' value={text} onChange={e => setText(e.target.value)}></textarea>
                    <Button>Submit</Button>
                </form>
            </div>
        </div>
    )
}

export default ModalProblem