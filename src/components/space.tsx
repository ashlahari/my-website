import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sun } from '../components/sun';
import { Asteroid } from '../components/asteroid';

export const Space = (props: any) => {    
    return (
        <div className="spaceDiv">
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
    );
};

export default Space;