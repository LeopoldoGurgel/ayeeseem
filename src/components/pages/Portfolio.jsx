// TODO: create portfolio component

// Show images of six projects with links to both the deployed app and Github repo

function Portfolio() {
    return (
        
        <div className="portfolio">
            <h2 className="title">Portfolio</h2>
            <div  className="proj1">
                <a href="https://leopoldogurgel.github.io/proteingenefinder/" ><p className="projTitle">Protein Gene Finder</p></a>
                <a href="https://github.com/LeopoldoGurgel/proteingenefinder" className="githubRepo">GitHub Repo</a>
                <p className="techs">JavaScript/ Bulma framework/ Third Party APIs</p>
                <img src="images/DNA.jpeg" alt="Image of a DNA-ds structure."/>
            </div>

            <div  className="proj">
                <a href="https://medicalinfo-db-397969924a16.herokuapp.com/" ><p className="projTitle">MedInfo App</p></a>
                <a href="https://github.com/LeopoldoGurgel/Project2" className="githubRepo">GitHub Repo</a>
                <p className="techs">Session-Save/Handlebars/MySql</p>
                <img src="images/medApp.jpg" alt="Image of a clinic database app."/>
            </div>

            <div className="proj">
                <a href="https://myeasynotes-f5c4a6c5cb17.herokuapp.com/notes"><p className="projTitle">My Easy Notes</p></a>
                <a href="https://github.com/LeopoldoGurgel/myeasynotes" className="githubRepo">GitHub Repo</a>
                <p className="techs">Javascript / Express API</p>                
                <img src="images/myEasyNotes.png" alt="Landing page of myEasyNotes app."/>                    
            </div>

            <div  className="proj">
                <a href="#"><p className="projTitle">My Easy Team Tracker</p></a>
                <a href="https://github.com/LeopoldoGurgel/myeasyteamtracker" className="githubRepo">GitHub Repo</a>
                <p className="techs">MySql / InquirerJS</p>              
                <img src="images/MySqlTeamTracker.jpg" alt="Image of app running on command line."/>                    
            </div>

            <div  className="proj">
                <a href="#"><p className="projTitle">Coder Social Network (BackEnd)</p></a>
                <a href="https://github.com/LeopoldoGurgel/coder-social-network" className="githubRepo">GitHub Repo</a>
                <p className="techs">MongoDB / Express API</p>
                <img src="images/socialBackEnd.jpg" alt="Database being tested on Insomina app."/>
            </div>

            <div  className="proj">
                <a href=" https://jate-main-emkatffzollheyw4ryao.herokuapp.com/"><p className="projTitle">My Easy Text Editor</p></a>
                <a href="https://github.com/LeopoldoGurgel/myEasyTextEditor" className="githubRepo">GitHub Repo</a>
                <p className="techs">Javascript / PWA</p>
                <img src="images/JATE.jpg" alt="Image of a PWA text editor."/>
            </div>
        </div>
    )
}

export default Portfolio;