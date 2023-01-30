import sun from "./images/sun.jpeg";
import earth from "./images/earth.jpeg";
import mercury from "./images/mercury.jpeg";
import venus from "./images/venus.jpeg";
import mars from "./images/mars.jpeg";
import jupiter from "./images/jupiter.jpeg";
import saturn from "./images/saturn.jpeg";
import uranus from "./images/uranus.jpeg";
import neptune from "./images/neptune.jpeg";

export const planetImages = [
  sun,
  mercury,
  venus,
  earth,
  mars,
  jupiter,
  saturn,
  uranus,
  neptune,
];

export const rotationSpeeds = [
  0.0039, // Mercury
  0.0029, // Venus
  0.0019, // Earth
  0.0015, // Mars
  0.0009, // Jupiter
  0.0007, // Saturn
  0.0005, // Uranus
  0.0004, // Neptune
];
export const orbitSpeeds = [1.0, 0.9, 0.75, 0.65, 0.5, 0.4, 0.3, 0.2, 0.1];
export const orbitalRadii = [
  57.91 / 8,
  108.2 / 8,
  149.6 / 8,
  227.9 / 8,
  778.5 / 8,
  1433.5 / 8,
  2872.5 / 8,
  4495.1 / 8,
];

// Sun: 109
// Jupiter: 11.2
// Saturn: 9.45
// Uranus: 4.01
// Neptune: 3.88
// Earth: 1
// Venus: 0.95
// Mars: 0.53
// Mercury: 0.38

export const planetSizes = [0.38, 0.95, 1, 0.53, 11.2, 9.45, 4.01, 3.88];

export const planetSizesSmall = [0.38, 0.95, 1, 0.53, 11.2, 9.45, 4.01, 3.88];

export const planetsText = (focalPoint) => {
  return [
    {
      name: "Sun",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + -10.2, 3, 0],
    },
    {
      name: "Mercury",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + -6, 2, 0],
    },
    {
      name: "Venus",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + -3, 2, 0],
    },
    { name: "Earth", scale: [1, 1, 1], position: [focalPoint + 0, 2, 0] },
    { name: "Mars", scale: [0.8, 0.8, 0.8], position: [focalPoint + 3, 2, 0] },
    {
      name: "Jupiter",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 6, 2, 0],
    },
    {
      name: "Saturn",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 9, 2, 0],
    },
    {
      name: "Uranus",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 12, 2, 0],
    },
    {
      name: "Neptune",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 15, 2, 0],
    },
  ];
};
