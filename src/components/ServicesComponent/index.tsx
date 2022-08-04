import ServiceGridComponent from '../ServiceGridComponent'
import styles from './styles.module.scss'

export default function ServicesComponent() {
  return (
    <div className={styles.service}>
      <h2>Serviços</h2>
      <span className={styles.subtitle}>Esses são os serviços prestados: </span>
      <div className={styles.grid}>
        <ServiceGridComponent number={1} title="Contratos">
          <span>Elaboração de contratos:<br/></span>
          <span>- COMPRA E VENDA<br/></span>
          <span>- LOCAÇÃO<br/></span>
          <span>- PRESTAÇÃO DE SERVIÇOS</span>
        </ServiceGridComponent>
        <ServiceGridComponent number={2} title="Societário">
          <span>Abertura de empresas;<br/></span>
          <span>Alteração de contrato social;<br/></span>
          <span>Acordo de sócios.<br/></span>
        </ServiceGridComponent>
        <ServiceGridComponent number={3} title="Legal design">
          <span>Transformação de contratos <br/>utilizando o legal design;<br/></span>
          <span>Elaboração de documentos jurídicos <br/>para escritórios de advocacia.<br/></span>
        </ServiceGridComponent>
      </div>
      <span className={styles.contact}>Ficou com alguma dúvida? <span className={styles.color}>Entre em contato! :)</span></span>
    </div>
  )
}