export interface IFeatures {
    title: string;
    description: string;
    icon: JSX.Element | false
}

export interface IServices {
    title: string;
    description: string;
    icon: JSX.Element | false;
    checkBoxes: string[]
}

export interface Itestimonal {
    reviewText: string;
    reviewerName: string;
    companyName: string;
    icon: string;
    alt: string
}