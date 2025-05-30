import { useRecoilState } from "recoil";
import { themeState } from "../recoilState/ThemeState";
import { motion } from "framer-motion";

const DetailsCard = ({desc,count,icon,lightCol,darkCol}) =>{
    const [theme] = useRecoilState(themeState);
    return (
        <motion.div className={`border ${theme==='light'?"bg-white; border-gray-100":"bg-gray-800; border-gray-700"} rounded-lg p-6 shadow-sm`}
            initial={{opacity:0,y:20}}
            animate={{opacity:1,y:0}}
            transition={{duration:0.75}}
        
        >
            <div className="flex justify-between" >
                <div className={`flex flex-col `}>
                    <p className={`text-sm ${theme === 'light'?"text-gray-500" :"text-gray-400"} text-start`}>{desc}</p>
                    <h1 className={`text-3xl font-bold ${theme==='light'?"text-gray-900":"text-white"} text-start`}>{count}</h1>
                </div>
                <div >
                   <div className={`float-right ${theme === 'light' ? lightCol: darkCol} rounded-lg p-2 `}>
                    {icon}
                   </div>
                </div>
            </div>
        </motion.div>
    );
}

export default DetailsCard;