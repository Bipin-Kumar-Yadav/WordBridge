import { BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { useRecoilState } from "recoil";
import { themeState } from "../recoilState/ThemeState";
const Header = () =>{
    const [theme] = useRecoilState(themeState);
    return (
        <header className={`sticky top-0 z-10 ${theme==='dark'?"bg-gray-900/80":"bg-white/80"} h-[60px] backdrop-blur-md shadow-sm`}>
        <div className="mx-auto px-4 py-4  min-h-full">
            <Link to="/" className="float-left flex py-2 flex gap-2">
                <BookOpen className={`${theme === 'dark'? "text-gray-200": "text-gray-800" }`} />
                <span className="text-primay-500">WordBridge</span>
            </Link>
            <nav className="flex float-right  items-center flex gap-10">
                <Link to="/">
                    Home
                </Link>
                <Link to="/vocabulary">
                    Vocabulary
                </Link>
                <Link to='/progress'>
                    Progress
                </Link>
               <ThemeToggle/>
             </nav>
        </div>
        </header>
    )
}

export default Header;