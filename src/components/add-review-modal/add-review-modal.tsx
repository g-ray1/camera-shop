import { FormEvent, forwardRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ModalContent } from '../../consts';
import { useAppDispatch } from '../../hooks/hooks';
import { postUserReview } from '../../store/api-actions';
import { setModalContent } from '../../store/utils-slice/utils-slice';
import { UserReview } from '../../types/types';

const AddReviewModal = forwardRef<HTMLInputElement>((props, ref) => {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState('');
  const [userName, setUserName] = useState('');
  const [advantage, setAdvantage] = useState('');
  const [disadvantage, setDisadvantage] = useState('');
  const [review, setReview] = useState('');

  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    const cameraId = Number(id);
    const cameraRating = Number(rating);

    const reviewPost: UserReview = {
      cameraId: cameraId,
      rating: cameraRating,
      userName: userName,
      advantage: advantage,
      disadvantage: disadvantage,
      review: review,
    };

    dispatch(postUserReview(reviewPost));
    dispatch(setModalContent(ModalContent.ReviewSuccess));
  };

  return (
    <>
      <p className="title title--h4">Оставить отзыв</p>
      <div className="form-review">
        <form method="post" onSubmit={handleSubmit}>
          <div className="form-review__rate">

            <fieldset className="rate form-review__item">
              <legend className="rate__caption">Рейтинг
                <svg width="9" height="9" aria-hidden="true">
                  <use xlinkHref="#icon-snowflake"></use>
                </svg>
              </legend>
              <div className="rate__bar">
                <div className="rate__group">
                  <input className="visually-hidden" id="star-5" name="rate" type="radio" value="5" onChange={(evt) => setRating(evt.target.value)} required />
                  <label className="rate__label" htmlFor="star-5" title="Отлично"></label>
                  <input className="visually-hidden" id="star-4" name="rate" type="radio" value="4" onChange={(evt) => setRating(evt.target.value)} required />
                  <label className="rate__label" htmlFor="star-4" title="Хорошо"></label>
                  <input className="visually-hidden" id="star-3" name="rate" type="radio" value="3" onChange={(evt) => setRating(evt.target.value)} required />
                  <label className="rate__label" htmlFor="star-3" title="Нормально"></label>
                  <input className="visually-hidden" id="star-2" name="rate" type="radio" value="2" onChange={(evt) => setRating(evt.target.value)} required />
                  <label className="rate__label" htmlFor="star-2" title="Плохо"></label>
                  <input className="visually-hidden" id="star-1" name="rate" type="radio" value="1" onChange={(evt) => setRating(evt.target.value)} required autoFocus ref={ref} />
                  <label className="rate__label" htmlFor="star-1" title="Ужасно" ></label>
                </div>
                <div className="rate__progress">
                  <span className="rate__stars">0</span> <span>/</span> <span className="rate__all-stars">5</span>
                </div>
              </div>
              <p className="rate__message">Нужно оценить товар</p>
            </fieldset>

            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Ваше имя
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-name"
                  placeholder="Введите ваше имя"
                  required
                  onChange={(evt) => setUserName(evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать имя</p>
            </div>

            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Достоинства
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-plus"
                  placeholder="Основные преимущества товара"
                  required
                  onChange={(evt) => setAdvantage(evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать достоинства</p>
            </div>

            <div className="custom-input form-review__item">
              <label>
                <span className="custom-input__label">Недостатки
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <input
                  type="text"
                  name="user-minus"
                  placeholder="Главные недостатки товара"
                  required
                  onChange={(evt) => setDisadvantage(evt.target.value)}
                />
              </label>
              <p className="custom-input__error">Нужно указать недостатки</p>
            </div>

            <div className="custom-textarea form-review__item">
              <label>
                <span className="custom-textarea__label">Комментарий
                  <svg width="9" height="9" aria-hidden="true">
                    <use xlinkHref="#icon-snowflake"></use>
                  </svg>
                </span>
                <textarea
                  name="user-comment"
                  minLength={5}
                  placeholder="Поделитесь своим опытом покупки"
                  required
                  onChange={(evt) => setReview(evt.target.value)}
                >
                </textarea>
              </label>
              <div className="custom-textarea__error">Нужно добавить комментарий</div>
            </div>

          </div>
          <button
            className="btn btn--purple form-review__btn"
            type="submit"
          >Отправить отзыв
          </button>
        </form>
      </div>
    </>
  );
});

AddReviewModal.displayName = 'AddReviewModal';

export default AddReviewModal;
