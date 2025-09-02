import { Download } from "lucide-react";
import { Button } from "./button";

const CvButton = () => {
    return (
        <a href="/cv/Hamza-Hamid-Resume.pdf" download
            className="group relative flex items-center rounded-full border border-orange-500 
                          font-semibold text-orange-500 overflow-hidden cursor-pointer
                           pr-0 w-fit
                          bg-transparent hover:text-white
                          transition-colors duration-300
                          before:content-[''] before:absolute before:inset-0 
                        before:bg-orange-500 before:translate-x-full 
                          before:transition-transform before:duration-500 
                          before:z-0 hover:before:translate-x-0
                          "
        >
            <span className="relative z-10 group-hover:text-white transition-colors duration-700 ml-12 pr-4">
                Download CV</span>
            <span
                className="relative z-10 ml-3 pr-0 flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 text-white"
            >
                <Download className="w-5 h-5" />
            </span>
        </a>
    );
};
export default CvButton;