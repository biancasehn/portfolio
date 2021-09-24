import myPhoto from '../../../../assets/images/photo.jpg'

function About () {
    return (
        <section className="aboutMe" id="aboutMe">
          <h2 className="sectionTitle">ABOUT ME</h2>
          <div className="sectionContent">
            <div className="myPhoto">
              <img alt="myphoto" title="My photo" src={myPhoto} style={{maxWidth: "250px", borderRadius:"50%"}} loading="lazy"/>
            </div>
              <h3>
                I am a web developer with a background in Electrical Engineering, that rediscovered her passion about programming while looking for ways to continue developing skills during the pandemic.
                <br/>
                <br/>
                I love learning new stuff and I spend most of my free time studying web development, designing and building applications.
                <br/>
                <br/>
                When I am not studying, you can probably find me watching movies or planning my next trip.
              </h3>
          </div>
        </section>
    )
}

export default About;