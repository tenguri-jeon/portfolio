// import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Route, HashRouter  as Router, Routes }   from "react-router-dom";
import GlobalStyle from './styled/reset'
import Layout from './pages/layout';
import CareerList from './pages/introduce/careerList';
import Product from './pages/product';
import Contact from './pages/contact';


function App() {

  return (
    <>  
      <Router>
        <GlobalStyle/>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/inroduce' element={<CareerList/>}/>
            <Route path='/product' element={<Product/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
