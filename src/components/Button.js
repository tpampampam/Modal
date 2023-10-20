import style from './Button.module.css'

const Button = ({children, ...rest}) => {
    return (
        <button className={style.button} {...rest}>{children}</button>
    )
}

export default Button