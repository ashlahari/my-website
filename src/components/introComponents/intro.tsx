import { useState, useEffect } from 'react';
import { Space } from './space';

export const Intro = () => {
    var userInfo = require('../../userData/userData.json');
    const [userPreposition, setUserPreposition] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    //If the user's designation starts with a vowel, append 'an' before it
    useEffect(() => {
      var firstLetter = userInfo.title.substring(0, 1).toString().toLowerCase(); 
      if(firstLetter === 'a' || firstLetter === 'e' || firstLetter === 'i' || firstLetter === 'o' || firstLetter === 'u') {
        setUserPreposition('an');
      }
      else {
        setUserPreposition('a');
      }
    }, [userInfo]);

    // Position the user's name and info according to the screen size
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
        const handleScroll = () => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const threshold = window.innerHeight * 0.5;
          setIsVisible(scrollY < threshold);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
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
            marginTop: '28vh',
            marginLeft: '10vw'
          };
        } else {
          return {
            width: '90vw',
            marginTop: '10vh',
            marginLeft: '0'
          };
        }
      };

      const getPositionStyleMain = () => {
        if (windowSize.width > 1024 || (windowSize.width === 1024 && windowSize.height <= 600)) {
        } else {
          return {
            marginLeft: '5vw'
          };
        }
      };


    return (
      <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <Space />
        <div className="introMainDiv" style={{ ...getPositionStyleMain() }}>
          <div className="introText" style={{ ...getPositionStyle() }}>
              <div className="introName">
                  Hi There, I'm {userInfo.username}
              </div>
              <div className="introTitle">
                  I'm {userPreposition} {userInfo.title}
              </div>
          </div>
        </div>
      </div>
      
    )
};

export default Intro;