import { Heart } from 'lucide-react';
const Footer = () =>{
    return (
         <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center  min-w-full ">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <div className="text-gray-500 dark:text-gray-400">
            WordBridge - English-Hindi Vocabulary Learning
          </div>
          <div className="text-sm text-gray-400 dark:text-gray-500 mt-1">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
          Made with <Heart className="h-4 w-4 mx-1 text-error-500" /> for language learners
        </div>
      </div>
    )
}
export default Footer;