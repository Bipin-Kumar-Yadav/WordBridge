
import './App.css';

import { useRecoilState } from 'recoil';
import { themeState } from './recoilState/ThemeState';
import Header from './components/Header';
import {  Routes ,Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Vocabulary from './pages/Vocabulary';
import Progress from './pages/Progress';
import Footer from './components/Footer';

function App() {
  const [theme] = useRecoilState(themeState);
  return (
      <BrowserRouter>
          <div className={`App ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}  min-h-screen flex flex-col transition-colors duration-300`}>
              <Header/>
              <div className='flex-grow'>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/vocabulary" element={<Vocabulary/>}/>
                    <Route path="/progress" element={<Progress/>}/>
                </Routes>
              </div>
              <Footer/>
          </div>
      </BrowserRouter>
  );
}

export default App;
