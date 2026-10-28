
import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.navbar}>
    
    <h3 className={styles.txt}>
        This is nav bar
    </h3>
    <button className={styles.btn}>
        click me
    </button>
    </div>
  )
}

export default Header