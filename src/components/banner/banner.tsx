import { Link } from 'react-router-dom';

function Banner(): JSX.Element {
  const promo =
  {
    id: 1,
    name: 'Ретрокамера Dus Auge lV',
    previewImg: 'img/content/promo.jpg',
    previewImg2x: 'img/content/promo@2x.jpg',
    previewImgWebp: 'img/content/promo.webp',
    previewImgWebp2x: 'img/content/promo@2x.webp'
  };

  const promoDesc = 'Профессиональная камера от известного производителя';

  return (
    <div className="banner">
      <picture>
        <source
          type="image/webp"
          srcSet={`${promo.previewImgWebp}, ${promo.previewImgWebp2x} 2x`}
        />
        <img
          src={promo.previewImg}
          srcSet={`${promo.previewImg2x} 2x`}
          width="1280"
          height="280"
          alt="баннер"
        />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">{promo.name}</span>
        <span className="banner__text">{promoDesc}</span>
        <Link className="btn" to={`/product/${promo.id}`}>Подробнее</Link>
      </p>
    </div>
  );
}

export default Banner;
