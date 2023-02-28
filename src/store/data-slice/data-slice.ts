import { createSlice } from '@reduxjs/toolkit';
import { cameras } from '../../mocks/cameras';
import { similarCameras } from '../../mocks/similar';
import { Camera } from '../../types/types';

type DataState = {
  cameras: Camera[];
  similarCameras: Camera[];
}

const initialState: DataState = {
  cameras: cameras,
  similarCameras: similarCameras,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {}
});
