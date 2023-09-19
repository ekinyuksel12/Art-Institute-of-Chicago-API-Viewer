//Modules
import { useParams } from "react-router-dom";
import { useEffect, useState, Dispatch, SetStateAction } from "react";

//custom context API hook
import { useAppData } from "../../contexts/AppDataContext";

//Components
import ArtworkInfoCard from "./ArtworkInfoCard";
import { PiSpinnerLight } from "react-icons/pi";






//A container for displaying artwork information
const ArtworkInfoPage = () => {
    const { appService, isLoading, setIsLoading } = useAppData();

    const { artworkID } = useParams()
    const [artworkData, setArtworkData] = useState<Artwork>();

    //Loads the data of the artwork with given id
    function loadArtworkData(artworkID: string | undefined, setArtworkData: Dispatch<SetStateAction<Artwork | undefined>>) {

        setIsLoading(true)

        appService.getArtworkInfo(artworkID).then((res) => {
            if (res) setArtworkData(res)
            setIsLoading(false)
        });
    }

    //load the artwork data on load
    useEffect(() => {
        loadArtworkData(artworkID, setArtworkData)
    }, []);

    return (
        <div className="flex flex-col mx-auto w-screen min-h-[calc(100vh-9rem)]  md:w-[90%] p-4 text-center">
            {/* If isLoading is set to true render a loading spinner. */}
            {isLoading && <div className="m-auto animate-spin "><PiSpinnerLight size="2rem" /></div>}

            {/* If artworkData is defined render out the ArtworkInfoCard component. */}
            {artworkData && <ArtworkInfoCard artwork={artworkData} imageURL={appService.getImageURL(artworkData.image_id)} />}
        </div>
    );
}

export default ArtworkInfoPage;