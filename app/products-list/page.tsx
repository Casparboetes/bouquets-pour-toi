import type { GetBouquets } from '@/app/types/products.models';
import ProductCard from '@/app/components/ProductCard';

// Is used for static rending for demonstration purposes
const ProductsList = async () => {
    const res: Response = await fetch('http://localhost:3000/api/products', {
        next: { revalidate: 5 },
    });
    const products: GetBouquets = await res.json();

    return (
        <>
            <h2 className='px-4 py-6 pt-20 text-center text-4xl'>
                Kerstboeketten
            </h2>
            <ul>
                {!!products &&
                    products.map((product) => (
                        <ProductCard product={product} key={product.id} />
                    ))}
            </ul>
        </>
    );
};

export default ProductsList;
