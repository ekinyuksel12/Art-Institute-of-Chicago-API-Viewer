//Context API hook
import { useAppData } from "../../contexts/AppDataContext";

//Components
import ArtworkCard from "./ArtworkCard";




//A container for ArtworkCard components
const ArtworkDisplay = () => {
    const {appService, loadedData, isLoading} = useAppData();

    return (
        <div className="w-full grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
            {/* Check if isLoading set to false and loadedData is defined and it's not an empty array. */}
            {!isLoading && loadedData !== undefined && loadedData.data.length != 0 &&
                loadedData.data
                    //Filter out the results without an image
                    .filter(artwork => artwork.image_id != null)
                    //Map out each artwork from the array to an ArtworkCard component
                    .map((artwork, i) => (
                        <ArtworkCard
                            key={i}
                            id={'artwork' + i}
                            artwork={artwork}
                            artworkImageURL={appService.getImageURL(artwork.image_id)}
                        />
                    ))
            }
        </div>
    );
}

export default ArtworkDisplay;