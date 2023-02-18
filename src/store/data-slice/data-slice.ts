import { createSlice } from '@reduxjs/toolkit';
import { cameras } from '../../mocks/cameras';
import { Camera } from '../../types/types';

type DataState = {
  cameras: Camera[];
}

const initialState: DataState = {
  cameras: cameras,
};

export const dataSlice = createSlice({
  name: 'data',
  initialState: initialState,
  reducers: {}
});
