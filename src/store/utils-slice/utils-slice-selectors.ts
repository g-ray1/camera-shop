import { RootState } from '..';

export const getModalMode = (state: RootState) => state.utils.modalIsActive;
