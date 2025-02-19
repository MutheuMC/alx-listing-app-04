

export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
}
export interface PillProps {
    label: string;
    isSelected: boolean;
    onClick: () => void;
}
export interface CardProps {
    image: string;
    name: string;
    price: number;
    rating: number;
    title: string;
    description: string;
}


export interface ButtonProps {
    label: string;
    onClick: () => void;
}

interface Address {
    state: string;
    city: string;
    country: string;
}

interface Offers {
    bed: string;
    shower: string;
    occupants: string;
}

export interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
}

export interface PropertyProps {
    id: number;
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string;
    reviews: Review[];
    description: string; // Add this field
}


