import { Camera } from '../../types/types';
import PreviewCard from '../preview-card/preview-card';

type PreviewCardsListProps = {
  products: Camera[];
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

function PreviewCardsList({products, setActive}: PreviewCardsListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">

      {products.map((product)=> <PreviewCard product={product} setActive={setActive} key={product.id}/>)}

    </div>
  );
}

export default PreviewCardsList;
