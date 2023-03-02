import { useEffect, useState } from 'react';
import { REVIEWS_PER_PAGE } from '../../consts';
import { Review } from '../../types/types';
import ReviewCard from '../review-card/review-card';

type ReviewsBlockProps = {
  reviews: Review[];
}
function ReviewsBlock({ reviews }: ReviewsBlockProps): JSX.Element {
  const [reviewsCount, setReviewsCount] = useState(REVIEWS_PER_PAGE);

  return (
    <div className="page-content__section">
      <section className="review-block">
        <div className="container">
          <div className="page-content__headed">
            <h2 className="title title--h3">Отзывы</h2>
            <button className="btn" type="button">Оставить свой отзыв</button>
          </div>
          <ul className="review-block__list">

            {
              [...reviews]
                .sort((a, b) => a.createAt < b.createAt ? 1 : -1)
                .slice(0, reviewsCount)
                .map((review) => <ReviewCard review={review} key={review.id} />)
            }

          </ul>

          {
            reviewsCount < reviews.length
              ?
              <div className="review-block__buttons">
                <button
                  className="btn btn--purple"
                  type="button"
                  onClick={() => setReviewsCount(reviewsCount + REVIEWS_PER_PAGE)}
                >
                  Показать больше отзывов
                </button>
              </div>
              : ''
          }

        </div>
      </section>
    </div>
  );
}

export default ReviewsBlock;
