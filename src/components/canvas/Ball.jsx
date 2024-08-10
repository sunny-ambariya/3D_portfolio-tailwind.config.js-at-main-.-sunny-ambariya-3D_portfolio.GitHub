import React, {Suspense} from 'react';
import { Canvas } from "@react-three/fiber";

import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";


const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1}
    floatIntensity={1}>
      <ambientLight intensity={0.35} />
      <directionalLight position={[0, 0, 0.05]}/>
      <mesh castShadow receiveShadow scale={2.80}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial 
         color='#fff2e8'
         polygonOffset
         polygonOffsetFactor={-10}
         flatShading
        />
        <Decal 
         position={[0, 0, 1]}
         rotation={[2 * Math.PI, 0, 6.25]}
         scale={1}
         map={decal}
         flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({icon}) => {
  return (
    <Canvas
     frameloop='demand'
     
     gl={{preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />} >
       <OrbitControls enableZoom={false} />
       <Ball imgUrl={icon} />
      </Suspense>

      <Preload />
    </Canvas>
  );
};

export default BallCanvas;