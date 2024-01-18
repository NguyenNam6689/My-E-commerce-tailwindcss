// Todo: 1. COMPANY
interface SocialMedia {
	name: string;
	link: string;
	icon: string;
}

interface CompanyData {
	id: string;
	logo: string;
	description: string;
	socialMedia: SocialMedia[];
}
interface CompanySectionProps {
	dataCompany: CompanyData;
}

// Todo: 1. MAP SECTION
interface SectionItem {
	name: string;
	link: string;
}

interface MapSectionProps {
	title: string;
	items: SectionItem[];
}
interface FooterData {
	company: CompanyData;
	features: SectionItem[];
	support: SectionItem[];
	documents: SectionItem[];
	delivery: SectionItem[];
}

export type { CompanySectionProps, FooterData, SectionItem, MapSectionProps };
