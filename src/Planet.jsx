import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Planet(props) {
  const ref = useRef();

  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);

  useFrame((state, delta) => {
    if (props.orbitRadius === 0) return; // don't animate the sun
    if (!props.isAnimating) return;

    let time = state.clock.getElapsedTime();
    let orbitSpeed = props.orbitSpeed;
    let orbitRadius = props.orbitRadius;

    ref.current.position.x = orbitRadius * Math.sin(time * orbitSpeed);
    ref.current.position.z = orbitRadius * Math.cos(time * orbitSpeed);
    ref.current.rotation.y += delta * props.rotationSpeed;
  });

  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereGeometry args={[props.size, 32, 32]} />
      <meshStandardMaterial map={new THREE.TextureLoader().load(props.image)} />
    </mesh>
  );
}

export default Planet;
