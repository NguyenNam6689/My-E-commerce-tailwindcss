interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	isLoading?: boolean;
	localLoaderOnClick?: boolean;
	disabled?: boolean;
	children: React.ReactNode;
	color?: 'primary' | 'secondary' | 'red';
}

export type { ButtonProps };
