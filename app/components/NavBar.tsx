'use client';
import Link from 'next/link';
import Image from 'next/image';

const NavBar = () => {
    return (
        <nav className='navbar fixed top-0 z-10 w-full bg-base-100 shadow-md'>
            <div className='navbar-start'>
                <div className='dropdown'>
                    <div
                        tabIndex={0}
                        role='button'
                        className='btn btn-circle btn-ghost'
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-5 w-5'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth='2'
                                d='M4 6h16M4 12h16M4 18h7'
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'
                    >
                        <li>
                            <Link href={'/'}>Home</Link>
                        </li>
                        <li>
                            <Link href={'/products-list'}>Kerstboeketten</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='navbar-center'>
                <Link href={'/'} className='flex-center flex gap-2'>
                    <Image
                        src='/top-logo.svg'
                        alt='logo'
                        width={180}
                        height={37}
                        priority
                        className='relative object-contain dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
                    />
                </Link>
            </div>
            <div className='navbar-end'>{/*<Toggle />*/}</div>
        </nav>
    );
};

export default NavBar;
