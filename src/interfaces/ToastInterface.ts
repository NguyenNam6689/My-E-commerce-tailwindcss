import { Renderable, ToastPosition } from 'react-hot-toast';

interface ToastOptionInterface {
	duration?: number;
	position?: ToastPosition;
	icon?: Renderable | undefined;
}

export type { ToastOptionInterface };
