import React from 'react';
import { Bouquet } from '@/app/types/products.models';
import Image from 'next/image';

const ProductDetailCard = ({ product }: { product: Bouquet }) => (
    <>
        <div className=' card mx-auto mt-10 max-w-md rounded-xl bg-base-300 shadow-xl'>
            <figure>
                {product.images.map((image, index) => {
                    if (image.main) {
                        return (
                            <Image
                                key={index}
                                src={image.src}
                                style={{ height: 'auto' }}
                                priority={image.main}
                                alt={product.shortDescription}
                                width={200}
                                height={250}
                                className='w-full object-cover'
                            />
                        );
                    }
                })}
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{product.title}</h2>
                <span>
                    vanaf <b>€ {product.price.toFixed(2).replace('.', ',')}</b>
                </span>

                {product.images.length > 1 && (
                    <div className='carousel carousel-center max-w-md space-x-2 rounded-box bg-base-content p-2'>
                        {product.images.length > 1 &&
                            product.images.map((image, index) => {
                                return (
                                    <div key={index} className='carousel-item'>
                                        <Image
                                            key={index}
                                            src={image.src}
                                            style={{ height: 'auto' }}
                                            priority={true}
                                            alt={product.shortDescription}
                                            width={200}
                                            height={250}
                                            className='w-full rounded-box'
                                        />
                                    </div>
                                );
                            })}
                    </div>
                )}

                <p className='pb-4 pt-6'>{product.description}</p>
                <div className='card-actions justify-end'>
                    <button className='btn btn-secondary'>Bestellen</button>
                </div>
            </div>
        </div>
    </>
);
export default ProductDetailCard;
