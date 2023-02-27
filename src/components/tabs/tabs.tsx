function Tabs(): JSX.Element {
  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        <button className="tabs__control" type="button">Характеристики</button>
        <button className="tabs__control is-active" type="button">Описание</button>
      </div>
      <div className="tabs__content">
        <div className="tabs__element">
          <ul className="product__tabs-list">
            <li className="item-list"><span className="item-list__title">Артикул:</span>
              <p className="item-list__text"> DA4IU67AD5</p>
            </li>
            <li className="item-list"><span className="item-list__title">Категория:</span>
              <p className="item-list__text">Видеокамера</p>
            </li>
            <li className="item-list"><span className="item-list__title">Тип камеры:</span>
              <p className="item-list__text">Коллекционная</p>
            </li>
            <li className="item-list"><span className="item-list__title">Уровень:</span>
              <p className="item-list__text">Любительский</p>
            </li>
          </ul>
        </div>
        <div className="tabs__element is-active">
          <div className="product__tabs-text">
            <p>Немецкий концерн BRW разработал видеокамеру Das Auge IV в&nbsp;начале 80-х годов, однако она до&nbsp;сих пор пользуется популярностью среди коллекционеров и&nbsp;яростных почитателей старинной техники.</p>
            <p>Вы&nbsp;тоже можете прикоснуться к&nbsp;волшебству аналоговой съёмки, заказав этот чудо-аппарат. Кто знает, может с&nbsp;Das Auge IV&nbsp;начнётся ваш путь к&nbsp;наградам всех престижных кинофестивалей.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tabs;
