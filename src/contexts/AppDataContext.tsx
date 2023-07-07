//Modules
import { createContext, useContext, useState } from "react";

//Type imports
import { Dispatch, SetStateAction } from "react";
import AppService from "../services/AppService";

//Type definations of the every state
interface AppData {
    appService: AppService,

    loadedData: Artworks | undefined,
    isLoading: boolean,
    searchQuery: string | undefined,

    setLoadedData: Dispatch<SetStateAction<Artworks | undefined>>,
    setIsLoading: Dispatch<SetStateAction<boolean>>,
    setSearchQuery: Dispatch<SetStateAction<string | undefined>>
}

//Type defination for properties
interface props {
    children: React.ReactNode
}



//Creates a context
export const AppDataContext = createContext<AppData | undefined>(undefined);

//Custom hook for accessing the context API  
export function useAppData() {
    const context: AppData | undefined = useContext(AppDataContext)

    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider')
    }
    return context
}


/**
 * Gets children elements and wraps them into Context API provider to provide them with the data
 */
const AppDataProvider = ({ children }: props) => {
    const appService = new AppService()

    const [loadedData, setLoadedData] = useState<Artworks>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [searchQuery, setSearchQuery] = useState<string | undefined>();

    return (
        <AppDataContext.Provider value={{ appService, loadedData, isLoading, searchQuery, setLoadedData, setIsLoading, setSearchQuery }}>
            {children}
        </AppDataContext.Provider>
    );
}

export default AppDataProvider