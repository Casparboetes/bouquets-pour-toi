'use client';
import HeroCard from '@/app/components/HeroCard';
import FlowerList from '@/app/components/FlowerList';
import { useEffect, useRef, useState } from 'react';
import { GetBouquets } from '@/app/types/products.models';
import { useToggle } from '@uidotdev/usehooks';

const Home = () => {
    const [products, setProducts] = useState<GetBouquets | null>(null);
    const [on, toggle] = useToggle(true);

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:3000/api/products');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts().catch((error) => {
            console.error('Error:', error);
        });
    }, []);

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
            .then((data) => setProducts(data))
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [on]);

    const scrollToSection = useRef<HTMLElement | null>(null);
    const executeScrollToRef = () =>
        scrollToSection?.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <section className='mt-10 flex min-h-screen flex-col items-center justify-between px-4'>
                <HeroCard executeScroll={executeScrollToRef} />
            </section>
            <section className='px-4 pt-12 max-md:pt-20' ref={scrollToSection}>
                <FlowerList products={products} toggle={toggle} on={on} />
            </section>
        </>
    );
};
export default Home;
