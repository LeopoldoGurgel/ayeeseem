 // TODO: create about me component

 // About me should have a recent photo and a short bio about the developer

 function About() {
    return (
        <div className="about">
            <h3 className="title">About Me</h3>
            <div className=" ">
            <img src="images/picofme1.jpg" alt="Leo's picture. He is good looking."/>
            <p className="text">Hello. My name is Leopoldo Gurgel (but i just tell everyone to call me Leo). I am a former medical doctor who used to play with javascript to forget about a job which was not that fun. In 2022, my wife decided to move to Canada to further her education and I decided to start working with what I really had fun with. I signed for University of Toronto Coding Bootcamp and here I am. Ready to turn your ideas into real applications.</p>
            </div>            
        </div>
    )
};

export default About;