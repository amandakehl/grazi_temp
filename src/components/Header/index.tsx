import styles from './styles.module.scss'

export default function HeaderComponent() {
  return (
    <>
      <nav className={styles.sticky}>
        <div className={styles.header}>
          <a href="">
            <img src='./logo1.JPG' alt='logo' />
          </a>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="">Serviços</a></li>
            {/* <li><a href="">Blog</a></li> */}
            <li><a href="">Contato</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}