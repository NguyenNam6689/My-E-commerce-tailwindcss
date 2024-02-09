interface OfferImageDataInterface {
	id: string;
	imageSrc: string;
	title: string;
	description: string;
	buttonText: string;
}

interface BadgeDataInterface {
	id: string;
	icon: number;
	title: string;
	description: string;
}

interface CategoriesDataInterface {
	imageSrc: string;
	altText: string;
	categoryTitle: string;
}

export type { OfferImageDataInterface, BadgeDataInterface, CategoriesDataInterface };
