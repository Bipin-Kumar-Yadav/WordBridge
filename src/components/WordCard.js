import { ChevronDown, ChevronUp } from "lucide-react";
import { useRecoilState } from "recoil";
import { themeState } from "../recoilState/ThemeState";

const WordCard = ({ openIdx, handleOpen ,word}) => {
  const [theme] = useRecoilState(themeState);
  const handleClick = (idx) =>{
    handleOpen(idx);
  }
  return (
    <div className="word-card">
      <div
        className={`flex items-center justify-between  p-2 shadow-lg 
            rounded-t-lg ${
              theme === "light"
                ? "bg-gray-100/50"
                : "bg-gray-700/10 border-gray-900"
            }`}

        onClick={()=> {handleClick(word.idx)}}
      >
        <h2
          className={`text-xl font-bold ${
            theme === "light" ? "text-gray-500" : "text-gray-500"
          }`}
        >
          {word.word}
        </h2>
        {openIdx === word.idx ?  <ChevronUp className={`${theme === "light"?"text-gray-500":"text-gray-500"}`} /> : <ChevronDown className={`${theme === "light"?"text-gray-500":"text-gray-500"}`}/>}
      </div>


      {openIdx === word.idx && (
        <div
          className={`flex flex-col gap-4 rounded-b-lg 
            px-4 py-6
             shadow-lg 
            ${theme === "light" ? "bg-gray-100/80" : "bg-gray-700/20 "}`}
        >
          <div>
            {/* part 1  */}
            <div className={`flex items-center gap-4 pl-2 `}>
              <div className={`h-0.5 w-10 rounded-full bg-blue-800`}></div>
              <p
                className={`font-serif text-xl font-semibold ${
                  theme === "light" ? "text-gray-800 " : "text-gray-200"
                } flex items-center`}
              >
                Meaning
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div
                className={`${
                  theme === "light" ? "bg-primary-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light" ? "text-accent-600" : "text-accent-400"
                  } uppercase tracking-wider mb-2`}
                >
                  English
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.meanings.english}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-secondary-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light"
                      ? "text-secondary-600"
                      : "text-secondary-400"
                  } uppercase tracking-wider mb-2`}
                >
                  Hindi
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.meanings.hindi}
                </p>
              </div>
            </div>

            {/* part 2 */}
            <div className={`flex items-center gap-4 pl-2`}>
              <div className={`h-0.5 w-10 rounded-full  bg-accent-500`}></div>
              <p
                className={`font-serif text-xl font-semibold ${
                  theme === "light" ? "text-gray-800 " : "text-gray-200"
                } flex items-center`}
              >
                Examples
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div
                className={`${
                  theme === "light" ? "bg-accent-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light" ? "text-accent-600" : "text-accent-400"
                  } uppercase tracking-wider mb-2`}
                >
                  English
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.examples.english}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-accent-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light"
                      ? "text-secondary-600"
                      : "text-secondary-400"
                  } uppercase tracking-wider mb-2`}
                >
                  Hindi
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.examples.hindi}
                </p>
              </div>
            </div>

            {/* part 3  */}
            { word.verb_forms && ( <>
            <div className={`flex items-center gap-4 pl-2`}>
              <div className={`h-0.5 w-10 rounded-full bg-warning-500`}></div>
              <p
                className={`font-serif text-xl font-semibold ${
                  theme === "light" ? "text-gray-800 " : "text-gray-200"
                } flex items-center`}
              >
                Verb Forms
              </p>
            </div>
            <div className={`grid grid-cols-2 gap-4`}>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light" ? "text-accent-600" : "text-accent-400"
                  } uppercase tracking-wider mb-2`}
                >
                 BASE
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.verb_forms.base}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light"
                      ? "text-secondary-600"
                      : "text-secondary-400"
                  } uppercase tracking-wider mb-2`}
                >
                  PAST
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                    {word.verb_forms.past}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light" ? "text-accent-600" : "text-accent-400"
                  } uppercase tracking-wider mb-2`}
                >
                  Past Participle
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.verb_forms.past_participle}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light"
                      ? "text-secondary-600"
                      : "text-secondary-400"
                  } uppercase tracking-wider mb-2`}
                >
                 Ing Form
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.verb_forms.ing_form}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light" ? "text-accent-600" : "text-accent-400"
                  }  uppercase tracking-wider mb-2`}
                >
                 S or Es Form
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.verb_forms.s_es_form}
                </p>
              </div>
              <div
                className={`${
                  theme === "light" ? "bg-warning-50" : "bg-gray-900 "
                } p-4 rounded-lg`}
              >
                <p
                  className={`text-start text-sm font-medium ${
                    theme === "light"
                      ? "text-secondary-600"
                      : "text-secondary-400"
                  } uppercase tracking-wider mb-2`}
                >
                  Present 3rd Person
                </p>
                <p
                  className={`text-start ${
                    theme === "light" ? "text-gray-800" : "text-gray-200"
                  } italic`}
                >
                  {word.verb_forms.present_third_person}
                </p>
              </div>
            </div>
            </>)}
           
          </div>
        </div>
      )}
    </div>
  );
};

export default WordCard;
