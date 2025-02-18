export interface CardProps {
    title: string;
    description: string;
    image: string;
    children?: React.ReactNode;
  }
  
  export interface ButtonProps {
    label: string;
    onClick: () => void;
  }



  export interface Address {
    state: string;
    city: string;
    country: string;
  }
  
  export interface Offers {
    bed: string;
    shower: string;
    occupants: string;
  }
  
  export interface PropertyProps {
    name: string;
    address: Address;
    rating: number;
    category: string[];
    price: number;
    offers: Offers;
    image: string;
    discount: string; // Could be a percentage as a string, e.g., "20%"
  }
  
  