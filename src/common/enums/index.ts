enum IconHeaderType {
	Wishlist = 10,
	Cart = 20,
	Account = 30,
}

enum IconType {
	Wishlist = 10,
	Cart = 20,
	Account = 30,
	Order = 40,
	Guarantee = 50,
	Support = 60,
}
enum ToastType {
	Success = 0,
	Error = 1,
}
enum ToastTypeString {
	Success = 'success',
	Error = 'error',
}

enum MetadataTitle {
	Home = 'Home',
	About = 'About-us',
	Catalog = 'Catalog',
	Contact = 'Contact-us',
	Wishlist = 'Wishlist',
	Cart = 'Cart',
	Account = 'Account',
	Login = 'Login',
	Register = 'Sign-up',
	Notfound = '404',
	Error = '5xx',
	Loading = '...Loading',
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
export { IconHeaderType, ToastType, ToastTypeString, KeyLocalStorage, HeaderConfig, Template, MetadataTitle, IconType };
