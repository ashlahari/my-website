import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from './sun';
import { Asteroid } from './asteroid';
import { useState, useEffect } from 'react';

export const Space = (props: any) => {  
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
        window.addEventListener('resize', updateWindowSize);
    
        return () => {
          window.removeEventListener('resize', updateWindowSize);
        };
      }, []);
    
      const getPositionStyle = () => {
        if (windowSize.width > 1024) {
        } else {
          return {
            marginTop: '10vh',
          };
        }
      };

      const getPositionStyleMain = () => {
        if (windowSize.width > 1024 ) {
            return {
                justifyContent: 'right'
            }
        } else {
          return {
            justifyContent: 'center',
            marginLeft: '3vw'
          };
        }
      };
    

    return (
        <div style={{ display: 'flex' , margin: '1vh', ...getPositionStyleMain()}}>
            <div className="spaceDiv" style={{...getPositionStyle()}}>
                <Canvas>
                    <OrbitControls />
                    <ambientLight intensity={1}></ambientLight>
                    <directionalLight intensity={1} position={0.5}></directionalLight>
                    <Sun />
                    <Asteroid first={5} second={0.5} third={12} fourth={300} particleSize={0.01} color="white"/>
                    <Asteroid first={7} second={0.5} third={12} fourth={300} particleSize={0.015} color="#87CEEB"/>
                    <Asteroid first={9} second={0.5} third={12} fourth={300} particleSize={0.02} color="#555555"/>
                </Canvas>
            </div>
        </div>
    );
};

export default Space;