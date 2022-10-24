import Nav from './components/Nav';

//Import pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';

//Global styled
import GlobalStyle from './components/GlobalStyle';

//import router
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<AboutUs />} />
        <Route path='/work' element={<OurWork />} />
        <Route path='/contact' element={<ContactUs />} />
      </Routes>
    </div>
  );
}

export default App;
