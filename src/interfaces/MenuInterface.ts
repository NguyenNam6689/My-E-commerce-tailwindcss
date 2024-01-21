interface MenuItem {
	id: string;
	link: string;
	text: string;
}

interface MenuDropItem {
	id: string;
	category: string;
	icon: string;
	text?: string;
	subcategories?: string[];
}
export type { MenuItem, MenuDropItem };
