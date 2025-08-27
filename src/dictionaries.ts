import { Dictionary } from "./types";

const en: Dictionary = {
	navbar: {
		navItems: [
			{ href: "/en-US", label: "Home" },
			{ href: "/en-US/rooms", label: "Rooms" },
			{ href: "/en-US/contact", label: "Contact" },
			{ href: "/en-US/gallery", label: "Gallery" },
		],
		language: "Language",
	},
	heroBanner: {
		intro: "Welcome to",
		heading: "hotel name",
		outro: "Memories that last forever",
	},
	aboutUs: {
		infoCard: {
			subHeading: "Make. memories.",
			heading: "Experience luxury",
			description: "Hotel Name offers comfortable accommodations in the heart of the city, featuring modern amenities and exceptional service. Our elegantly appointed rooms provide a peaceful retreat after a day of exploring, while our attentive staff ensures every guest feels welcomed.",
			extraDesc: "With convenient access to local attractions, dining, and shopping, Hotel Name is the perfect base for both business and leisure travelers seeking quality and comfort.",
		},
	},

	facilities: {
		heading: "- enjoy our services -",
		facilityList: [
			{ name: "private beach", icon: "/sunbed.png" },
			{ name: "lounge bar", icon: "/cheers.png" },
			{ name: "swimming pool", icon: "/swimming-pool.png" },
			{ name: "room service", icon: "/room-service.png" },
			{ name: "restaurant", icon: "/restaurant.png" },
			{ name: "free parking", icon: "/parking.png" },
		],
	},
	rooms: {
		locale: "en-US",
		heroSection: "Rooms & Suites",
		seeMoreButton: "See more",
		bookButton: "Book now",
		roomList: [
			{
				id: 1,
				name: "Double Room",
				description: "Double Room, measures 31m2 and features one king size bed, complimentary WiFi, Smart TV and many other amenities. Perfect for business travelers and couples seeking luxury",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Personal wifi ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Sea view ", img: "/tsunami.png" },
				],
			},
			{
				id: 2,
				name: "Triple Room",
				description: "Triple Room, measures 60m2 and features either one king and one single bed or three singles, private dining area, Smart TV and more. Excellent for small groups or families.",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Personal wifi ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Sea view ", img: "/tsunami.png" },
				],
			},
			{
				id: 3,
				name: "Deluxe Double Room",
				description: "Deluxe Double Room, measuring 35m2, offers a queen-size bed and a sofa bed, Smart TV panoramic windows and more. Ideal for guests seeking added space and stunning views.",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Personal wifi ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Sea view ", img: "/tsunami.png" },
					{ id: 4, name: "Minibar", img: "/mini.png" },
				],
			},
			{
				id: 4,
				name: "Junior Suite",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				description: "Junior Suite, with 50m2 of space, includes a king-size bed, comfortable lounge area, Smart TV, marble bathroom and more. Perfect for extended luxurious stays.",
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Personal wifi ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Sea view ", img: "/tsunami.png" },
					{ id: 4, name: "Minibar", img: "/mini.png" },
				],
			},
		],
	},
	gallery: {
		heroSection: "Gallery",
	},
	contact: {
		heroSection: "Contact Us",
		contactInfo: [
			{ img: "/customer-service.png", heading: "call us: ", info: "+1 (555) 123-4567" },
			{ img: "/email.png", heading: "email us: ", info: "reservations@hotelName.com" },
			{ img: "/location.png", heading: "address: ", info: "Orikum, 7th km, near the coast" },
		],
		hoursCard: {
			hotelName: "hotel name",
			heading: "hours",
			frontDest: "Front Desk - 24/7",
			checkIn: "Check-in: 2:00 pm ",
			checkOut: "Check-out: 11:00 am",
			breakfast: "Breakfast: 8:00 am",
			pool: "Pool: 11:00 am",
			restaurant: "Restaurant: 13:00 AM - 11:00 PM",
		},
		map: {
			heading: "Find us",
		},
		form: {
			formLabels: {
				heading: "Send Us a Message",
				nameField: "Full Name",
				roomField: "Room Type",
				checkInDate: "Check-in Date",
				checkOutDate: "Check-out Date",
				request: "Special Request",
				requestPlaceholder: "Any decorations etc.",
				optional: "Optional",
				pendingButtonText: "Booking...",
				buttonText: "Send",
			},
			formMessage: {
				intro: "Hi, i'm interested in your services,\nName: ",
				checkIn: "\nCheck-in: ",
				room: "\nRoom: ",
				checkOut: "\nCheck-out: ",
				request: "\nSpecial request: ",
			},
		},
	},
	footer: {
		description: "Experience luxury and comfort in the heart of the city. Your perfect stay awaits with world-class amenities and exceptional service.",
		contactInfo: {
			heading: "Contact us",
			address: "Orikum, 7th km, near the coast",
			phoneNumber: "+1 (555) 123-4567",
			email: "reservations@hotelName.com",
		},
		quickLinks: {
			heading: "Quick links",
			links: [
				{ href: "/en-US", label: "Home" },
				{ href: "/en-US/rooms", label: "Rooms" },
				{ href: "/en-US/contact", label: "Contact" },
				{ href: "/en-US/gallery", label: "Gallery" },
			],
		},

		services: {
			locale: "en-US",
			bookButton: "Book now",
			heading: "Services",
			services: [
				{ label: "24/7 Front Desk", icon: "clock" },
				{ label: "Private Parking", icon: "car" },
				{ label: "Room Service", icon: "coffee" },
				{ label: "Private Beach", icon: "waves" },
			],
		},
		credits: {
			rights: "© 2025 Hotel Name. All rights reserved.",
			poweredBy: "Powered by Vantex",
		},
	},
};

