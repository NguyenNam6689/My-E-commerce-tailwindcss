//* LIB
import * as React from 'react';
import { v4 as uuid4 } from 'uuid';

//* IMPORT
import { CartInterface, CartProviderProps } from '@/interfaces/CartInterface';
import { CartContextType } from '@/types/CartType';

export const CartContext = React.createContext<CartContextType | null>(null);

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
	const [cart, setCart] = React.useState<CartInterface[]>([
		{
			id: uuid4(),
			title: 'Pizza',
			description: 'This is a description',
			status: false,
		},
	]);
	const addCart = (todo: CartInterface) => {
		const newCart: CartInterface = {
			id: uuid4(),
			title: todo.title,
			description: todo.description,
			status: false,
		};
		setCart([...cart, newCart]);
	};
	const updateCart = (id: string) => {
		cart.filter((todo: CartInterface) => {
			if (todo.id === id) {
				todo.status = true;
				setCart([...cart]);
			}
		});
	};

	const data = { cart, addCart, updateCart };

	CartContext.displayName = 'Cart Context';

	return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartProvider;
