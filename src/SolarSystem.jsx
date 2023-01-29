import React from 'react';
import { Canvas } from 'react-three-fiber';
import Planet from './Planet';
import { OrbitControls } from '@react-three/drei';
import sun from './images/sun.jpeg'
import earth from './images/earth.jpeg'
import mercury from './images/mercury.jpeg'
import venus from './images/venus.jpeg'
import mars from './images/mars.jpeg'
import jupiter from './images/jupiter.jpeg'
import saturn from './images/saturn.jpeg'
import uranus from './images/uranus.jpeg'
import neptune from './images/neptune.jpeg'

function SolarSystem() {
   
  return (
    <Canvas
        style={{ background: 'black', height: '100vh' }}

    >
        <OrbitControls 
            enableZoom={true}
            minDistance={10}
            maxDistance={100}
        />
        <ambientLight />
        <Planet position={[-4, 0, 0]} color={"orange"} size={2} image={sun}/>
        {[...Array(9)].map((_, i) => (
            <Planet position={[i*3, 0, 0]} color={color[i]} size={1} image={planetImages[i]} key={i} />
        ))}
        <OrbitControls />
    </Canvas>
  );
}

const color = ['blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'white', 'brown', 'grey']
const planetImages = [mercury, venus, earth, mars, jupiter, saturn, uranus, neptune]
export default SolarSystem;



