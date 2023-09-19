//Modules
import { useEffect } from "react";

//API service
import { useAppData } from "../contexts/AppDataContext";

//Components
import ArtworkDisplay from "./content-components/ArtworkDisplay";
import { PiSpinnerLight } from "react-icons/pi";




//A container component for handling loading and rendering the main content
const Content = () => {
    const { searchQuery, appService, isLoading, loadedData, setIsLoading, setLoadedData } = useAppData();

    //Fetches home page feed and sets its response to loadedData.
    function loadDefaultPage() {
        //Getting the application states using the custom context API hook.

        setIsLoading(true)

        appService.getArtworks().then((res) => {
            if (res) setLoadedData(res)
            setIsLoading(false)
        });
    }
    //Fetching in the default artworks on load
    useEffect(() => {
        console.log(searchQuery);
        
        if (searchQuery !== undefined && searchQuery !== '') {
            setIsLoading(true)

            appService.getExactMatchSearchResults(searchQuery).then((res) => {
                if (res) setLoadedData(res)
                setIsLoading(false)
            });
        } else {
            loadDefaultPage();
        }
    }, [searchQuery]);

    return (
        /* The class 'min-h-[calc(100vh-9rem)]' is makes sure that content always fills the page and footer is always at the bottom. 
        The 9rem value comes from Header and footers height*/
        <div className="flex flex-col mx-auto w-screen min-h-[calc(100vh-9rem)] md:w-[90%] p-4 text-center justify-center">

            {/* Loading spinner */}
            {isLoading && <div className="m-auto animate-spin "><PiSpinnerLight size="2rem" /></div>}

            {/* 'Nothing to show' message when the loadedData is empty */}
            {!isLoading && loadedData?.data.length == 0 && <h1 className="m-auto text-gray-400 text-xl font-light">Nothing to show</h1>}

            {/* If loadedData is not empty and isLoading is false then render the artwork display*/}
            <ArtworkDisplay />
        </div>
    );
}

export default Content;