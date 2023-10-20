
import style from './Modal.module.css'

const ModalCallUs = ({setModalCallUs}) => {
    

    return (
        <div className={style.wrapper}>
            <div className={style.modal}>
                <form> 
                    <span className={style.closer} onClick={() => setModalCallUs(false)}>X</span>
                    <h2>Call us if you got any questions</h2>
                    <div class='phone'><a href="tel:+74951234567">+7 (495) 123-45-67</a></div>
                </form>
            </div>
        </div>
    )
}

export default ModalCallUs