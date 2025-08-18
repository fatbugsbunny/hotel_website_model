export type Room = Readonly<{
    id: number,
    photos: string[],
    name: string,
	description: string,
    amenities: Amenity[],
}>

export type Amenity = Readonly<{
    id: number,
    name: string,
    img: string
}>