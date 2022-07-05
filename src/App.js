import React, { useContext } from 'react';
import { About, Footer, Header, Skills, Testimonial, Work } from './container';
import { Navbar } from './components';
import { Helmet } from 'react-helmet';
import Styles from './data/Style';
import { ThemeContext, ThemeProvider } from "./providers/ThemeProvider";
import './App.scss';

const StyleTag = () => {
  const [themeMode] = useContext(ThemeContext);
  console.log(themeMode.theme);
  return (
    <Helmet>
      <style>{Styles(themeMode.theme)}</style>
    </Helmet>
  );
};

const App = () => { 

  return (
<ThemeProvider >
  <div className="app"> 
    <StyleTag />
    <Navbar />    
    <Header />
    <About />
    <Work />
    <Skills />
    <Testimonial />
    <Footer />
  </div>
</ThemeProvider>
  )
}

export default App;