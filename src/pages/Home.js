import { useRecoilState } from "recoil";
import { themeState } from "../recoilState/ThemeState";
import { motion } from "framer-motion";
import { BarChart3, BookOpen, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  const [theme] = useRecoilState(themeState);
  return (
    <div className="mx-auto px-4 py-8 max-w-5xl pt-10 md:pt-20 ">

       {/* Description container of home page  */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
        className="mb-10 md:mb-20"
      >
        <h1
          className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 
                            bg-clip-text text-transparent bg-gradient-to-r from-primary-600 via-secondary-500 to-accent-500"
        >
          WordBridge
        </h1>
        <p
          className={`text-xl md:text-2xl ${
            theme === "dark" ? "text-gray-300" : "text-gray-600"
          }`}
        >
          The bilingual journey to mastering English and Hindi vocabulary
        </p>
      </motion.div>

        {/* Browser vocabulary and track your progress with WordBridge, your */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 md:mb-20`}>

        {/* brower vocabulary section  */}
        <motion.div
          className={`p-6 border  rounded-lg shadow-lg ${theme==='light'?"bg-white; border-gray-100":"bg-gray-800; border-gray-700"}`}
          initial={{opacity:0,x:-60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.75}}
       >
          <div className="flex items-start mb-4">
            <div className={`p-3 ${theme==='light'? "bg-primary-100":"bg-primary-900/30"}   rounded-lg mr-4`}>
              <BookOpen className={`h-6 w-6 ${theme==='light'?"text-primary-600":"text-primary-400"}`}/>
            </div>
            <div className="flex flex-col">
              <h2 className={`font-serif text-2xl font-bold ${theme==='light'?"text-gray-900":"text-white"} mb-1 text-start`}>
                Vocabulary
              </h2>
              <p className={`${theme==='light'?"text-gray-600":"text-gray-300"} text-start`}>
                Explore 80 words with meanings and examples in both
                English and Hindi
              </p>
            </div>
          </div>
          <Link
            to="/vocabulary"
            className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-primary-500 hover:bg-primary-600 text-white transition-colors w-full"
          >
            Browse Vocabulary
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>

        {/* Progress section  */}
        <motion.div
           className={`p-6 border  rounded-lg shadow-lg ${theme==='light'?"bg-white; border-gray-100":"bg-gray-800; border-gray-700"}`}
            initial={{opacity:0,x:60}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.75}}
        >
           <div className="flex items-start mb-10">
            <div className={`p-3 ${theme==='light'?"bg-secondary-100":"bg-secondary-900/30"} rounded-lg mr-4`}>
              <BarChart3 className={`h-6 w-6 ${theme==='light'?"text-secondary-600":"text-secondary-400"} `} />
            </div>
            <div className="flex  flex-col">
              <h2 className={`font-serif text-2xl font-bold ${theme==='light'?"text-gray-900":"text-white"} mb-1 text-start`}>Progress</h2>
              <p className={`${theme === 'light' ? "text-gray-600" :"text-gray-300"} text-start`}>
                Track your vocabulary learning progress
              </p>
            </div>
          </div>
          <Link 
            to="/progress" 
            className="flex items-center justify-center py-2.5 px-4 rounded-lg bg-secondary-500 hover:bg-secondary-600 text-white transition-colors w-full"
          >
            View Progress
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </motion.div>
      </div>

      {/* progress bar  */}
   
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.4 }}
        className={`bg-gradient-to-r ${theme==='light'?"from-primary-50 to-secondary-50":"from-gray-900 to-gray-800"} rounded-xl shadow-md p-6`}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className={`font-serif text-2xl font-bold ${theme==='light'?"text-gray-900":"text-white "} mb-2`}>Your Learning Progress</h2>
            <p className={`${theme === 'light'}?"text-gray-700":"text-gray-300"`}>
              You've learned <span className={`font-bold ${theme==='light'?"text-primary-600":"text-primary-400"}  `}>{34}</span> out of <span className="font-bold">{64}</span> words
            </p>
          </div>
          <div className="flex items-center justify-center w-32 h-32 relative">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="#E6E6E6"
                strokeWidth="3"
                strokeDasharray="100, 100"
              />
              <path
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={49 > 50 ? '#22c55e' : '#4361EE'}
                strokeWidth="3"
                strokeDasharray={`${24}, 100`}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className={`text-2xl font-bold ${theme==='light'?"text-gray-900 ":"text-white"} `}>{12}%</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
