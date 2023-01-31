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
      scale: [2, 2, 2],
      position: [focalPoint + -10.2, 4, 0],
      info: ["The Sun is a nearly perfect spherical ball of hot plasma, with internal convective motion that generates a magnetic field via a dynamo process.",
        "The Sun is by far the largest object in the solar system, accounting for about 99.86% of the total mass of the solar system.",
        "The Sun is a main-sequence star, and as such, it is generating heat and light through nuclear fusion of hydrogen nuclei into helium in its core. This process will continue for another 5 billion years, until the Sun exhausts the available fuel in its core."],
    },
    {
      name: "Mercury",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + -6, 2, 0],
      info: ["It is the smallest planet in the solar system.",
        "Mercury has the most eccentric orbit of any planet, meaning its orbit is the most elliptical or oblong.",
        "Mercury has the most extreme temperature variations of any planet in the solar system, with daytime temperatures hot enough to melt lead and nighttime temperatures cold enough to freeze nitrogen."],
    },
    {
      name: "Venus",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + -3, 2, 0],
      info: ["Venus is the brightest planet in the night sky, and is often referred to as the 'Morning Star' or 'Evening Star'.",
      "Venus rotates in the opposite direction to most other planets in the solar system, meaning that its day is longer than its year.",
      "The atmosphere of Venus is mostly made up of carbon dioxide, with clouds of sulfuric acid."],
    },
    { name: "Earth", scale: [.8, .8, .8], position: [focalPoint + 0, 2, 0], info: ["Earth is the only planet in the solar system known to support life.",
        "The Earth's axis is tilted at an angle of 23.5 degrees, which causes the changing seasons.",
        "The Earth is the densest planet in the solar system, with most of its mass concentrated in its core."] },
    { name: "Mars", scale: [0.8, 0.8, 0.8], position: [focalPoint + 3, 2, 0], info: ["Mars is known as the 'Red Planet' due to the iron oxide (rust) that covers its surface, giving it a reddish tint.",
    "Mars is the second smallest planet in the solar system, after Mercury.",
    "Mars has the largest volcano in the solar system, Olympus Mons, and the deepest canyon, Valles Marineris."] },
    {
      name: "Jupiter",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 6, 2, 0],
      info: ["Jupiter is the largest planet in the solar system and has the most moons (79)." ,
        "Jupiter has the shortest day of any planet in the solar system, with a day lasting just under 10 hours.",
        "Jupiter's Great Red Spot is a massive storm that has raged for at least 400 years."],
    },
    {
      name: "Saturn",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 9, 2, 0],
      info: ["Saturn is known for its beautiful and complex system of rings, which are made up of millions of individual ice and rock particles.",
        "Saturn is the least dense planet in the solar system and would float if placed in water.",
        "Saturn has the longest day of any planet in the solar system, with a day lasting just over 10 hours."],
    },
    {
      name: "Uranus",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 12, 2, 0],
      info: ["Uranus is the seventh planet from the sun and the third largest in the solar system.",
        "Uranus rotates at a near-90-degree angle to the plane of its orbit, meaning it essentially rolls along its orbital path.",
        "Uranus is the coldest planet in the solar system, with temperatures reaching as low as -224 degrees Celsius."],
    },
    {
      name: "Neptune",
      scale: [0.8, 0.8, 0.8],
      position: [focalPoint + 15, 2, 0],
      info: ["Neptune is the eighth and furthest planet from the sun.",
        "Neptune is the windiest planet in the solar system, with winds reaching speeds of up to 2,100 km/h.",
        "Neptune has the strongest gravitational pull of any planet in the solar system, making it difficult for spacecraft to fly by and study."],
    },
  ];
};
