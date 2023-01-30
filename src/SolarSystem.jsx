import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import Planet from "./Planet";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import sun from "./images/sun.jpeg";
import earth from "./images/earth.jpeg";
import mercury from "./images/mercury.jpeg";
import venus from "./images/venus.jpeg";
import mars from "./images/mars.jpeg";
import jupiter from "./images/jupiter.jpeg";
import saturn from "./images/saturn.jpeg";
import uranus from "./images/uranus.jpeg";
import neptune from "./images/neptune.jpeg";
import {
  rotationSpeeds,
  orbitSpeeds,
  orbitalRadii,
  planetSizes,
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

  useEffect(() => {
    if (focalPoint !== 0) {
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
        <ambientLight />
        <Planet
          orbitRadius={0}
          orbitSpeeds={0}
          rotationSpeed={0}
          position={positions.sun}
          color={"orange"}
          size={2}
          image={sun}
          isAnimating={isAnimating}
        />
        {[...Array(8)].map((_, i) => (
          <Planet
            orbitRadius={orbitalRadii[i]}
            orbitSpeed={orbitSpeeds[i]}
            rotationSpeed={rotationSpeeds[i]}
            position={positions.planets[i]}
            color={color[i]}
            size={isAnimating ? planetSizes[i] : 1}
            image={planetImages[i]}
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

const color = [
  "blue",
  "green",
  "yellow",
  "orange",
  "purple",
  "pink",
  "white",
  "brown",
  "grey",
];
const planetImages = [
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];
export default SolarSystem;
