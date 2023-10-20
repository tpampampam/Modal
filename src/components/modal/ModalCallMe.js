import Button from "../Button"
import { useState } from "react"
import style from './Modal.module.css'

const validateCallMe = (data) => {
    const {phone} = data;

    if(typeof phone === 'string') {
        return 'Phone is not a number';
    }
}

const ModalCallMe = ({setModalCallMe}) => {
    const [error, setError] = useState(false);
    const [phone, setPhone] = useState('')


    const getData = (formType) => (e) => {
        e.preventDefault()
        let user = {phone}
        let validationResult;

        switch (formType) {
            case 'callMe':
                validationResult = validateCallMe(user)
                break;
        
            default:
                break;
        }

        if(validationResult !== true) {
            setError(validationResult);
            return;
        }

        console.log(user)
        setPhone('')
        setModalCallMe(false)
    }

    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <form onSubmit={getData("callMe")}>
                    <span className={style.closer} onClick={() => setModalCallMe(false)}>X</span>
                    <label htmlFor="phone">Your phone number:</label>
                    <input name='phone' type="text" placeholder="phone" value={phone} 
                            onChange={e => setPhone(e.target.value)}/>
                            {error}
                    <Button>Submit</Button>
                </form>
            </div>
        </div>
    )
}
export default ModalCallMe