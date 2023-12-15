const localStorageUtils = {
	get: ({ key }: { key: string }) => {
		try {
			const serializedData = localStorage.getItem(key);
			return serializedData ? JSON.parse(serializedData) : null;
		} catch (error) {
			console.error('Error getting data from localStorage:', error);
			return null;
		}
	},

	set: ({ key, data }: { key: string; data: string | string[] | number }) => {
		try {
			const serializedData = JSON.stringify(data);
			localStorage.setItem(key, serializedData);
		} catch (error) {
			console.error('Error setting data in localStorage:', error);
		}
	},

	deleteItem: ({ key }: { key: string }) => {
		try {
			localStorage.removeItem(key);
		} catch (error) {
			console.error('Error deleting data from localStorage:', error);
		}
	},
	deleteAll: () => {
		try {
			localStorage.clear();
		} catch (error) {
			console.error('Error deleting all data from localStorage:', error);
		}
	},
};

export const { get, set, deleteItem: removeItem, deleteAll: removeAll } = localStorageUtils;
