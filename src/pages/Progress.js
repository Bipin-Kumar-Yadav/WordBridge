import { Award, BarChart3, Book, CheckCircle, XCircle } from "lucide-react";
import DetailsCard from "../components/DetailsCard";
import { useRecoilState } from "recoil";
import { themeState } from "../recoilState/ThemeState";
import { motion } from "framer-motion";
const Progress = () => {
  const [theme] = useRecoilState(themeState);
  const wordProgress = 4/5 * 100;
  const verbProgress = 18/88 * 100;
  return (
    <div className="progress-container max-w-5xl mx-auto ">
        {/* description container of progress page */}
      <h2
        className="text-4xl md:text-5xl lg:text-6xl font-bold mt-10 
                            bg-clip-text text-transparent bg-gradient-to-r
                            from-primary-600 via-secondary-500 to-accent-500"
      >
        Your Learning Progress
      </h2>
      <p className="mt-4 text-xl">Track your vocabulary learning journey</p>
      {/* details card section  */}
      <div className={`grid gird-cols-1 md:grid-cols-3 mt-4 md:mt-20 gap-4 md:gap-10 p-4 md:p-0`}
 
      >
        <DetailsCard
          desc={"Total Words"}
          count={12}
          icon={
            <Book
              className={`h-5 w-5 ${
                theme === "light" ? "text-primary-600" : "text-primary-400"
              }`}
            />
          }
          lightCol={"bg-primary-100"}
          darkCol={"bg-primary-900/30"}
        />
        <DetailsCard
          desc={"Words Learned"}
          count={10}
          icon={
            <CheckCircle
              className={`h-5 w-5 ${
                theme === "light" ? "text-success-600" : "text-success-400"
              }`}
            />
          }
          lightCol={"bg-success-100"}
          darkCol={"bg-success-900/30"}
        />
        <DetailsCard
          desc={"Words Remaining"}
          count={2}
          icon={
            <XCircle
              className={`h-5 w-5 ${
                theme === "light" ? "text-gray-500" : "text-gray-400"
              }`}
            />
          }
          lightCol={"bg-gray-100"}
          darkCol={"bg-gray-700"}
        />
      </div>
        {/* progress and recently learned section  */}
      <div className={`grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 mt-4 md:mt-10 p-4 md:p-0`}>
        {/* progress  */}
        <motion.div className={`border ${theme==='light'?"bg-white; border-gray-100":"bg-gray-800; border-gray-700"} rounded-lg p-6 shadow-sm`}
                   initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 , delay: 0.2 }}
        >
          <div className={`flex gap-4 items-center `}>
            <BarChart3 className="w-5 h-5 text-primary-600"/>
            <h2 className={`font-serif text-xl font-bold ${theme==='light'?"text-gray-900":"text-white"}`}>Overall Progress</h2>
          </div>
          <div className={`flex justify-between items-center mt-4`}>
            <p className={`text-sm  ${theme==='light'?"text-gray-500":"text-gray-400"}  `}>0% Completed</p>
            <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-400"} `}>0/88</p>
          </div>
          <div className={`w-full h-3 ${theme==='light'?"bg-gray-200":"bg-gray-700"} rounded-full `}>
            <div
                className={`h-3  rounded-full bg-gradient-to-r from-accent-500 to-secondary-500`}
                style={{width: `${wordProgress}%`}}
            >
            </div>
          </div>
          <div className={`flex justify-between items-center mt-4`}>
            <p className={`text-sm  ${theme==='light'?"text-gray-500":"text-gray-400"}  `}>Verbs Completed</p>
            <p className={`text-sm ${theme==="light"?"text-gray-500":"text-gray-400"} `}>0/88</p>
          </div>
          <div className={`w-full h-3 ${theme==='light'?"bg-gray-200":"bg-gray-700"} rounded-full `}>
            <div
                className={`h-3  rounded-full bg-gradient-to-r from-accent-500 to-secondary-500`}
                style={{width: `${verbProgress}%`}}
            >
            </div>
          </div>
        </motion.div>
        {/* recently learned  */}
        <motion.div className={`border ${theme==='light'?"bg-white; border-gray-100":"bg-gray-800; border-gray-700"} rounded-lg p-6 shadow-sm`}
                       initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.75 , delay: 0.2 }}
        >
            <div className={`flex gap-4 items-center`}>
                <Award className="w-5 h-5 text-primary-600"/>
                <h2 className={`font-serif text-xl font-bold ${theme==='light'?"text-gray-900":"text-white"}`}>Recently Learned</h2>
            </div>
            <p className={`py-6 ${theme==='light'?"text-gray-500":"text-gray-400"}`}>You haven't marked any words as learned yet.</p>
        </motion.div>
      </div>
        {/* motivational message */}
      <motion.div className={`mx-4 md:mx-0 rounded-lg p-6 mt-4 md:mt-10 bg-gradient-to-r ${theme==='light'?"from-primary-50 to-secondary-50":"from-gray-800 to-gray-900 "} shadow-sm`}
        initial={{opacity:0,y:20}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.75,delay:0.4}}
      >
        <p className={`font-bold text-2xl md:text-3xl lg:text-4xl ${theme==='light'?"text-gray-500":"text-gray-400"}`}>Keep learning new words!</p>
        <p className={`${theme ==='light'?"text-gray-600":"text-gray-500"} mt-2`}>
            Learn 88 more words to complete the vocabulary list.
        </p>
      </motion.div>
    </div>
  );
};
export default Progress;
