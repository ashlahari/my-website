import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
        

export const About = () => {
    var aboutData = require("../../userData/userData.json");

    // Position the user's photo according to the screen size
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    
      const updateWindowSize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      };
    
      useEffect(() => {
        window.addEventListener('resize', updateWindowSize);
    
        return () => {
          window.removeEventListener('resize', updateWindowSize);
        };
      }, []);
    
      const getPositionStyle = () => {
        if (windowSize.width < 1024) {
          return {
            width: '65vw',
            height: '50vh'
          };
        } else {
          return {
            width: '30vw',
            height: '80vh'
          };
        }
      };

    return (
        <div className="pageDiv">
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="grid" style={{ marginTop: '5vh', width: '80vw' }}>
                    <div className="col-12 md:col-12 lg:col-6">
                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <img src={require("../../assets/images/about/My_Photo.jpg")} alt="My Photo" className="aboutImg" style={{...getPositionStyle()}}/>
                        </div>
                    </div>
                    <div className="col-12 md:col-12 lg:col-6 ">
                        <div>
                            <div className="aboutDiv">
                                About Me
                            </div>
                            <div className="aboutText">
                                {aboutData.about}
                            </div>
                            <div style={{ height: '10vh' }}>
                                <Button outlined style={{color: '#ffeeb5'}}>Resume</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;