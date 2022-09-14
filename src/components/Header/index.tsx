import styles from './styles.module.scss'
import Link from 'next/link'

export default function HeaderComponent() {
  return (
    <>
      <nav className={styles.sticky}>
        <div className={styles.header}>
          <Link href="/#home">
            <img src='./favicon.png' alt='Símbolo Graziela Matana' />
          </Link>
          <ul>
            <li><Link href="/#home">Início</Link></li>
            <li><Link href="/#about">Sobre mim</Link></li>
            <li><Link href="/#services">Serviços</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/#contact">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}