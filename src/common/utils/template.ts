//* IMPORT
import { Regex } from '@/common//enums';
import { TemplateData } from '@/types/TemplateCart';

export const getURIFromTemplate = (template: string, data: TemplateData): string => {
	return template.replace(Regex.TemplateString, (_, key) => String(data[key]));
};
