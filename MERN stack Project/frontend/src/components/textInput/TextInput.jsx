import styles from './TextInput.module.css'


export const TextInput = (props) => {
  return (
    <div className={styles.textInputWrapper}>
        <input  {...props}/>
        {props.error && <p>{props.errormessage}</p>}
    </div>
  )
}
