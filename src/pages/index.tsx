import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import Footer from "../components/Footer";
import HomeComponent from "../components/HomeComponent";
import Newsletter from "../components/Newsletter";
import ServicesComponent from "../components/ServicesComponent";
import Head from "next/head";

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
    <Head>
      <title>Graziela Matana • Advocacia Contratual</title>
    </Head>
    <div className={styles.scroll}>
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
      <Footer />
    </div>
    </>
  )
}
