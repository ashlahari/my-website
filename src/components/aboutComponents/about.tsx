import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
        
export const About = () => {
    var aboutData = require("../../userData/userData.json");
    const [isVisible, setIsVisible] = useState(false);

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

      useEffect(() => {
        const handleScroll = () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const lowerThreshold = window.innerHeight * 0.5;
          const upperThreshold = window.innerHeight * 1.5;
          setIsVisible(scrollY > lowerThreshold && scrollY <= upperThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
      const getPositionStyle = () => {
        if (windowSize.width <= 1024) {
          return {
            width: '60vw',
            height: '66vh'
          };
        } else {
          return {
            width: '30vw',
            height: '85vh'
          };
        }
      };

      const getPositionStyleInnerDiv = () => {
        if (windowSize.width > 1024) {
          return {
            justifyContent: 'right',
            marginRight: '2vw'
          };
        } else {
          return {
            justifyContent: 'center',
          };
        }
      };

    return (
        <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
            <div style={{display: 'flex', marginTop: '1vh', ...getPositionStyleInnerDiv()}}>
                <div className="grid aboutInnerDiv" style={{ width: '90vw', height: '100%' }}>
                    <div className="col-12 xl:col-6 ">
                      <div>
                        <div className="aboutImgDiv">
                          <div>
                            <img src={require("../../assets/images/about/My_Photo.jpg")} alt="My Photo" className="aboutImg" style={{...getPositionStyle()}}/>
                          </div>
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