import { useState } from 'react';
import Header from './Header';
import Footer from './footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Resume from './pages/Resume';

export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');
  
    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
      if (currentPage === 'About') {
        return <About />;
      }
      if (currentPage === 'Contact') {
        return <Contact />;
      }
      if (currentPage === 'Portfolio') {
        return <Portfolio />;
      }
      if (currentPage === "Resume") {
        return <Resume />
      }
    };
  
    const handlePageChange = (page) => setCurrentPage(page);
  
    return (
      <div className='container'>

        <Header currentPage={currentPage} handlePageChange={handlePageChange} />

        <main className="mx-3">{renderPage()}</main>

        <Footer />
      </div>
    );
  }
  