// http://localhost:3000/api/products

import type { GetBouquets } from '@/app/types/products.models';
import { getProductData } from '@/app/utils/get-product-data';
import { writeToDatabase } from '@/app/utils/writeToDatabase';

export const GET = async (request: Request): Promise<Response> => {
    try {
        const products: GetBouquets = await getProductData();
        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to load products', { status: 500 });
    } finally {
        console.log('API call completed');
    }
};

export const PUT = async (request: Request): Promise<Response> => {
    try {
        let products: GetBouquets = await getProductData();
        const { priceIncludingVat } = await request.json();

        products.forEach((product) => {
            if (!product.vatApplied && priceIncludingVat) {
                product.price *= product.vatRate;
                product.vatApplied = true;
            }

            if (product.vatApplied && !priceIncludingVat) {
                product.price /= product.vatRate;
                product.vatApplied = false;
            }
        });

        const updatedJsonString = JSON.stringify(products, null, 2);

        await writeToDatabase(
            './app/api/products.json',
            updatedJsonString,
            (err) => {
                if (err) throw err;
            }
        );

        return new Response(JSON.stringify(products), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response('Failed to update product', { status: 500 });
    } finally {
        console.log('API call completed');
    }
};
