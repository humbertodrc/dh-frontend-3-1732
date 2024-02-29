import Image from 'next/image';
import { FC } from 'react';

interface Props {
  rating: number;
  maxStars?: number
}

export const Rating: FC<Props> = ({maxStars = 5, rating}) => {
  const stars = Array.from({ length: maxStars }).map((_, index) => (
    <Image
      key={index}
      alt={index <= rating ? "yellow star" : "empty star"}
      // Siempre que el index sea menor o igual a rating, se va a mostrar la estrella amarilla, sino la vacia
      src={index <= rating ? "/img/yellowStar.png" : "/img/emptyStar.png"}
      width={20}
      height={20}
    />
  ));

  return <>{stars}</>;
}
