//Modules
import { useNavigate } from "react-router-dom";

//Components
import ProgressiveArtworkImg from "../micro-components/ProgressiveArtworkImg"

//Property definations
interface props {
    artwork: Artwork
    artworkImageURL: string
    id: string
}




//A card component to show artwork objects
const ArtworkCard = ({ artwork, artworkImageURL, id }: props) => {
    const navigate = useNavigate();

    //Once clicked navigate user to the artworks information page
    const handleCardClick = (id: string) => {
        navigate("/artwork/" + id);
    }

    return (
        <div id={artwork.id} className="bg-white mx-auto flex flex-col justify-evenly w-full 
            border-[1.5px] rounded-xl transition-all active:scale-95 cursor-pointer duration-100 lg:hover:shadow-2xl"
            onClick={(e) => { handleCardClick(e.currentTarget.id) }}>

            {/* Image of the artwork */}
            <ProgressiveArtworkImg src={artworkImageURL} id={id}
                className="w-[calc(100%-1rem)] mx-auto mt-2 aspect-square rounded-xl object-cover" />

            <div className="px-2">
                {/* Title of the artwork */}
                <h1 className="line-clamp-1 font-bold w-[80%] my-4 mx-auto text-lg">
                    {artwork.title}</h1>

                {/* Vertical divider */}
                <hr className="h-0.5 border-t-0 bg-gray-300 rounded" />

                {/* Title of the artist */}
                {/* -Checks if the artwork has a artist name avaliable
                    If it does not have any then return the artist
                    name as anonymous. */}
                <h3 className="font-medium mt-4">
                    {(artwork.artist_title) ? artwork.artist_title : 'Anonymous'}</h3>

                {/* Date of the Artwork */}
                {/* -It finds if artwork date is a single date or a time span and 
                    render it accordingly (ex. 1934, 1692 - 1695) */}
                <p className="font-extralight text-sm mb-4">
                    {artwork.date_end != artwork.date_start && (artwork.date_start + '-' + artwork.date_end)}
                    {artwork.date_end == artwork.date_start && (artwork.date_start)}
                </p>
            </div>
        </div>
    );
}

export default ArtworkCard;