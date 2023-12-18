import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { GradientTexture } from "@react-three/drei";

export const Sun = () => {
    const mesh = useRef<any>();
    const view  = useThree();

    useFrame(() => {
        if(mesh.current) {
            mesh.current.rotation.x -= 0.01;
        }
    });
    
    return(
        <mesh 
            position={[view.viewport.height/4, view.viewport.height/8, 0.5]}
            ref={mesh}
            rotation={[0, -0.5, 0]}
            scale={[view.viewport.width/28, view.viewport.width/28, view.viewport.width/28]}
        >
            <sphereGeometry args={[0.9, 30, 30]}/>
            <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 0.25, 0.5, 0.75, 1]} 
                    colors={['#FFF57B', '#FFE469', '#FECC51', '#FCB033', ' #FA961B']} 
                    size={1024} 
                />
            </meshBasicMaterial>
        </mesh>
    );
};

export default Sun;