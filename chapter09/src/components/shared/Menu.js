import styles from './Menu.module.css';
import {Link} from 'react-router-dom';

function Menu() {
  return (
    <div>
      <div className={styles.menu}>
      <Link to='/' className={styles.href}> 홈 </Link>
      </div>
      <div className={styles.menu}>
      <Link to='/subscription' className={styles.href}>탐색</Link>
      </div>
      <div className={styles.menu}>
      <Link to='/explore' className={styles.href}>구독</Link>
      </div>
      <div className={styles.menu}>
      <Link to='/assignment' className={styles.href}>과제</Link>
      </div>
    </div>
  );
}

export default Menu;
