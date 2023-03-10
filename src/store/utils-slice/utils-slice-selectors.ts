import { RootState } from '..';

export const getModalMode = (state: RootState) => state.utils.modalIsActive;

export const getModalContent = (state: RootState) => state.utils.modalContent;
