// Menu 컴포넌트
import styles from './Menu.module.css';
import { TiHome } from 'react-icons/ti';
import { FaRegCompass } from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';

function Menu({ activeMenu, statement }) {
  return (

    <div className={styles.menu}>
      { statement === true ?
        <>
      <a href="/"
        className={activeMenu === 'home' ? styles.focused : styles.link}>
        <TiHome className={styles.icon} />
        <div className={styles.text}>홈</div>
      </a>
      <a href="/explore"
        className={activeMenu === 'explore' ? styles.focused : styles.link}
      >
        <FaRegCompass className={styles.icon} />
        <div className={styles.text}>탐색</div>
      </a>
      <a href="/subscription"
        className={activeMenu === 'subscription' ? styles.focused : styles.link}
      >
        <MdSubscriptions className={styles.icon} />
        <div className={styles.text}>구독</div>
      </a>
      </>
    : null }
    </div>
  );
}

export default Menu;
