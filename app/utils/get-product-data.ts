import fs from 'fs';
import path from 'path';
import util from 'util';

const readFile = util.promisify(fs.readFile);

export const getProductData = async (): Promise<any> => {
    const filePath: string = path.join(
        process.cwd(),
        './app/api/products.json'
    );
    const fileData: Buffer = await readFile(filePath);
    return JSON.parse(fileData.toString());
};
