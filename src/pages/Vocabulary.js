import { useState } from "react";
import WordCard from "../components/WordCard";
import { vocabularyData } from "../data/vocabulary"
const Vocabulary = () =>{
    const [openIdx,setOpenIdx] = useState(0);

     const handleOpen = (idx) =>{
       
        setOpenIdx(openIdx===idx?0:idx);
    }

   console.log("Vocabulary Data: ", vocabularyData);

    return (
        <div className={`grid grid-cols-1  gap-2 md:gap-6 max-w-3xl mx-auto mt-10 px-4 md:px-0`}>
            {
                vocabularyData.map((word,idx)=>(
                     <WordCard openIdx={openIdx} handleOpen={handleOpen} word={word}/>
                ))
            }
        </div>
    );
}

export default Vocabulary;