import type {
	BrewMethod,
	Category,
	FooterColumn,
	NavLink,
	Plan,
	ProcessStep,
	Product,
	Review,
} from "../types";

// CONTENIDO PROVISORIO: marca, precios, reseñas y datos legales son de ejemplo.
// Reemplazar por los datos reales del cliente.

export const site = {
	brand: "Grano Sur",
	tagline: "Café de especialidad tostado en pequeños lotes.",
	lang: "es",
	title: "Grano Sur · Café de especialidad",
	description:
		"Cafés de origen, tostados en pequeños lotes y molidos a tu medida. Del productor a tu taza.",
	instagram: "granosur",
	freeShippingFrom: "$40.000",
	year: new Date().getFullYear(),
	legal: "Grano Sur S.A.",
	payments: "Mercado Pago · Transferencia · Tarjetas",
	soonMessage: "La compra online todavía no está disponible. Muy pronto.",
};

// FECHAS PROVISORIAS: el cliente todavía no tiene un dato real de tueste.
// Reemplazar por el tueste real (o por una fuente de fechas) antes de publicar.
export const roast = {
	day: "martes",
	lastLabel: "Tostado el mar 17 nov",
	nextDate: "24 nov",
};

export const navLinks: NavLink[] = [
	{ label: "Tienda", href: "#destacados" },
	{ label: "Origen", href: "#origen" },
	{ label: "Suscripción", href: "#suscripcion" },
	{ label: "Contacto", href: "#contacto" },
];

export const benefits: string[] = [
	`Envío gratis desde ${site.freeShippingFrom}`,
	`Tostado cada ${roast.day}, próximo el ${roast.nextDate}`,
	"Molienda a elección",
	"Pagá en cuotas",
];

export const products: Product[] = [
	{
		id: "huila",
		name: "Huila",
		origin: "Colombia · Lavado",
		notes: ["Frutos rojos", "Panela"],
		price: "$14.500",
	},
	{
		id: "yirgacheffe",
		name: "Yirgacheffe",
		origin: "Etiopía · Lavado",
		notes: ["Jazmín", "Cítrico"],
		price: "$16.800",
	},
	{
		id: "cerrado-mineiro",
		name: "Cerrado Mineiro",
		origin: "Brasil · Natural",
		notes: ["Chocolate", "Avellana"],
		price: "$13.200",
	},
	{
		id: "blend-de-la-casa",
		name: "Blend de la casa",
		origin: "Blend · Espresso",
		notes: ["Cacao", "Caramelo"],
		price: "$12.400",
	},
];

export const categories: Category[] = [
	{ label: "Granos" },
	{ label: "Molido" },
	{ label: "Cápsulas" },
	{ label: "Accesorios" },
	{ label: "Kits de regalo", tag: "Regalo", highlight: true },
];

export const originText =
	"Trabajamos de cerca con productores de Colombia, Etiopía y Brasil. Elegimos cada lote en la finca y lo tostamos en pequeñas tandas, con un perfil pensado para resaltar lo mejor de cada grano.";

export const processSteps: ProcessStep[] = [
	{
		title: "Finca",
		description: "Selección de lotes con productores de origen.",
	},
	{
		title: "Tueste",
		description: "Pequeños lotes, perfil pensado para cada grano.",
	},
	{ title: "Molienda", description: "En grano o molido según tu método." },
	{ title: "Entrega", description: "Sale fresco, a días del tueste." },
];

export const brewMethods: BrewMethod[] = [
	{
		id: "espresso",
		label: "Espresso",
		productId: "cerrado-mineiro",
		recommendation: {
			label: "espresso",
			product: "Brasil · Cerrado Mineiro",
			roast: "Medio-oscuro",
			grind: "Fina",
			tip: "Cuerpo alto y dulzor de chocolate: ideal también con leche.",
		},
	},
	{
		id: "filtro",
		label: "Filtro",
		productId: "yirgacheffe",
		recommendation: {
			label: "filtro",
			product: "Etiopía · Yirgacheffe",
			roast: "Claro",
			grind: "Media",
			tip: "Taza limpia y floral, para V60, Chemex o cafetera de goteo.",
		},
	},
	{
		id: "prensa",
		label: "Prensa francesa",
		productId: "huila",
		recommendation: {
			label: "prensa francesa",
			product: "Colombia · Huila",
			roast: "Medio",
			grind: "Gruesa",
			tip: "Infusión de 4 minutos: resalta el cuerpo y las notas frutales.",
		},
	},
	{
		id: "moka",
		label: "Moka",
		productId: "blend-de-la-casa",
		recommendation: {
			label: "moka",
			product: "Blend de la casa",
			roast: "Medio-oscuro",
			grind: "Media-fina",
			tip: "Fuego bajo y retirá apenas empiece a burbujear.",
		},
	},
];

export const plans: Plan[] = [
	{ name: "Esencial", weight: "250 g por mes", price: "$11.900" },
	{ name: "Amante", weight: "500 g por mes", price: "$21.500", featured: true },
	{ name: "Barista", weight: "1 kg por mes", price: "$39.900" },
];

export const reviews: Review[] = [
	{
		quote: "El Yirgacheffe llegó a los tres días del tueste y se nota en la taza.",
		author: "Lucía M.",
		city: "Buenos Aires",
	},
	{
		quote: "Por fin un café que sabe a lo que dice la etiqueta. Ya voy por la tercera compra.",
		author: "Martín R.",
		city: "Córdoba",
	},
	{
		quote: "La suscripción me resolvió el mes: llega molido justo como lo necesito.",
		author: "Carolina P.",
		city: "Rosario",
	},
];

export const galleryCount = 6;

export const footerColumns: FooterColumn[] = [
	{
		title: "Tienda",
		label: "Tienda",
		links: [
			{ label: "Granos", href: "#destacados" },
			{ label: "Molido", href: "#destacados" },
			{ label: "Cápsulas", href: "#destacados" },
			{ label: "Accesorios", href: "#destacados" },
		],
	},
	{
		title: "Ayuda",
		label: "Ayuda",
		links: [
			{ label: "Preguntas frecuentes", href: "#" },
			{ label: "Envíos", href: "#" },
			{ label: "Cambios y devoluciones", href: "#" },
			{ label: "Contacto", href: "#contacto" },
		],
	},
	{
		title: "Marca",
		label: "Marca",
		links: [
			{ label: "Nuestra historia", href: "#origen" },
			{ label: "Suscripción", href: "#suscripcion" },
			{ label: "Instagram", href: `https://instagram.com/${site.instagram}` },
			{ label: "WhatsApp", href: "#" },
		],
	},
];
