enum IconHeaderType {
	Wishlist = 10,
	Cart = 20,
	Account = 30,
}

enum ToastType {
	Success = 0,
	Error = 1,
}
enum ToastTypeString {
	Success = 'success',
	Error = 'error',
}

enum KeyLocalStorage {
	auth = 'auth_user',
}

enum HeaderConfig {
	Accept = 'application/json',
	Authorization = 'Bearer',
}
enum Template {
	Authorization = 'Bearer ${accessToken}',
}
export { IconHeaderType, ToastType, ToastTypeString, KeyLocalStorage, HeaderConfig, Template };
