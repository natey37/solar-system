import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import Planet from "./Planet";
import {
  OrbitControls,
  PerspectiveCamera,
  Text,
  Text3D,
} from "@react-three/drei";

import {
  rotationSpeeds,
  orbitSpeeds,
  orbitalRadii,
  planetSizes,
  planetImages,
  planetsText,
} from "./constants";

function SolarSystem() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [focalPoint, setFocalPoint] = useState(0);
  const [positions, setPositions] = useState({
    sun: [-10, 0, 0],
    planets: [
      [focalPoint - 6 + 0 * 3, 0, 0],
      [focalPoint - 6 + 1 * 3, 0, 0],
      [focalPoint - 6 + 2 * 3, 0, 0],
      [focalPoint - 6 + 3 * 3, 0, 0],
      [focalPoint - 6 + 4 * 3, 0, 0],
      [focalPoint - 6 + 5 * 3, 0, 0],
      [focalPoint - 6 + 6 * 3, 0, 0],
      [focalPoint - 6 + 7 * 3, 0, 0],
    ],
  });

  const [reset, setReset] = useState(true);

  useEffect(() => {
    if (focalPoint !== 0) {
      setReset(true);
      setPositions({
        sun: [focalPoint + -10, 0, 0],
        planets: [
          [focalPoint - 6 + 0 * 3, 0, 0],
          [focalPoint - 6 + 1 * 3, 0, 0],
          [focalPoint - 6 + 2 * 3, 0, 0],
          [focalPoint - 6 + 3 * 3, 0, 0],
          [focalPoint - 6 + 4 * 3, 0, 0],
          [focalPoint - 6 + 5 * 3, 0, 0],
          [focalPoint - 6 + 6 * 3, 0, 0],
          [focalPoint - 6 + 7 * 3, 0, 0],
        ],
      });
    }
  }, [focalPoint]);

  useEffect(() => {
    if (isAnimating) {
      setReset(false);
      setPositions({
        sun: [-4, 0, 0],
        planets: [
          [1 * 3, 0, 0],
          [2 * 3, 0, 0],
          [3 * 3, 0, 0],
          [4 * 3, 0, 0],
          [5 * 3, 0, 0],
          [6 * 3, 0, 0],
          [7 * 3, 0, 0],
          [8 * 3, 0, 0],
        ],
      });
    }
  }, [isAnimating]);

  const handleReset = () => {
    setReset(true);
    setFocalPoint(0);
    setPositions({
      sun: [-10, 0, 0],
      planets: [
        [-6 + 0 * 3, 0, 0],
        [-6 + 1 * 3, 0, 0],
        [-6 + 2 * 3, 0, 0],
        [-6 + 3 * 3, 0, 0],
        [-6 + 4 * 3, 0, 0],
        [-6 + 5 * 3, 0, 0],
        [-6 + 6 * 3, 0, 0],
        [-6 + 7 * 3, 0, 0],
      ],
    });
  };

  return (
    <>
      <Canvas style={{ background: "black", height: "95vh", width: "100vw" }}>
        <Text
          scale={[10, 10, 10]}
          position={[0, 20, 0]}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Solar System
        </Text>

        {!isAnimating &&
          reset &&
          planetsText(focalPoint).map((planet) => (
            <Text
              key={planet.name}
              scale={planet.scale}
              position={planet.position}
              color="white"
              anchorX="center"
              anchorY="middle"
            >
              {planet.name}
            </Text>
          ))}
        <ambientLight />
        <Planet
          orbitRadius={0}
          orbitSpeeds={0}
          rotationSpeed={0}
          position={positions.sun}
          size={2}
          image={planetImages[0]}
          isAnimating={isAnimating}
        />
        {[...Array(8)].map((_, i) => (
          <Planet
            orbitRadius={orbitalRadii[i]}
            orbitSpeed={orbitSpeeds[i]}
            rotationSpeed={rotationSpeeds[i]}
            position={positions.planets[i]}
            size={isAnimating ? planetSizes[i] : 1}
            image={planetImages[i + 1]}
            key={i}
            isAnimating={isAnimating}
          />
        ))}
        <OrbitControls />
      </Canvas>
      <button onClick={() => setIsAnimating(!isAnimating)}>
        {isAnimating ? "Stop Animation" : "Start Animation"}
      </button>
      <button
        disabled={isAnimating ? true : false}
        onClick={() => setFocalPoint((prev) => prev + 1)}
      >
        Move Left
      </button>
      <button
        disabled={isAnimating ? true : false}
        onClick={() => setFocalPoint((prev) => prev - 1)}
      >
        Move Right
      </button>
      <button
        disabled={isAnimating ? true : false}
        onClick={() => handleReset()}
      >
        Reset
      </button>
    </>
  );
}

export default SolarSystem;
