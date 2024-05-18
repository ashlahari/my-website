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

    var skillsData = require("../../userData/userData.json");

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
          setIsVisible(scrollY > upperThreshold);
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
            <div style={{display: 'flex', marginTop: '3vh', height:'100%', ...getPositionStyleDiv()}}>
                <div className="skillsMainDiv">
                    <div className="skillsDiv">Skills</div>
                    <div className="skillsScrollDiv">
                      <div className="skillsSectionDiv">Programming Languages</div>
                      <div className="grid skillsGrid">
                          {skillsData.skills !== null && (
                              skillsData.programming.map((skill: any) => {
                                  return(
                                      <div style={{ margin: '40px' }}>
                                          <SkillsCard title={skill.title} image={skill.image} />
                                      </div>
                                  );
                              })
                          )}
                      </div>
                      <div className="skillsSectionDiv">Frontend</div>
                      <div className="grid skillsGrid">
                          {skillsData.skills !== null && (
                              skillsData.frontend.map((skill: any) => {
                                  return(
                                      <div style={{ margin: '40px' }}>
                                          <SkillsCard title={skill.title} image={skill.image} />
                                      </div>
                                  );
                              })
                          )}
                      </div>
                      <div className="skillsSectionDiv">Backend</div>
                      <div className="grid skillsGrid">
                          {skillsData.skills !== null && (
                              skillsData.backend.map((skill: any) => {
                                  return(
                                      <div style={{ margin: '40px' }}>
                                          <SkillsCard title={skill.title} image={skill.image} />
                                      </div>
                                  );
                              })
                          )}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;