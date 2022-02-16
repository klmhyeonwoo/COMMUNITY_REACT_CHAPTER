import styles from './Button.module.css';
import like from './like.png';

function Button({value, onClick}) {
  return (
    <div>
    {value === false && <button type="submit"> <img src = {like} className={styles.false} onClick={onClick}/> </button> }
    {value === true && <button type="submit"> <img src = {like} className={styles.true} onClick={onClick}/> </button>}
    </div>
    );
}

export default Button;
