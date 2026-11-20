export interface NavLink {
	label: string;
	href: string;
}

export interface Product {
	id: string;
	name: string;
	origin: string;
	notes: string[];
	price: string;
}

export interface Category {
	label: string;
	tag?: string;
	highlight?: boolean;
}

export interface ProcessStep {
	title: string;
	description: string;
}

export interface Plan {
	name: string;
	weight: string;
	price: string;
	featured?: boolean;
}

export interface Review {
	quote: string;
	author: string;
	city: string;
}

export interface BrewMethod {
	id: string;
	label: string;
	productId: string;
	recommendation: {
		label: string;
		product: string;
		roast: string;
		grind: string;
		tip: string;
	};
}

export interface FooterColumn {
	title: string;
	label: string;
	links: NavLink[];
}
