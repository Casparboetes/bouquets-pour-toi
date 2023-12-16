import fs from 'fs';
import type { Callback, JsonString } from '@/app/types/utils.models';

export const writeToDatabase = async (
    path: string,
    data: JsonString,
    callback: Callback
): Promise<any> => {
    // Use fs.writeFile to write the data to the file
    fs.writeFile(path, data, (err) => {
        // Handle the error if any
        if (err) {
            callback(err);
            return;
        }
        // Log a success message
        console.log('The file has been saved!');
        // Call the callback function with null as the error argument
        callback(null);
    });
};
