// create resume component

// Should have a link to a downloadable resume and a list of the developer's proficiencies.

function Resume() {
    return (
        <div className="resume">
            <h2 className="title">Resume</h2>
            
            <a href="Resume.md" id="download" download>Download my Resume file!</a>

            <div className="lists">
                <div>
            <h2>Front-End Proficiencies:</h2>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>JQuery</li>
                <li>Resposive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            </div>
            <div>
            <h2>Back-end Proficiencies:</h2>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySql/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>REST</li>
                <li>GraphQL</li>
            </ul>
            </div>
            </div>

        </div>
    )
}

export default Resume;