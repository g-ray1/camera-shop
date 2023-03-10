import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PreviewCard from './preview-card';

const camera = {
  id: 1,
  name: 'Ретрокамера Dus Auge lV',
  vendorCode: 'DA4IU67AD5',
  type: 'Коллекционная',
  category: 'Видеокамера',
  description: 'Немецкий концерн BRW разработал видеокамеру Das Auge IV в начале 80-х годов, однако она до сих пор пользуется популярностью среди коллекционеров и яростных почитателей старинной техники. Вы тоже можете прикоснуться к волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с Das Auge IV начнётся ваш путь к наградам всех престижных кинофестивалей.',
  previewImg: 'img/content/das-auge.jpg',
  level: 'Любительский',
  rating: 4,
  price: 73450,
  previewImg2x: 'img/content/das-auge@2x.jpg',
  previewImgWebp: 'img/content/das-auge.webp',
  previewImgWebp2x: 'img/content/das-auge@2x.webp',
  reviewCount: 17
};

jest.mock('react-redux');

describe('PreviewCard component', () => {
  it('Snapshot', () => {
    const view = render(<PreviewCard product={camera} />, {wrapper: BrowserRouter});

    expect(view).toMatchSnapshot();
  });
});
