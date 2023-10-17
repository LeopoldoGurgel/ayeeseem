// TODO : create header component. That should have the logo and a navbar

// navbar should have these links: About Me, Portfolio, Contact, Resume
// The title corresponding to the current section is highlighted

// when the portfolio is loaded for the first time, then the about me title and section are selected by default



function Header({currentPage, handlePageChange}) {
    return (
        <div className="header">
            <div className="banner">
                <img id="largeBanner" src="images/sheep1-logo.jpg" alt="Sheep One"/>
                <img id="smallBanner" src="images/sheep1no-tilt.jpg" alt="Sheep One"/>
            </div>
            <img id="slogan" src="images/slogan.jpg" alt="The First Step to Yuour Dream Come True is Counting Sheeps" />
            
            {/* <div className='slogan'>
                <img src="/images/slogan.jpg" alt="The First Step to Yuour Dream Come True is Counting Sheeps" />
            </div> */}
            <nav className='nav'>
                <a href="#about" 
                onClick={() => handlePageChange("About")}
                className={currentPage === "About" ? "active" : " "}
                >About Me</a>
                <a href="#home" 
                onClick={() => handlePageChange("Portfolio")}
                className={currentPage === "Portfolio" ? "active" : " "}
                >Portfolio</a>
                <a href="#contact" 
                onClick={() => handlePageChange("Contact")}
                className={currentPage === "Contact" ? "active" : " "}
                >Contact</a>
                <a href="#resume" 
                onClick={() => handlePageChange("Resume")}
                className={currentPage === "Resume" ? "active" : " "}
                >Resume</a>
            </nav>
        </div>
    )
};

export default Header;