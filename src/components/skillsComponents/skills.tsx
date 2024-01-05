import { useState, useEffect } from 'react';
import { SkillsCard } from './skillsCard';
  
export const Skills = () => {
    const [isVisible, setIsVisible] = useState(false);
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
          setIsVisible(scrollY > lowerThreshold);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const getPositionStyleDiv = () => {
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
        <div className={`fade-in ${isVisible ? 'visible' : ''} pageDiv`}>
            <div style={{display: 'flex', marginTop: '3vh', ...getPositionStyleDiv()}}>
                <div className="skillsMainDiv">
                    <div className="skillsDiv">Skills</div>
                </div>
            </div>
        </div>
    );
};

export default Skills;