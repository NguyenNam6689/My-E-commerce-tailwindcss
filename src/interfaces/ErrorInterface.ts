// Todo: Redux
interface ErrorReduxThunkInterface {
	errorMessage?: string;
	originalError?: ErrorInterface;
}

interface ErrorInterface {
	message?: string;
	status?: number | string;
	stack?: string;
	statusText?: string;
	code?: string;
}

export type { ErrorReduxThunkInterface, ErrorInterface };
