//Type definations for the properties
interface props {
    artwork: Artwork
    imageURL: string
}

//A card component to render the details of the artwork
const ArtworkInfoCard = ({ artwork, imageURL }: props) => {
    return (
        <div className="bg-white mx-auto flex flex-col justify-evenly w-full 
        border-[1.5px] rounded-xl m-0 min-h-[calc(100vh-9rem)]">
            <img className="h-48 object-contain" src={imageURL} />
            <h1 className="text-gray-400 font-extralight">ID: {artwork.id}</h1>
            <h1 className="text-gray-400 font-extralight">ImageID: {artwork.image_id}</h1>
            <h1 className="font-bold">Title: {artwork.title}</h1>
            <h1>Artist: {artwork.artist_title}</h1>
            <h1>Date: {artwork.date_end != artwork.date_start && (artwork.date_start + '-' + artwork.date_end)}
                {artwork.date_end == artwork.date_start && (artwork.date_start)}</h1>
            <h1 className="text-gray-600 font-light">Dimensions: {artwork.dimensions}</h1>
            <h1 className="text-gray-600 font-light">Medium: {artwork.medium_display}</h1>

        </div>
    );
}

export default ArtworkInfoCard;