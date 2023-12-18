import ProductCard from '@/app/components/ProductCard';
import type { GetBouquets } from '@/app/types/products.models';
import Toggle from '@/app/components/Toggle';

const FlowerList = ({
    products,
    on,
    toggle,
}: {
    products: GetBouquets | null;
    on: boolean;
    toggle: () => void;
}) => {

    return (
        <>
            <h2 className='special-color py-6 text-center text-4xl'>
                Kerstboeketten
            </h2>
            <div className='flex justify-center pb-4'>
                <Toggle on={on} toggle={toggle} />
            </div>
            <ul>
                {!!products &&
                    products.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </ul>
        </>
    );
};

export default FlowerList;
