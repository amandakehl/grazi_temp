import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import HomeComponent from "../components/HomeComponent";
import Newsletter from "../components/Newsletter";
import ServicesComponent from "../components/ServicesComponent";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <section id="home" className={styles.home}>
        <HomeComponent />
      </section>
      <section id="about" className={styles.about}>
        <AboutComponent />
      </section>
      <section id="services" className={styles.services}>
        <ServicesComponent />
      </section>
      <section id="contact" className={styles.contact}>
        <ContactComponent />
      </section>
      <section id="newsletter" className={styles.newsletter}>
        <Newsletter />
      </section>
    </>
  )
}
