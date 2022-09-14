import { PostPreviewData } from '../../interfaces/GeneralInterfaces'
import CoverImage from '../ConverImage'
import styles from './styles.module.scss'
import Link from 'next/link'
import * as prismicH from '@prismicio/helpers'
import useLoaderStore from '../../hooks/hooks'

export default function PostPreview({ title, slug, coverimage, date, covercontent }: PostPreviewData) {
  const startLoading = useLoaderStore((state) => state.startLoading)

  const handleClick = (e) => {
    e.preventDefault()
    startLoading();
  };
  
  return (
    <div className={styles.postPreview}>
      <div className={styles.top_content}>
        <CoverImage
          title={title}
          slug={slug}
          field={coverimage}
        />
        <h3 onClick={(e) => handleClick(e)}>
          <Link href={`/blog/${slug}`}>
            {title}
          </Link>
        </h3>
        <p>{covercontent}</p>
      </div>
      <div className={styles.bottom_content}>
        <p className={styles.date}>{prismicH.asDate(date).toLocaleDateString()}</p>
        <p className={styles.author}>Por Graziela Matana</p>
      </div>
    </div>
  )
}