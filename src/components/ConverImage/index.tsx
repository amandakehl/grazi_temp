import styles from './styles.module.scss'
import { PrismicNextImage } from '@prismicio/next';
import Link from 'next/link'
import useLoaderStore from '../../hooks/hooks';

export default function CoverImage({ title, field, slug, withLink = true }) {
  const startLoading = useLoaderStore((state) => state.startLoading)

  const handleClick = (e) => {
    e.preventDefault()
    startLoading();
  };
  
  const image = (
    <PrismicNextImage
      field={field}
    />
  )
  const link = (
    <div className={styles.coverImage} onClick={(e) => handleClick(e)}>
      <Link href={`/blog/${slug}`}>
        <a aria-label={title}>{image}</a>
      </Link>
    </div>
  )

  return withLink ? link : image
}