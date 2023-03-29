export const PRODUCTS_PER_PAGE = 9;

export const SIMILAR_PRODUCTS_COUNT = 3;

export const REVIEWS_PER_PAGE = 3;

export const OPTIONS_IN_DROPDOWN_MENU = 4;

export const enum ModalContent {
  AddItem = 'addItem',
  AddReview = 'addReview',
  ReviewSuccess = 'reviewSuccess'
}

export const enum APIRoutes {
  Cameras = '/cameras',
  Reviews = '/reviews',
  SimilarCameras = '/similar',
  Promo = '/promo'
}

export const enum SortingType {
  ByPrice = 'price',
  ByRating = 'rating'
}

export const enum OrderType {
  ByAscending = 'asc',
  ByDescending = 'desc'
}
