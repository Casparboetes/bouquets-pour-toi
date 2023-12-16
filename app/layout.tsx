import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Bouquets pour toi',
    description: 'Flowers for everyone',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang='en' data-theme='valentine'>
        <body>
            <main>
                <NavBar />
                {children}
            </main>
            <Footer />
        </body>
    </html>
);

export default RootLayout;
