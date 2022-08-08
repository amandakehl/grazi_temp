import styles from './styles.module.scss'
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

export default function ContactComponent() {
  return (
    <>
      <div className={styles.left}>
        <span>sinta-se a vontade para</span>
        <h2>entrar em contato</h2>
        <p><a href="https://api.whatsapp.com/send?phone=54991119962">(54) 99111-9962</a></p>
        <p><a href="mailto:ola@grazielamatanaadvocacia.com.br">ola@grazielamatanaadvocacia.com.br</a></p>
        <p>www.grazielamatanaadvocacia.com.br</p>
        <div className={styles.buttons}>
          <a href='https://www.instagram.com/grazielamatana/' rel="noreferrer" target='_blank'>
            <AiFillInstagram color='#FFFFFF' />
          </a>
          <a href='https://www.linkedin.com/in/graziela-matana-bb347b1b5/' rel="noreferrer" target='_blank'>
            <AiFillLinkedin color='#FFFFFF' />
          </a>
        </div>
        <button><a href="https://api.whatsapp.com/send?phone=54991119962">Me chama!</a></button>
      </div>
      <div className={styles.right}>
        <img src='/contact.png' alt="logo" />
      </div>
    </>
  )
}