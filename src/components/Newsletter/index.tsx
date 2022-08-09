import styles from './styles.module.scss'

export default function Newsletter() {
  return (
    <section className={styles.newsletter + " container"}>
      <img src='/newsletter.jpg' alt='mulher no computador'/>
      <div className={styles.information}>
        <h3>Receba conteúdos semanais exclusivos sobre direito societário e legal design.</h3>
        <input placeholder='email@email.com' />
        <button>Quero receber!</button>
      </div>
    </section>
  )
}