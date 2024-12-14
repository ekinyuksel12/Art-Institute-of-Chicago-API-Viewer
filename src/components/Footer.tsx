//Components
import { DiReact } from "react-icons/di";



//Footer of the page
const Footer = () => {
    return (
        <div className="flex mt-4 items-center border-y-[1px] h-12 p-4 bg-white">
            {/* React logo and 'Powered by React' text */}
            <DiReact className="animate-spin" color='rgb(156 163 175)' strokeWidth='.1px' size='1.75rem'/>
            <p className="font-extralight text-sm text-gray-400 ml-1">Powered by React.js</p>

            {/* Project programmer */}
            <p className="ml-auto mr-auto md:mr-0 text-sm text-gray-400 font-extralight">©2025 Toprak Ekin Yüksel</p>
        </div>
    );
}

export default Footer;
