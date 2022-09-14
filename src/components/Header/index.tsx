import styles from './styles.module.scss'
import Link from 'next/link'
import useLoaderStore from '../../hooks/hooks'

export default function HeaderComponent() {
  const startLoading = useLoaderStore((state) => state.startLoading)

  const handleClick = (e) => {
    e.preventDefault()
    startLoading();
  };

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
            <li onClick={(e) => handleClick(e)} >
              <Link href="/blog">
                Blog
              </Link>
            </li>
            <li><Link href="/#contact">Contato</Link></li>
          </ul>
        </div>
      </nav>
    </>
  )
}

