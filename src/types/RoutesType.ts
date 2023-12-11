type RoutesType = {
	path: string;
	element: JSX.Element;
	children?: {
		path: string;
		element: JSX.Element;
	}[];
};

export type { RoutesType };
