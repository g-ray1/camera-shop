import { Camera } from '../../types/types';
import PreviewCard from '../preview-card/preview-card';

type PreviewCardsListProps = {
  products: Camera[];
}

function PreviewCardsList({products}: PreviewCardsListProps): JSX.Element {
  return (
    <div className="cards catalog__cards">

      {products.map((product)=> <PreviewCard product={product} key={product.id}/>)}

    </div>
  );
}

export default PreviewCardsList;