const al: Dictionary = {
	navbar: {
		navItems: [
			{ href: "/sq-AL", label: "Kreu" },
			{ href: "/sq-AL/rooms", label: "Dhomat" },
			{ href: "/sq-AL/contact", label: "Na Kontaktoni" },
			{ href: "/sq-AL/gallery", label: "Galeria" },
		],
		language: "Gjuha",
	},
	heroBanner: {
		intro: "Mirësevini në",
		heading: "Emri i hotelit",
		outro: "Kujtime që zgjasin përgjithmonë",
	},
	aboutUs: {
		infoCard: {
			subHeading: "Krijo Kujtime",
			heading: "Përjeto luks",
			description: "Hotel Name ofron akomodim të rehatshëm në zemër të qytetit, me pajisje moderne dhe shërbim të jashtëzakonshëm. Dhomat tona të mobiluara me elegancë ofrojnë një tërheqje të qetë pas një dite eksplorimi, ndërsa stafi ynë siguron që çdo mysafir të ndihet i mirëpritur.",
			extraDesc: "Pranë atraksioneve lokale, restoranteve dhe dyqaneeve, Hotel Name është vendi perfekt për të gjithë që kërkojnë cilësi dhe rehati.",
		},
	},
	facilities: {
		heading: "shijoni shërbimet tona",
		facilityList: [
			{ name: "plazh privat", icon: "/sunbed.png" },
			{ name: "bar lounge", icon: "/cheers.png" },
			{ name: "pishinë", icon: "/swimming-pool.png" },
			{ name: "shërbim dhome", icon: "/room-service.png" },
			{ name: "restorant", icon: "/restaurant.png" },
			{ name: "parkim falas", icon: "/parking.png" },
		],
	},
	rooms: {
		locale: "sq-AL",
		heroSection: "Dhoma & Suita",
		seeMoreButton: "Shiko të gjitha",
		bookButton: "Rezervo tani",
		roomList: [
			{
				id: 1,
				name: "Dhoma Dyshe",
				description: "Dhoma Dyshe, me sipërfaqe 31m2, ofron një krevat dopio king size, WiFi falas, Smart TV dhe shumë komoditete të tjera. E përsosur për udhëtarët e biznesit dhe çiftet që kërkojnë luks.",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Wifi personal ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Pamje nga deti ", img: "/tsunami.png" },
				],
			},
			{
				id: 2,
				name: "Dhoma Treshe",
				description: "Dhoma Treshe, me sipërfaqe 60m2, ofron ose një krevat dopio king dhe një tek ose tre krevate teke, zonë private ngrënieje, Smart TV dhe më shumë. Shumë e përshtatshme për grupe të vegjël ose familje.",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Wifi personal ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Pamje nga deti ", img: "/tsunami.png" },
				],
			},
			{
				id: 3,
				name: "Dhoma Dyshe Deluxe",
				description: "Dhoma Dyshe Deluxe, me sipërfaqe 35m2, ofron një krevat queen-size dhe një divan, Smart TV, dritare panoramike dhe më shumë. Ideale për mysafirë që kërkojnë më shumë hapësirë dhe pamje mahnitëse.",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Wifi personal ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Pamje nga deti ", img: "/tsunami.png" },
					{ id: 4, name: "Minibar", img: "/mini.png" },
				],
			},
			{
				id: 4,
				name: "Suitë Junior",
				photos: ["/room5.jpg", "/room6.jpg", "/room3.jpg", "/room4.jpg"],
				description: "Suitë Junior, me 50m2 hapësirë, përfshin një krevat dopio king, zonë lounge të rehatshme, Smart TV, banjë mermeri dhe më shumë. E përsosur për qëndrime të gjata dhe luksoze.",
				amenities: [
					{ id: 0, name: "Tv ", img: "/monitor.png" },
					{ id: 1, name: "Wifi personal ", img: "/wi-fi-icon.png" },
					{ id: 2, name: "Pamje nga deti ", img: "/tsunami.png" },
					{ id: 4, name: "Minibar", img: "/mini.png" },
				],
			},
		],
	},
	gallery: {
		heroSection: "Galeria",
	},
	contact: {
		heroSection: "Na Kontaktoni",
		contactInfo: [
			{ img: "/customer-service.png", heading: "telefono: ", info: "+1 (555) 123-4567" },
			{ img: "/email.png", heading: "email: ", info: "reservations@hotelName.com" },
			{ img: "/location.png", heading: "adresa: ", info: "Orikum, km 7, pranë bregdetit" },
		],
		hoursCard: {
			hotelName: "emri i hotelit",
			heading: "orari",
			frontDest: "Recepsioni - 24/7",
			checkIn: "Hyrja: 14:00 ",
			checkOut: "Dalja: 11:00 ",
			breakfast: "Mëngjesi: 08:00 ",
			pool: "Pishina: 11:00 ",
			restaurant: "Restoranti: 13:00 - 23:00",
		},
		map: {
			heading: "Na gjeni",
		},
		form: {
			formLabels: {
				heading: "Na dërgoni një mesazh",
				nameField: "Emri i Plotë",
				roomField: "Lloji i Dhomës",
				checkInDate: "Data e Hyrjes",
				checkOutDate: "Data e Daljes",
				request: "Kërkesa Speciale",
				requestPlaceholder: "Dekorime etj.",
				optional: "Opsionale",
				pendingButtonText: "Duke rezervuar...",
				buttonText: "Dergo",
			},
			formMessage: {
				intro: "Përshëndetje, jam i interesuar për shërbimet tuaja,\nEmri: ",
				checkIn: "\nHyrja: ",
				room: "\nDhoma: ",
				checkOut: "\nDalja: ",
				request: "\nKërkesë speciale: ",
			},
		},
	},
	footer: {
		description: "Përjetoni luks dhe qetësi në zemër të qytetit. Qëndrimi juaj i përsosur ju pret me shërbime të nivelit botëror dhe rehati si kurrë me parë.",
		contactInfo: {
			heading: "Na kontaktoni",
			address: "Orikum, km 7, pranë bregdetit",
			phoneNumber: "+1 (555) 123-4567",
			email: "reservations@hotelName.com",
		},
		quickLinks: {
			heading: "Faqet",
			links: [
				{ href: "/sq-AL", label: "Kreu" },
				{ href: "/sq-AL/rooms", label: "Dhoma" },
				{ href: "/sq-AL/contact", label: "Kontakti" },
				{ href: "/sq-AL/gallery", label: "Galeria" },
			],
		},

		services: {
			locale: "sq-AL",
			bookButton: "Rezervo tani",
			heading: "Sherbime",
			services: [
				{ label: "Recepsioni 24/7", icon: "clock" },
				{ label: "Parkim Privat", icon: "car" },
				{ label: "Shërbim në dhoma", icon: "coffee" },
				{ label: "Plazh Privat", icon: "waves" },
			],
		},
		credits: {
			rights: "© 2025 Hotel Name. Të gjitha të drejtat e rezervuara.",
			poweredBy: "Mundësuar nga Vantex",
		},
	},
};

export default function getDictionary(locale: string): Dictionary {
	if (locale === "sq-AL") {
		return al;
	}

	return en;
}
