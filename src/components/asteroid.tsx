import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { GradientTexture } from "@react-three/drei";

export const Asteroid = (props: any) => {
    const points = useRef<any>();
    const view  = useThree();

    const prop1 = props.first;
    const prop2 = props.second;
    const prop3 = props.third;
    const prop4 = props.fourth;
    const color = props.color;

    const particleSize = props.particleSize;

    useFrame(() => {
        if(points.current) {
            points.current.rotation.z += 0.0005;
        }
    });

    return (
        <points 
            ref={points} 
            rotation={[1.5, 0.75, 0]} 
            position={[view.viewport.height/4, view.viewport.height/8, 0.5]}
            scale={[view.viewport.height/15, view.viewport.height/15, view.viewport.height/15]}
        >
          <torusGeometry args={[prop1, prop2, prop3, prop4]} />
          <pointsMaterial color={color} size={particleSize} sizeAttenuation />
        </points>
      );
};

export default Asteroid;