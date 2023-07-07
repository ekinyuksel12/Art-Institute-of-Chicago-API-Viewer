//Modules
import { useRef } from "react";

//Context API provider
import { useAppData } from "../contexts/AppDataContext";

//Components
import { BiSearch } from "react-icons/bi";



//This function gets an input element and gets its value and makes ana API call to the server for search results.
function handleSearch(input: React.RefObject<HTMLInputElement>) {
    const { setSearchQuery } = useAppData();

    if (input.current?.classList.contains('hidden')) {
        input.current.classList.remove('hidden')
        input.current.focus()
    } else {
        if (input.current?.value === '') input.current?.classList.add('hidden')
    }

    if (input.current?.value !== '') {
        setSearchQuery(input.current?.value)
        input.current!.value = ''
        input.current?.classList.add('hidden')
    }

}



const SearchBar = () => {
    //Creates a reference for the search bars input element
    const SearchInputElement = useRef<HTMLInputElement>(null);

    return (
        <div className="flex ml-auto mr-2 md:mr-8 rounded-full">
            {/* Input field */}
            <input ref={SearchInputElement} name="search" type="text" placeholder="Search..." autoComplete="off"
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch(SearchInputElement);
                }}
                className="outline-none w-28 md:w-full hidden md:block" />
            
            {/* Search button and its icon */}
            <span>
                <button className="text-xl p-1"
                    onClick={() => { handleSearch(SearchInputElement) }}>

                    <BiSearch color="gray" />
                </button>
            </span>
        </div>
    );
}

export default SearchBar;