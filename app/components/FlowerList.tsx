'use client';

import ProductCard from '@/app/components/ProductCard';
import { useEffect, useState } from 'react';
import { GetBouquets } from '@/app/types/products.models';
import Toggle from '@/app/components/Toggle';
import { useToggle } from '@uidotdev/usehooks';

const FlowerList = () => {
    const [allProducts, setAllProducts] = useState<GetBouquets | null>(null);
    const [on, toggle] = useToggle(true);
    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();

        setAllProducts(data);
    };

    useEffect(() => {
        fetch('http://localhost:3000/api/products', {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }),
            body: JSON.stringify({ priceIncludingVat: on }),
        })
            .then((response) => response.json())
            .then((data) => setAllProducts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [on]);

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <h2 className='special-color py-6 text-center text-4xl'>
                Kerstboeketten
            </h2>
            <div className='flex justify-center pb-4'>
                <Toggle on={on} toggle={toggle} />
            </div>
            <ul>
                {!!allProducts &&
                    allProducts.map((product, index) => (
                        <ProductCard product={product} key={index} />
                    ))}
            </ul>
        </>
    );
};

export default FlowerList;
