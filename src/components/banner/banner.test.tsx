import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Banner from './banner';

const product = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  previewImg: 'img/content/das-auge.jpg',
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp',
};

const description = 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.';

describe('Banner component', () => {
  it('Snapshot', () => {
    const view = render(<Banner product={product} description={description} />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });

  it('Should return empty', () => {
    const view = render(<Banner />);

    expect(view.container).toBeEmptyDOMElement();
  });
});

