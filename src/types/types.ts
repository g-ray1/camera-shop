export type Camera = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  category: string;
  description: string;
  previewImg: string;
  level: string;
  rating: number;
  price: number;
  previewImg2x: string;
  previewImgWebp: string;
  previewImgWebp2x: string;
  reviewCount: number;
};

export type Review = {
  id: string;
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  createAt: string;
  cameraId: number;
};

export type UserReview = {
  userName: string;
  advantage: string;
  disadvantage: string;
  review: string;
  rating: number;
  cameraId: number;
};

export type UserParams = {
  id: string;
};
