import { ServiceGrid } from '../../interfaces/GeneralInterfaces'
import styles from './styles.module.scss'

export default function ServiceGridComponent({number, title, children}: ServiceGrid) {
  return (
    <div className={styles.service_grid_item}>
      <div className={styles.number}>
        <span>{number}</span>
      </div>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}