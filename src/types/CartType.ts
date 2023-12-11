//* IMPORT
import { CartInterface } from '@/interfaces/CartInterface';

type CartContextType = {
	cart: CartInterface[];
	addCart: (todo: CartInterface) => void;
	updateCart: (id: string) => void;
};

export type { CartContextType };
