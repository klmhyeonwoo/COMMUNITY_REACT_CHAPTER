import styles from './Button.module.css';
import like from './images/like.png';

function Button(like_count) {
  return (
    <img src={like}>
  );
}

export default Button;
