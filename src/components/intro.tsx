import { useState, useEffect } from 'react';

export const Intro = () => {
    var userInfo = require('../userData/intro.json');

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
        if (windowSize.width > 1024 || (windowSize.width === 1024 && windowSize.height <= 600)) {
          return {
            width: '50vw',
            marginTop: '32vh',
            marginLeft: '5vw'
          };
        } else {
          return {
            width: '100vw',
            marginTop: '10vh'
          };
        }
      };

    return (
        <div className="introMainDiv">
            <div className="introText" style={{ ...getPositionStyle() }}>
                <div className="introName">
                    Hi There, I'm {userInfo.username}
                </div>
                <div className="introTitle">
                    I'm a {userInfo.title}
                </div>
            </div>
        </div>
    )
};

export default Intro;