export interface IFeatures {
    title: string;
    description: string;
    icon: string | false
}

export interface IServices {
    title: string;
    description: string;
    icon: string;
    checkBoxes: string[]
}

export interface Itestimonal {
    reviewText: string;
    reviewerName: string;
    companyName: string;
    icon: string;
    alt: string
}