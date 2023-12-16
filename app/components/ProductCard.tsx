import Image from 'next/image';
import React from 'react';
import type { Bouquet } from '@/app/types/products.models';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Bouquet }) => (
    <div className='product-card pb-6'>
        <div className='mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-2xl'>
            <Link href={`/product-details/${product.id}`}>
                <div className='md:flex'>
                    <div className='md:shrink-0'>
                        {product.images.map((image, index) => {
                            if (image.main) {
                                return (
                                    <Image
                                        key={index}
                                        src={image.src}
                                        style={{ height: 'auto' }}
                                        priority={image.main}
                                        alt={product.shortDescription}
                                        width={300}
                                        height={250}
                                        className='w-full object-cover md:w-48'
                                    />
                                );
                            }
                        })}
                    </div>
                    <div className='p-8 md:p-12'>
                        <div className='py-4 text-2xl'>
                            <div
                                aria-current='page'
                                className='font-medium text-gray-500 hover:text-gray-600'
                            >
                                {product.title}
                            </div>
                        </div>
                        <span>
                            vanaf{' '}
                            <b>
                                € {product.price.toFixed(2).replace('.', ',')}
                            </b>
                        </span>
                    </div>
                </div>
            </Link>
        </div>
    </div>
);
export default ProductCard;
