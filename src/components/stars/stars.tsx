type StarsProps = {
  rating: number;
  reviewCount?: number;
}

function Stars({rating, reviewCount}: StarsProps): JSX.Element {

  const getStars = () => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(
          <svg width="17" height="16" aria-hidden="true" key={i}>
            <use xlinkHref="#icon-full-star"></use>
          </svg>
        );
      } else {
        stars.push(
          <svg width="17" height="16" aria-hidden="true" key={i}>
            <use xlinkHref="#icon-star"></use>
          </svg>
        );
      }
    }

    return stars;
  };

  return (
    <div className="rate product-card__rate">

      {getStars()}

      <p className="visually-hidden">Рейтинг:</p>
      <p className="rate__count"><span className="visually-hidden">Всего оценок:</span>{reviewCount}</p>
    </div>
  );
}

export default Stars;
