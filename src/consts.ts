export const PRODUCTS_PER_PAGE = 9;

export const SIMILAR_PRODUCTS_COUNT = 3;

export const REVIEWS_PER_PAGE = 3;

export const OPTIONS_IN_DROPDOWN_MENU = 4;

export const enum ModalContent {
  AddItem = 'addItem',
  AddReview = 'addReview',
  ReviewSuccess = 'reviewSuccess',
  AddItemSuccess = 'addItemSuccess',
  RemoveBasketItem = 'removeBasketItem',
  OrderSuccess = 'orderSuccess'
}

export const enum APIRoutes {
  Promo = '/promo',
  Cameras = '/cameras',
  SimilarCameras = '/similar',
  Reviews = '/reviews',
  Coupons = '/coupons',
  Orders = '/orders'
}

export const enum SortingType {
  ByPrice = 'price',
  ByRating = 'rating'
}

export const enum OrderType {
  ByAscending = 'asc',
  ByDescending = 'desc'
}

export const enum CodesForCyrillicString {
  Фотоаппарат = '%D0%A4%D0%BE%D1%82%D0%BE%D0%B0%D0%BF%D0%BF%D0%B0%D1%80%D0%B0%D1%82',
  Видеокамера = '%D0%92%D0%B8%D0%B4%D0%B5%D0%BE%D0%BA%D0%B0%D0%BC%D0%B5%D1%80%D0%B0',
  Плёночная = '%D0%9F%D0%BB%D1%91%D0%BD%D0%BE%D1%87%D0%BD%D0%B0%D1%8F',
  Моментальная = '%D0%9C%D0%BE%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F',
}

export const ERROR_MESSAGE = 'Возможно, сервер недоступен.';
