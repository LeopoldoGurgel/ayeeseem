// create resume component

// Should have a link to a downloadable resume and a list of the developer's proficiencies.

function Resume() {
    return (
        <div className="resume">
            <h2 className="title">Resume</h2>
            
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
                <li>Boostrap</li>
            </ul>
            </div>
            <div>
            <h2>Back-end Proficiencies:</h2>
            <ul>
                <li>Apis</li>
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