interface CartProviderProps {
	children: React.ReactNode;
}

interface CartInterface {
	id: string;
	title: string;
	description: string;
	status: boolean;
}

export type { CartInterface, CartProviderProps };
