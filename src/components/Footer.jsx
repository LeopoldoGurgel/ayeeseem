// create footer component

// text or icon links to developers github and linkedin plus any additional third platform (Stackoverflow, twitter....)

function Footer({currentPage, handlePageChange}) {
    return (
        <footer className="footer">
            <a href="https://github.com/LeopoldoGurgel">GitHub</a>
            <a href="https://www.linkedin.com/in/leopoldo-pimentel-24a404284/">LinkedIn</a>
            <a href="https://stackoverflow.com/users/22740467/leopoldo-gurgel">Stack Overflow</a>
        </footer>
    )
};

export default Footer;