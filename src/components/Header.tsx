//Modules
import { Location, NavigateFunction, useLocation, useNavigate } from "react-router-dom";

//Components
import SearchBar from "./SearchBar";
import { Dispatch, SetStateAction } from "react";
import AppService from "../services/AppService";
import { useAppData } from "../contexts/AppDataContext";




//Navigates user to home page
function handleHome(navigate: NavigateFunction, location: Location,
    appService: AppService, setIsLoading: Dispatch<SetStateAction<boolean>>,
    setLoadedData: Dispatch<SetStateAction<Artworks | undefined>>,) {
    //Check if user is already in the home page. If not navigate them to the home page. If so fetch the default home page feed.
    if (location.pathname !== '/') {
        navigate('/')
    } else {
        //Getting the application states using the custom context API hook.
        setIsLoading(true)

        appService.getArtworks().then((res) => {
            if (res) setLoadedData(res)
            setIsLoading(false)
        });
    }
}




const Header = () => {
    const { appService, setIsLoading, setLoadedData } = useAppData();
    const navigate = useNavigate();
    const location = useLocation();

    return (
        <div className="z-10 w-screen h-20 md:h-16 border-b-2 fixed flex items-center font-extralight bg-white">

            {/* Logo and app name */}
            <div onClick={() => { handleHome(navigate, location, appService, setIsLoading, setLoadedData) }}
                className="cursor-pointer flex items-center">

                {/* Logo */}
                <img
                    src="https://api.artic.edu/docs/assets/logo.svg"
                    className="h-14 md:h-12 mx-2 object-contain" />

                {/* App Name */}
                <h1 className="text-xl hidden md:block pr-4  border-r-2">Art Institute of Chicago API Viewer</h1>
            </div>

            {/* Search button and search bar */}
            <button
                onClick={() => { handleHome(navigate, location, appService, setIsLoading, setLoadedData) }}
                className="text-lg p-0 hover:underline text-gray-500 ml-4 md:ml-4">Home</button>
            <SearchBar />
        </div>
    );
}

export default Header;