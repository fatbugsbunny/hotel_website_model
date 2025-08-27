export interface Room {
	id: number;
	photos: string[];
	name: string;
	description: string;
	amenities: Amenity[];
}

export interface Amenity {
	id: number;
	name: string;
	img: string;
}

export interface Navbar {
	navItems: LinkData[];
	language: string;
}

export interface LinkData {
	href: string;
	label: string;
}

export interface ContactInfo {
	img: string;
	info: string;
	heading: string;
}

export interface FooterContactInfo {
	heading: string;
	address: string;
	phoneNumber: string;
	email: string;
}

export interface Service {
	label: string;
	icon: string;
}

export interface Services {
	locale: string;
	bookButton: string;
	heading:string;
	services: Service[];
}

export interface QuickLinks {
	heading: string;
	links: LinkData[];
}

export interface Credits {
	rights: string;
	poweredBy: string;
}

export interface HeroBanner {
	intro: string;
	heading: string;
	outro: string;
}

export interface Footer {
	description: string;
	contactInfo: FooterContactInfo;
	quickLinks: QuickLinks;
	services: Services;
	credits: Credits;
}

export interface AboutUs {
	infoCard: InfoCard;
}

export interface InfoCard {
	subHeading: string;
	heading: string;
	description: string;
	extraDesc: string;
}

export interface Facilities {
	heading: string;
	facilityList: Facility[];
}

interface Facility {
	name: string;
	icon: string;
}

export interface Rooms {
	locale: string;
	heroSection: string;
	roomList: Room[];
	bookButton: string;
	seeMoreButton: string;
}

export interface Gallery {
	heroSection: string;
}

export interface Contact {
	heroSection: string;
	contactInfo: ContactInfo[];
	hoursCard: HoursCard;
	map: Map;
	form: Form;
}

export interface Map {
	heading: string;
}

export interface HoursCard {
	hotelName: string;
	heading: string;
	frontDest: string;
	checkIn: string;
	checkOut: string;
	breakfast: string;
	pool: string;
	restaurant: string;
}

interface FormMessage {
	intro: string;
	checkIn: string;
	room: string;
	checkOut: string;
	request: string;
}

export interface FormLabels {
	heading: string;
	nameField: string;
	roomField: string;
	checkInDate: string;
	checkOutDate: string;
	request: string;
	optional: string;
	requestPlaceholder: string;
	pendingButtonText: string;
	buttonText: string;
}

interface Form {
	formLabels: FormLabels;
	formMessage: FormMessage;
}

export interface Dictionary {
	navbar: Navbar;
	heroBanner: HeroBanner;
	aboutUs: AboutUs;
	facilities: Facilities;
	rooms: Rooms;
	gallery: Gallery;
	contact: Contact;
	footer: Footer;
}
