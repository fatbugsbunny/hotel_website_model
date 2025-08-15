export type Room = Readonly<{
    className?: string,
    dimensions?: string,
    id: number,
    photos: string[],
    name: string,
    amenities: Amenity[],
    isInHomePage: boolean,
}>

export type Amenity = Readonly<{
    id: number,
    name: string,
    img: string
}>