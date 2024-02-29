import { Product } from '@/types'
import { FC } from 'react'
import styles from './Card.module.css'
import Image from 'next/image';
import { formatPrice } from '@/utils';
import { Rating } from '../rating';

interface Props {
  product: Product;
}

export const Card: FC<Props> = ({ product }) => {
  
  const { id, title, rating, price, image, description } = product

  return (
    <div className={styles.card} key={id}>
      <h2>{title}</h2>
      <p>
        <Rating rating={rating} />
        <b className={styles.price}>${formatPrice(price)}</b>
      </p>
      <div className={styles.imageDescription}>
        <Image
          src={image}
          width={100}
          height={130}
          alt={title}
        />
        <p>{description}</p>
      </div>
    </div>
  )
}
