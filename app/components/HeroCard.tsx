import React from 'react';

type HeroCardProps = {
    executeScroll: () => void;
};

const HeroCard: React.FC<HeroCardProps> = ({ executeScroll }) => {
    return (
        <div
            className='hero h-screen'
            style={{
                backgroundImage:
                    'url(https://flowermag.com/wp-content/uploads/2017/10/Joyelle_161206_216.jpg)',
            }}
        >
            <div className='hero-overlay bg-opacity-40'></div>
            <div className='hero-content text-center text-neutral-content'>
                <div className='max-w-md'>
                    <h1 className='mb-5 text-5xl font-bold'>
                        Aan wie denk jij deze Kerst?
                    </h1>
                    <p className='mb-5'>
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut
                        assumenda excepturi exercitationem quasi. In deleniti
                        eaque aut repudiandae et a id nisi.
                    </p>
                    <button
                        onClick={executeScroll}
                        className='btn-secodary btn'
                    >
                        Aan de slag
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeroCard;
