import styles from './styles.module.scss'

export default function HeaderComponent() {
  return (
    <>
      <nav className={styles.sticky}>
        <div className={styles.header}>
          <a href="">
            <img src='./logo1.JPG' alt='Símbolo Graziela Matana' />
          </a>
          <ul>
            <li><a href="#home">Início</a></li>
            <li><a href="#about">Sobre mim</a></li>
            <li><a href="#services">Serviços</a></li>
            {/* <li><a href="">Blog</a></li> */}
            <li><a href="#contact">Contato</a></li>
          </ul>
        </div>
      </nav>
    </>
  )
}