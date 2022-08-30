import { ServiceGrid } from '../../interfaces/GeneralInterfaces'
import styles from './styles.module.scss'

export default function ServiceGridComponent({number, title, children}: ServiceGrid) {
  return (
    <div className={styles.serviceGridItem}>
      <div className={styles.number}>
        <span>{number}</span>
      </div>
      <div className={styles.contentService}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
      </div>
    </div>
  )
}