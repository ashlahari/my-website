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
        if (windowSize.width <= 1024) {
          return {
            width: '65vw',
            height: '60vh'
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
                <div className="grid" style={{ marginTop: '5vh', width: '100vw' }}>
                    <div className="col-12 xl:col-6" style={{ backgroundColor: '#3d3d3d' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', top: '20px', position: 'relative' }}>
                          <div className="aboutImgDiv">
                            <img src={require("../../assets/images/about/My_Photo.jpg")} alt="My Photo" className="aboutImg" style={{...getPositionStyle()}}/>
                          </div>
                        </div>
                    </div>
                    <div className="col-12 xl:col-6">
                        <div>
                            <div className="aboutDiv">
                                About
                            </div>
                            <div className="aboutText">
                                {aboutData.about}
                            </div>
                            <div className="resumeDiv">
                                <Button outlined className="buttonStyle" style={{ height: '45px', width: '180px' }}>Download Resume</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;