import Basket from '../../components/basket/basket';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs';
import ModalWindow from '../../components/modal-window/modal-window';
import { useAppSelector } from '../../hooks/hooks';
import { getModalContent, getModalMode } from '../../store/utils-slice/utils-slice-selectors';

function BasketPage(): JSX.Element {
  const modalIsActive = useAppSelector(getModalMode);
  const modalContent = useAppSelector(getModalContent);

  return (
    <main>
      <div className="page-content">

        <Breadcrumbs />

        <Basket />

      </div>

      {modalIsActive && <ModalWindow content={modalContent} />}

    </main>
  );
}

export default BasketPage;
