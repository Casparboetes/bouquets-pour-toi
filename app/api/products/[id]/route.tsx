// http://localhost:3000/api/products/:id
import { NextResponse } from 'next/server';
import type { Bouquet, GetBouquets } from '@/app/types/products.models';
import { getProductData } from '@/app/utils/get-product-data';

export const GET = async (
    request: Request,
    {
        params,
    }: {
        params: {
            id: string;
        };
    }
): Promise<Response | undefined> => {
    try {
        const products: GetBouquets = await getProductData();
        const { id } = params;
        const product: Bouquet | undefined = products.find(
            (p) => p.id === parseInt(id)
        );
        if (!product) {
            return NextResponse.json('Page Not Found', { status: 404 });
        }
        return NextResponse.json(product, { status: 200 });
    } catch (error) {
        console.log(error);
        return NextResponse.json('Failed to load products', { status: 500 });
    } finally {
        console.log('API call completed');
    }
};
