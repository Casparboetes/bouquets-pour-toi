'use client';

import React, { useEffect, useState } from 'react';
import { Bouquet } from '@/app/types/products.models';
import { notFound } from 'next/navigation';
import ProductDetailCard from '@/app/components/ProductDetailCard';

const ProductDetails = ({
    params,
}: {
    params: {
        productId: string;
    };
}) => {
    const [product, setData] = useState<Bouquet | null>(null);
    const [dataNotFound, setNotFound] = useState(false);

    useEffect(() => {
        fetch(`/api/products/${params.productId}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res);
            })
            .then((data) => {
                setData(data);
            })
            .catch((res) => {
                setNotFound(true);
            });
    }, [params.productId]);

    if (dataNotFound) {
        return notFound();
    }

    return (
        !!product && (
            <>
                <div className='px-4 pt-20'>
                    <ProductDetailCard product={product} key={product.id} />
                </div>
            </>
        )
    );
};

export default ProductDetails;
