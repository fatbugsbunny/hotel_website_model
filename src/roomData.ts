import { Room } from "@/components/roomCard/types";

export const rooms: Room[] = [
	{
		id: 1,
		name: "Double Room",
		description: "Double Room, measures 31m2 and features one king size bed, complimentary WiFi, Smart TV and many other amenities. Perfect for business travelers and couples seeking luxury",
		photos: ["/room5.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg"],
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
		photos: ["/room5.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg"],
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
		photos: ["/room5.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg"],
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
		photos: ["/room5.jpg", "/room2.jpg", "/room3.jpg", "/room4.jpg"],
		description: "Junior Suite, with 50m2 of space, includes a king-size bed, comfortable lounge area, Smart TV, marble bathroom and more. Perfect for extended luxurious stays.",
		amenities: [
			{ id: 0, name: "Tv ", img: "/monitor.png" },
			{ id: 1, name: "Personal wifi ", img: "/wi-fi-icon.png" },
			{ id: 2, name: "Sea view ", img: "/tsunami.png" },
			{ id: 4, name: "Minibar", img: "/mini.png" },
		],
	},
];
