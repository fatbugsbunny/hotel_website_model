import HeroSection from "@/components/heroSection";
import Image from "next/image";

type image = {
    id: number;
    src: string;
    alt: string;
    vertical: boolean
}

const images: image[] = [
    {id: 0, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 1, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 2, src: '/interior2.jpg', alt: 'gallery pic', vertical: true},
    {id: 3, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 4, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 5, src: '/interior2.jpg', alt: 'gallery pic', vertical: true},
    {id: 6, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 7, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
    {id: 8, src: '/interior2.jpg', alt: 'gallery pic', vertical: false},
]

export default function GalleryPage() {
    return (
        <>
            <HeroSection text={'Gallery'}/>
            <div className="mt-24 grid grid-cols-4 p-10 px-20 gap-4">
                {images.map((image) => (
                    <div className={`${image.vertical ? 'row-span-2 w-full h-full' : 'w-full h-85'} relative border-3 border-secondary`} key={image.id}>
                        <Image className={`object-cover`} src={image.src} alt={image.alt}  fill/>
                    </div>
                ))}
            </div>
        </>
    )
}