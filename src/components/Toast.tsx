//* LIB
import toast from 'react-hot-toast';

//* IMPORT
import { ToastType, ToastTypeString } from '@/common/enums';
import { ToastOptionInterface } from '@/interfaces/ToastInterface';

const showToast = ({
	type,
	message,
	option = {} as ToastOptionInterface,
}: {
	type: number;
	message: string;
	option?: ToastOptionInterface;
}) => {
	switch (type) {
		case ToastType.Success:
			return toast.success(`${message} - ( ${convertType({ type })} toast )`, {
				duration: option?.duration,
				position: option?.position,
				icon: option.icon,
			});
		case ToastType.Error:
			return toast.error(`${message} - ( ${convertType({ type })} toast )`, {
				duration: option?.duration,
				position: option?.position,
				icon: option.icon,
			});
		default:
			return null;
	}
};

const convertType = ({ type }: { type: number }) => {
	switch (type) {
		case ToastType.Success:
			return ToastTypeString.Success;
		case ToastType.Error:
			return ToastTypeString.Error;
		default:
			return null;
	}
};

export { showToast, convertType };
