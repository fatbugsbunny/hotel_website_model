import HeroSection from "@/components/heroSection";
import Image from "next/image";
import getDictionary from "@/dictionaries";

type image = {
	id: number;
	src: string;
	alt: string;
	vertical: boolean;
};

const images: image[] = [
	{ id: 0, src: "/interior2.jpg", alt: "gallery pic", vertical: false },
	{ id: 1, src: "/interior3.jpg", alt: "gallery pic", vertical: false },
	{ id: 2, src: "/interor4.jpg", alt: "gallery pic", vertical: true },
	{ id: 3, src: "/interior1.jpg", alt: "gallery pic", vertical: false },
	{ id: 4, src: "/room2.jpg", alt: "gallery pic", vertical: false },
	{ id: 5, src: "/interor5.jpg", alt: "gallery pic", vertical: true },
	{ id: 6, src: "/room8.jpg", alt: "gallery pic", vertical: false },
	{ id: 7, src: "/room9.jpg", alt: "gallery pic", vertical: false },
	{ id: 8, src: "/interior6.jpg", alt: "gallery pic", vertical: false },
	{ id: 9, src: "/interior7.jpg", alt: "gallery pic", vertical: false },
];

export default async function GalleryPage({ params }: Readonly<{ params: Promise<{ lang: string }> }>) {
	const { lang } = await params;
	const dict = getDictionary(lang);
	const gallery = dict.gallery;

	return (
		<>
			<HeroSection text={gallery.heroSection} />
			<div className="mt-24 grid grid-rows-8 gap-4 p-10 px-5 sm:grid-cols-1 sm:px-10 md:grid-cols-2 md:grid-rows-6 md:px-20 lg:grid-cols-4 lg:grid-rows-3 lg:px-20">
				{images.map((image) => (
					<div className={`${image.vertical ? "row-span-2 h-full" : "h-85"} border-secondary relative w-full border-3`} key={image.id}>
						<Image className={`object-cover`} src={image.src} alt={image.alt} fill />
					</div>
				))}
			</div>
		</>
	);
}
