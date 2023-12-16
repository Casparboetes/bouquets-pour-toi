type Image = {
    main: boolean;
    src: string;
};

export type Bouquet = {
    id: number;
    title: string;
    price: number;
    vatRate: number;
    vatApplied: boolean;
    shortDescription: string;
    description: string;
    images: Image[];
};

export declare type GetBouquets = Bouquet[];
