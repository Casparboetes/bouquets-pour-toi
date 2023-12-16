'use client';
import HeroCard from '@/app/components/HeroCard';
import FlowerList from '@/app/components/FlowerList';
import { useRef } from 'react';

const Home = () => {
    const scrollToSection = useRef<HTMLElement | null>(null);
    const executeScrollToRef = () =>
        scrollToSection?.current?.scrollIntoView({ behavior: 'smooth' });

    return (
        <>
            <section className='mt-10 flex min-h-screen flex-col items-center justify-between px-4'>
                <HeroCard executeScroll={executeScrollToRef} />
            </section>
            <section className='px-4 pt-12 max-md:pt-20' ref={scrollToSection}>
                <FlowerList />
            </section>
        </>
    );
};
export default Home;
