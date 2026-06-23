const experimentsData = [
  {
    "id": 1,
    "name": "Simple Pendulum",
    "category": "Physics",
    "difficulty": "Beginner",
    "gradeLevel": [6, 7, 8],
    "estimatedTime": "30 minutes",
    "safetyLevel": "High",
    "objective": "To study the oscillatory motion of a simple pendulum and determine the relationship between length and time period.",
    "theory": {
      "eli10": "A pendulum is like a swing! When you pull it back and let go, it swings back and forth. The time it takes to complete one full swing depends on how long the string is. Longer strings make slower swings!",
      "advanced": "A simple pendulum consists of a mass (bob) suspended from a fixed point by a string or rod. When displaced from equilibrium, it undergoes simple harmonic motion. The time period T is given by T = 2π√(L/g), where L is the length and g is gravitational acceleration. This formula is valid for small angles (less than 15°).",
      "realWorldApplications": [
        "Pendulum clocks for timekeeping",
        "Seismometers for detecting earthquakes",
        "Metronomes for music tempo",
        "Foucault pendulum demonstrating Earth's rotation"
      ]
    },
    "materials": [
      "String or thread (1 meter)",
      "Small heavy bob (metal ball or weight)",
      "Retort stand with clamp",
      "Stopwatch",
      "Meter scale",
      "Protractor"
    ],
    "safetyInstructions": [
      "Ensure the bob is securely attached",
      "Keep clear of swinging path",
      "Use appropriate mass for the string strength",
      "Secure the retort stand properly"
    ],
    "variables": {
      "independent": ["Length of pendulum (L)"],
      "dependent": ["Time period (T)"],
      "controlled": ["Mass of bob", "Angle of release", "Air resistance"]
    },
    "parameters": {
      "length": {
        "min": 0.2,
        "max": 1.5,
        "step": 0.1,
        "unit": "meters",
        "default": 1.0
      },
      "mass": {
        "min": 50,
        "max": 500,
        "step": 50,
        "unit": "grams",
        "default": 100
      },
      "angle": {
        "min": 5,
        "max": 30,
        "step": 5,
        "unit": "degrees",
        "default": 10
      }
    },
    "formula": {
      "main": "T = 2\\pi\\sqrt{\\frac{L}{g}}",
      "explanation": "Where T is time period in seconds, L is length in meters, and g is acceleration due to gravity (9.8 m/s²)",
      "units": {
        "T": "seconds (s)",
        "L": "meters (m)",
        "g": "meters per second squared (m/s²)"
      }
    },
    "simulation": {
      "type": "pendulum",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "As length increases, time period increases",
      "Time period is independent of mass",
      "For small angles, time period remains constant",
      "Square of time period is directly proportional to length"
    ],
    "proTips": {
      "examTips": [
        "Remember: T ∝ √L (Time period is proportional to square root of length)",
        "The formula is only valid for small angles (< 15°)",
        "Time period does NOT depend on mass of the bob"
      ],
      "vivaQuestions": [
        "What is a seconds pendulum?",
        "Why should the amplitude be small?",
        "What happens to time period on the Moon?"
      ],
      "commonMistakes": [
        "Using large angles which invalidates the formula",
        "Counting oscillations incorrectly",
        "Not measuring length from point of suspension to center of mass"
      ]
    },
    "quiz": [
      {
        "question": "The time period of a simple pendulum depends on:",
        "options": ["Mass of bob", "Length of string", "Amplitude", "Material of bob"],
        "correct": 1
      },
      {
        "question": "If length is made 4 times, time period becomes:",
        "options": ["2 times", "4 times", "8 times", "16 times"],
        "correct": 0
      },
      {
        "question": "A seconds pendulum has time period of:",
        "options": ["1 second", "2 seconds", "0.5 seconds", "4 seconds"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand simple harmonic motion, relationship between physical parameters, and experimental verification of mathematical formulas."
  },
  {
    "id": 2,
    "name": "Ohm's Law",
    "category": "Physics",
    "difficulty": "Beginner",
    "gradeLevel": [8, 9, 10],
    "estimatedTime": "45 minutes",
    "safetyLevel": "Medium",
    "objective": "To verify Ohm's Law and establish the relationship between voltage, current, and resistance.",
    "theory": {
      "eli10": "Electricity flows through wires like water through pipes. Voltage is like the pressure pushing water, current is how much water flows, and resistance is how narrow the pipe is. More pressure = more flow. Narrower pipe = less flow!",
      "advanced": "Ohm's Law states that the current through a conductor between two points is directly proportional to the voltage across the two points and inversely proportional to the resistance. Mathematically: V = IR, where V is voltage, I is current, and R is resistance. This holds true for ohmic conductors at constant temperature.",
      "realWorldApplications": [
        "Designing electrical circuits",
        "Calculating power consumption",
        "Selecting appropriate resistors",
        "Troubleshooting electrical faults"
      ]
    },
    "materials": [
      "Battery or DC power supply",
      "Resistor (known value)",
      "Ammeter",
      "Voltmeter",
      "Rheostat (variable resistor)",
      "Connecting wires",
      "Switch"
    ],
    "safetyInstructions": [
      "Do not touch bare wire ends when circuit is live",
      "Use appropriate voltage range",
      "Check connections before powering",
      "Disconnect power when making changes"
    ],
    "variables": {
      "independent": ["Voltage (V)"],
      "dependent": ["Current (I)"],
      "controlled": ["Resistance (R)", "Temperature"]
    },
    "parameters": {
      "voltage": {
        "min": 1,
        "max": 12,
        "step": 0.5,
        "unit": "volts",
        "default": 5
      },
      "resistance": {
        "min": 10,
        "max": 1000,
        "step": 10,
        "unit": "ohms",
        "default": 100
      }
    },
    "formula": {
      "main": "V = IR",
      "explanation": "Where V is voltage in volts, I is current in amperes, and R is resistance in ohms",
      "units": {
        "V": "volts (V)",
        "I": "amperes (A)",
        "R": "ohms (Ω)"
      }
    },
    "simulation": {
      "type": "circuit",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Current increases linearly with voltage",
      "Slope of V-I graph gives resistance",
      "Graph passes through origin",
      "Ratio V/I remains constant for ohmic conductor"
    ],
    "proTips": {
      "examTips": [
        "Remember: V = IR (Voltage = Current × Resistance)",
        "V-I graph for ohmic conductor is a straight line through origin",
        "Resistance is the slope of V-I graph"
      ],
      "vivaQuestions": [
        "What are ohmic and non-ohmic conductors?",
        "Why does resistance increase with temperature?",
        "What is the unit of resistance?"
      ],
      "commonMistakes": [
        "Connecting ammeter in parallel instead of series",
        "Connecting voltmeter in series instead of parallel",
        "Not considering internal resistance of battery"
      ]
    },
    "quiz": [
      {
        "question": "Ohm's Law states that:",
        "options": ["V = I/R", "V = IR", "I = VR", "R = VI"],
        "correct": 1
      },
      {
        "question": "Unit of resistance is:",
        "options": ["Volt", "Ampere", "Ohm", "Watt"],
        "correct": 2
      },
      {
        "question": "If voltage doubles, current:",
        "options": ["Halves", "Doubles", "Quadruples", "Remains same"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand the fundamental relationship in electrical circuits and learn to measure electrical quantities accurately."
  },
  {
    "id": 3,
    "name": "Reflection of Light",
    "category": "Physics",
    "difficulty": "Beginner",
    "gradeLevel": [6, 7, 8],
    "estimatedTime": "40 minutes",
    "safetyLevel": "High",
    "objective": "To verify the laws of reflection using a plane mirror.",
    "theory": {
      "eli10": "When light hits a mirror, it bounces off like a ball bouncing off a wall. The angle at which it hits equals the angle at which it bounces. That's why you can see yourself in a mirror!",
      "advanced": "Reflection of light follows two laws: (1) The incident ray, reflected ray, and normal all lie in the same plane. (2) Angle of incidence equals angle of reflection (∠i = ∠r). These laws apply to all types of reflection from smooth surfaces.",
      "realWorldApplications": [
        "Periscopes in submarines",
        "Kaleidoscopes",
        "Rear-view mirrors in vehicles",
        "Solar cookers and concentrators"
      ]
    },
    "materials": [
      "Plane mirror with stand",
      "Drawing board",
      "White paper",
      "Pins (4-5)",
      "Protractor",
      "Scale",
      "Pencil"
    ],
    "safetyInstructions": [
      "Handle mirror carefully to avoid breakage",
      "Be careful with sharp pins",
      "Do not look directly at bright light sources",
      "Clean up broken glass immediately if mirror breaks"
    ],
    "variables": {
      "independent": ["Angle of incidence"],
      "dependent": ["Angle of reflection"],
      "controlled": ["Type of mirror", "Wavelength of light"]
    },
    "parameters": {
      "angleOfIncidence": {
        "min": 0,
        "max": 80,
        "step": 5,
        "unit": "degrees",
        "default": 30
      }
    },
    "formula": {
      "main": "\\angle i = \\angle r",
      "explanation": "Angle of incidence equals angle of reflection, both measured from the normal",
      "units": {
        "∠i": "degrees (°)",
        "∠r": "degrees (°)"
      }
    },
    "simulation": {
      "type": "ray-diagram",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Angle of incidence always equals angle of reflection",
      "Incident ray, reflected ray and normal lie in same plane",
      "Image formed is virtual and erect",
      "Image distance equals object distance"
    ],
    "proTips": {
      "examTips": [
        "Always draw normal perpendicular to mirror surface",
        "Measure angles from normal, not from mirror surface",
        "Remember: Image is laterally inverted (left-right reversed)"
      ],
      "vivaQuestions": [
        "What type of image is formed by plane mirror?",
        "Why is ambulance written inverted?",
        "What is the focal length of plane mirror?"
      ],
      "commonMistakes": [
        "Measuring angles from mirror instead of normal",
        "Not keeping pins vertical",
        "Parallax error while taking readings"
      ]
    },
    "quiz": [
      {
        "question": "If angle of incidence is 30°, angle of reflection is:",
        "options": ["15°", "30°", "60°", "90°"],
        "correct": 1
      },
      {
        "question": "Image formed by plane mirror is:",
        "options": ["Real and inverted", "Virtual and erect", "Real and erect", "Virtual and inverted"],
        "correct": 1
      },
      {
        "question": "Normal is drawn:",
        "options": ["Parallel to mirror", "Perpendicular to mirror", "At 45° to mirror", "At any angle"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand the laws of reflection and properties of images formed by plane mirrors."
  },
  {
    "id": 4,
    "name": "Refraction of Light",
    "category": "Physics",
    "difficulty": "Intermediate",
    "gradeLevel": [9, 10, 11],
    "estimatedTime": "50 minutes",
    "safetyLevel": "High",
    "objective": "To study refraction of light through a rectangular glass slab and verify Snell's Law.",
    "theory": {
      "eli10": "When light goes from air into water or glass, it bends! That's why a straw looks bent in a glass of water. Light slows down in denser materials and changes direction.",
      "advanced": "Refraction is the bending of light when it passes from one medium to another with different optical density. Snell's Law states: n₁sin(i) = n₂sin(r), where n is refractive index. Light bends towards normal when entering denser medium and away from normal when entering rarer medium.",
      "realWorldApplications": [
        "Lenses in glasses and cameras",
        "Optical fibers for communication",
        "Prisms in binoculars",
        "Mirages and rainbows"
      ]
    },
    "materials": [
      "Rectangular glass slab",
      "Drawing board",
      "White paper",
      "Pins (4-5)",
      "Protractor",
      "Scale",
      "Pencil"
    ],
    "safetyInstructions": [
      "Handle glass slab carefully",
      "Be careful with sharp pins",
      "Clean glass surfaces before use",
      "Place slab on soft surface"
    ],
    "variables": {
      "independent": ["Angle of incidence"],
      "dependent": ["Angle of refraction", "Lateral displacement"],
      "controlled": ["Type of glass slab", "Wavelength of light"]
    },
    "parameters": {
      "angleOfIncidence": {
        "min": 10,
        "max": 70,
        "step": 5,
        "unit": "degrees",
        "default": 40
      },
      "refractiveIndex": {
        "min": 1.3,
        "max": 1.7,
        "step": 0.1,
        "unit": "dimensionless",
        "default": 1.5
      }
    },
    "formula": {
      "main": "n = \\frac{\\sin i}{\\sin r}",
      "explanation": "Refractive index n equals ratio of sine of angle of incidence to sine of angle of refraction",
      "units": {
        "n": "dimensionless",
        "i": "degrees (°)",
        "r": "degrees (°)"
      }
    },
    "simulation": {
      "type": "ray-diagram",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Light bends towards normal when entering glass",
      "Emergent ray is parallel to incident ray",
      "Lateral displacement increases with angle of incidence",
      "sin(i)/sin(r) ratio remains constant"
    ],
    "proTips": {
      "examTips": [
        "Remember: Denser medium → bends towards normal",
        "Emergent ray is parallel but laterally displaced",
        "Refractive index is always greater than 1"
      ],
      "vivaQuestions": [
        "Why does light bend during refraction?",
        "What is critical angle?",
        "Name a natural phenomenon based on refraction"
      ],
      "commonMistakes": [
        "Not keeping pins in straight line",
        "Parallax error in alignment",
        "Measuring angles incorrectly"
      ]
    },
    "quiz": [
      {
        "question": "When light enters from air to glass, it bends:",
        "options": ["Away from normal", "Towards normal", "Doesn't bend", "Depends on color"],
        "correct": 1
      },
      {
        "question": "Refractive index of vacuum is:",
        "options": ["0", "1", "1.5", "Infinity"],
        "correct": 1
      },
      {
        "question": "Snell's Law is:",
        "options": ["n = sin r/sin i", "n = sin i/sin r", "n = tan i/tan r", "n = cos i/cos r"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand refraction, Snell's Law, and applications of light bending in various optical devices."
  },
  {
    "id": 5,
    "name": "Hooke's Law",
    "category": "Physics",
    "difficulty": "Beginner",
    "gradeLevel": [9, 10, 11],
    "estimatedTime": "40 minutes",
    "safetyLevel": "High",
    "objective": "To verify Hooke's Law and determine the spring constant of a given spring.",
    "theory": {
      "eli10": "Springs stretch when you pull them. The harder you pull, the more they stretch. But if you pull too hard, they won't go back to their original shape. Hooke's Law tells us how springs behave!",
      "advanced": "Hooke's Law states that the extension of a spring is directly proportional to the applied force, provided the elastic limit is not exceeded. F = kx, where F is force, k is spring constant, and x is extension. Beyond elastic limit, permanent deformation occurs.",
      "realWorldApplications": [
        "Vehicle suspension systems",
        "Weighing scales",
        "Spring balances",
        "Mattress springs"
      ]
    },
    "materials": [
      "Helical spring",
      "Retort stand with clamp",
      "Set of slotted weights",
      "Meter scale",
      "Pointer",
      "Weight hanger"
    ],
    "safetyInstructions": [
      "Do not exceed elastic limit of spring",
      "Add weights gently",
      "Ensure stand is stable",
      "Keep feet clear of falling weights"
    ],
    "variables": {
      "independent": ["Applied force (load)"],
      "dependent": ["Extension of spring"],
      "controlled": ["Type of spring", "Temperature"]
    },
    "parameters": {
      "mass": {
        "min": 0,
        "max": 500,
        "step": 50,
        "unit": "grams",
        "default": 100
      },
      "springConstant": {
        "min": 10,
        "max": 100,
        "step": 5,
        "unit": "N/m",
        "default": 50
      }
    },
    "formula": {
      "main": "F = kx",
      "explanation": "Force equals spring constant multiplied by extension",
      "units": {
        "F": "newtons (N)",
        "k": "newtons per meter (N/m)",
        "x": "meters (m)"
      }
    },
    "simulation": {
      "type": "spring",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Extension is directly proportional to load",
      "Load-extension graph is a straight line through origin",
      "Slope gives spring constant",
      "Spring returns to original length when load removed (within elastic limit)"
    ],
    "proTips": {
      "examTips": [
        "Remember: F = kx (Force = spring constant × extension)",
        "Graph must pass through origin for Hooke's Law to hold",
        "Spring constant is stiffness - higher k means stiffer spring"
      ],
      "vivaQuestions": [
        "What is elastic limit?",
        "What happens beyond elastic limit?",
        "Why is spring constant important?"
      ],
      "commonMistakes": [
        "Loading beyond elastic limit",
        "Not waiting for spring to stabilize",
        "Parallax error in reading scale"
      ]
    },
    "quiz": [
      {
        "question": "Hooke's Law is valid:",
        "options": ["Always", "Within elastic limit", "Beyond elastic limit", "Never"],
        "correct": 1
      },
      {
        "question": "Spring constant unit is:",
        "options": ["N", "N/m", "m/N", "Nm"],
        "correct": 1
      },
      {
        "question": "Stiffer spring has:",
        "options": ["Lower k value", "Higher k value", "Same k value", "Zero k value"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand elasticity, Hooke's Law, and the concept of spring constant in mechanical systems."
  },
  {
    "id": 6,
    "name": "Density Measurement",
    "category": "Physics",
    "difficulty": "Beginner",
    "gradeLevel": [6, 7, 8],
    "estimatedTime": "35 minutes",
    "safetyLevel": "High",
    "objective": "To determine the density of a solid object using mass and volume measurements.",
    "theory": {
      "eli10": "Density tells us how tightly packed the stuff inside an object is. A rock is denser than a sponge because the rock has more stuff squeezed into the same space. Density = How heavy something is ÷ How much space it takes up!",
      "advanced": "Density is defined as mass per unit volume (ρ = m/V). It's an intensive property characteristic of a substance. Objects denser than water sink, while those less dense float. Density varies with temperature and pressure for gases.",
      "realWorldApplications": [
        "Determining purity of substances",
        "Ship design and buoyancy",
        "Hot air balloons",
        "Oil-water separation"
      ]
    },
    "materials": [
      "Solid object (metal block)",
      "Balance or digital scale",
      "Measuring cylinder",
      "Water",
      "Thread",
      "Vernier calipers (optional)"
    ],
    "safetyInstructions": [
      "Handle balance carefully",
      "Avoid spilling water",
      "Dry objects before weighing",
      "Read instruments at eye level"
    ],
    "variables": {
      "independent": ["Type of material"],
      "dependent": ["Density"],
      "controlled": ["Temperature", "Pressure"]
    },
    "parameters": {
      "mass": {
        "min": 10,
        "max": 500,
        "step": 10,
        "unit": "grams",
        "default": 100
      },
      "volume": {
        "min": 5,
        "max": 200,
        "step": 5,
        "unit": "cm³",
        "default": 50
      }
    },
    "formula": {
      "main": "\\rho = \\frac{m}{V}",
      "explanation": "Density equals mass divided by volume",
      "units": {
        "ρ": "kg/m³ or g/cm³",
        "m": "kilograms (kg) or grams (g)",
        "V": "cubic meters (m³) or cubic centimeters (cm³)"
      }
    },
    "simulation": {
      "type": "measurement",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Density is characteristic of material",
      "Different materials have different densities",
      "Volume by displacement method is accurate for irregular objects",
      "Density determines whether object floats or sinks"
    ],
    "proTips": {
      "examTips": [
        "Remember: ρ = m/V (Density = Mass/Volume)",
        "1 g/cm³ = 1000 kg/m³",
        "Water has density 1 g/cm³ or 1000 kg/m³"
      ],
      "vivaQuestions": [
        "Why do ships float?",
        "What happens to density when temperature increases?",
        "Which is denser: ice or water?"
      ],
      "commonMistakes": [
        "Not removing air bubbles in displacement method",
        "Using wrong units",
        "Not zeroing the balance"
      ]
    },
    "quiz": [
      {
        "question": "SI unit of density is:",
        "options": ["g/cm³", "kg/m³", "g/m³", "kg/cm³"],
        "correct": 1
      },
      {
        "question": "Object floats if its density is:",
        "options": ["More than water", "Less than water", "Equal to water", "Any density"],
        "correct": 1
      },
      {
        "question": "Density of water is:",
        "options": ["1 kg/m³", "10 kg/m³", "1000 kg/m³", "10000 kg/m³"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will understand the concept of density and learn methods to measure mass and volume accurately."
  },
  {
    "id": 7,
    "name": "Projectile Motion",
    "category": "Physics",
    "difficulty": "Advanced",
    "gradeLevel": [11, 12],
    "estimatedTime": "60 minutes",
    "safetyLevel": "Medium",
    "objective": "To study projectile motion and verify the relationship between launch angle, velocity, and range.",
    "theory": {
      "eli10": "When you throw a ball, it follows a curved path through the air. This curved path is called projectile motion. The ball goes up, then comes down in an arc. How far it goes depends on how hard and at what angle you throw it!",
      "advanced": "Projectile motion is the motion of an object thrown or projected into the air, subject only to gravity. The path is parabolic. Horizontal motion is uniform (constant velocity), while vertical motion is uniformly accelerated. Range is maximum at 45° launch angle (neglecting air resistance).",
      "realWorldApplications": [
        "Sports (basketball, football, golf)",
        "Artillery and missile systems",
        "Water fountains",
        "Firefighting hoses"
      ]
    },
    "materials": [
      "Projectile launcher",
      "Steel balls",
      "Measuring tape",
      "Protractor",
      "Carbon paper",
      "White paper",
      "Meter scale"
    ],
    "safetyInstructions": [
      "Never point launcher at people",
      "Wear safety goggles",
      "Ensure clear landing area",
      "Follow instructor's commands"
    ],
    "variables": {
      "independent": ["Launch angle", "Initial velocity"],
      "dependent": ["Range", "Maximum height", "Time of flight"],
      "controlled": ["Air resistance", "Launch height"]
    },
    "parameters": {
      "angle": {
        "min": 0,
        "max": 90,
        "step": 5,
        "unit": "degrees",
        "default": 45
      },
      "velocity": {
        "min": 5,
        "max": 30,
        "step": 1,
        "unit": "m/s",
        "default": 15
      },
      "height": {
        "min": 0,
        "max": 5,
        "step": 0.5,
        "unit": "meters",
        "default": 0
      }
    },
    "formula": {
      "main": "R = \\frac{v^2 \\sin(2\\theta)}{g}",
      "explanation": "Range equals velocity squared times sine of twice the angle, divided by gravitational acceleration",
      "units": {
        "R": "meters (m)",
        "v": "meters per second (m/s)",
        "θ": "degrees (°)",
        "g": "meters per second squared (m/s²)"
      }
    },
    "simulation": {
      "type": "projectile",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Maximum range at 45° launch angle",
      "Complementary angles give same range (30° and 60°)",
      "Path is parabolic",
      "Horizontal velocity remains constant"
    ],
    "proTips": {
      "examTips": [
        "Maximum range at θ = 45°",
        "Range is same for θ and (90°-θ)",
        "Time of flight: T = 2v sin(θ)/g"
      ],
      "vivaQuestions": [
        "Why is path parabolic?",
        "What is the velocity at highest point?",
        "How does air resistance affect projectile?"
      ],
      "commonMistakes": [
        "Not accounting for launch height",
        "Ignoring air resistance in calculations",
        "Measurement errors in range"
      ]
    },
    "quiz": [
      {
        "question": "Maximum range is obtained at angle:",
        "options": ["30°", "45°", "60°", "90°"],
        "correct": 1
      },
      {
        "question": "At highest point, vertical velocity is:",
        "options": ["Maximum", "Minimum", "Zero", "Equal to initial"],
        "correct": 2
      },
      {
        "question": "Path of projectile is:",
        "options": ["Straight line", "Circle", "Parabola", "Ellipse"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will understand two-dimensional motion, independence of horizontal and vertical components, and applications of kinematics."
  },
  {
    "id": 8,
    "name": "Acid vs Base Reactions",
    "category": "Chemistry",
    "difficulty": "Beginner",
    "gradeLevel": [7, 8, 9],
    "estimatedTime": "45 minutes",
    "safetyLevel": "Low",
    "objective": "To study the reactions of acids and bases with various indicators and substances.",
    "theory": {
      "eli10": "Acids taste sour (like lemon) and bases taste bitter (like soap). When you mix them together, they cancel each other out! Acids turn blue litmus red, and bases turn red litmus blue.",
      "advanced": "Acids are proton (H⁺) donors, while bases are proton acceptors or OH⁻ donors. Neutralization reaction: Acid + Base → Salt + Water. pH scale measures acidity/basicity: pH < 7 acidic, pH = 7 neutral, pH > 7 basic.",
      "realWorldApplications": [
        "Antacids for acidity relief",
        "Soil pH adjustment in agriculture",
        "Cleaning products",
        "Food preservation"
      ]
    },
    "materials": [
      "Dilute HCl",
      "Dilute NaOH",
      "Litmus paper (red and blue)",
      "Phenolphthalein",
      "Test tubes",
      "Droppers",
      "Distilled water"
    ],
    "safetyInstructions": [
      "Wear gloves and goggles",
      "Do not taste any chemicals",
      "Handle acids and bases carefully",
      "Wash hands after experiment"
    ],
    "variables": {
      "independent": ["Type of solution (acid/base)"],
      "dependent": ["Color change", "pH value"],
      "controlled": ["Concentration", "Temperature", "Volume"]
    },
    "parameters": {
      "concentration": {
        "min": 0.1,
        "max": 2.0,
        "step": 0.1,
        "unit": "M",
        "default": 0.5
      },
      "ph": {
        "min": 0,
        "max": 14,
        "step": 0.5,
        "unit": "pH",
        "default": 7
      }
    },
    "formula": {
      "main": "pH = -\\log[H^+]",
      "explanation": "pH equals negative logarithm of hydrogen ion concentration",
      "units": {
        "pH": "dimensionless (0-14)",
        "[H⁺]": "moles per liter (mol/L)"
      }
    },
    "simulation": {
      "type": "reaction",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Acids turn blue litmus red",
      "Bases turn red litmus blue",
      "Phenolphthalein is colorless in acid, pink in base",
      "Neutralization produces salt and water"
    ],
    "proTips": {
      "examTips": [
        "Remember: pH < 7 acidic, pH > 7 basic",
        "Strong acids: HCl, H₂SO₄; Strong bases: NaOH, KOH",
        "Neutralization: H⁺ + OH⁻ → H₂O"
      ],
      "vivaQuestions": [
        "What is universal indicator?",
        "Why is pH important in daily life?",
        "What happens when acid reacts with metal?"
      ],
      "commonMistakes": [
        "Confusing acid and base color changes",
        "Using concentrated acids instead of dilute",
        "Not cleaning test tubes properly"
      ]
    },
    "quiz": [
      {
        "question": "pH of neutral solution is:",
        "options": ["0", "7", "14", "10"],
        "correct": 1
      },
      {
        "question": "Acid turns blue litmus:",
        "options": ["Blue", "Red", "Green", "Yellow"],
        "correct": 1
      },
      {
        "question": "Phenolphthalein in base is:",
        "options": ["Colorless", "Pink", "Blue", "Red"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand properties of acids and bases, pH concept, and importance of neutralization reactions."
  },
  {
    "id": 9,
    "name": "pH Testing",
    "category": "Chemistry",
    "difficulty": "Beginner",
    "gradeLevel": [8, 9, 10],
    "estimatedTime": "40 minutes",
    "safetyLevel": "High",
    "objective": "To determine the pH of various solutions using pH paper and universal indicator.",
    "theory": {
      "eli10": "pH tells us how acidic or basic something is. It's like a scale from 0 to 14. Lemon juice has low pH (sour), water is in the middle, and soap has high pH (slippery). We can test pH with special paper that changes color!",
      "advanced": "pH is a measure of hydrogen ion concentration in solution. pH = -log₁₀[H⁺]. Universal indicator shows different colors across the pH range: red (acidic) → green (neutral) → purple (basic). Accurate pH measurement is crucial in many chemical and biological processes.",
      "realWorldApplications": [
        "Testing swimming pool water",
        "Soil testing for agriculture",
        "Monitoring blood pH in medicine",
        "Quality control in food industry"
      ]
    },
    "materials": [
      "pH paper strips",
      "Universal indicator solution",
      "Test solutions (lemon juice, vinegar, water, soap, etc.)",
      "Test tubes",
      "Droppers",
      "Color chart"
    ],
    "safetyInstructions": [
      "Do not taste test solutions",
      "Wear gloves when handling unknown solutions",
      "Dispose of chemicals properly",
      "Wash hands after experiment"
    ],
    "variables": {
      "independent": ["Type of solution"],
      "dependent": ["pH value", "Color change"],
      "controlled": ["Temperature", "Concentration", "Volume"]
    },
    "parameters": {
      "solutionType": {
        "values": ["Lemon Juice", "Vinegar", "Water", "Baking Soda", "Soap Solution", "HCl", "NaOH"],
        "default": "Water"
      }
    },
    "formula": {
      "main": "pH = -\\log_{10}[H^+]",
      "explanation": "pH is the negative base-10 logarithm of hydrogen ion concentration",
      "units": {
        "pH": "dimensionless (0-14 scale)",
        "[H⁺]": "molarity (mol/L)"
      }
    },
    "simulation": {
      "type": "testing",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Different solutions have different pH values",
      "Acidic solutions: pH 0-6.9",
      "Neutral solutions: pH 7",
      "Basic solutions: pH 7.1-14"
    ],
    "proTips": {
      "examTips": [
        "Each pH unit represents 10× difference in [H⁺]",
        "pH + pOH = 14 at 25°C",
        "Natural indicators: turmeric, red cabbage"
      ],
      "vivaQuestions": [
        "What is the pH of human blood?",
        "Why is rain slightly acidic?",
        "What causes acid rain?"
      ],
      "commonMistakes": [
        "Reading pH paper after too long",
        "Contaminating solutions",
        "Not matching color correctly"
      ]
    },
    "quiz": [
      {
        "question": "Most acidic pH is:",
        "options": ["1", "7", "10", "14"],
        "correct": 0
      },
      {
        "question": "pH of pure water is:",
        "options": ["5", "7", "9", "11"],
        "correct": 1
      },
      {
        "question": "If pH decreases by 1, [H⁺]:",
        "options": ["Decreases 10×", "Increases 10×", "Stays same", "Increases 2×"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand pH scale, learn to measure acidity/basicity, and appreciate importance of pH in everyday life."
  },
  {
    "id": 10,
    "name": "Electrolysis",
    "category": "Chemistry",
    "difficulty": "Intermediate",
    "gradeLevel": [10, 11, 12],
    "estimatedTime": "50 minutes",
    "safetyLevel": "Medium",
    "objective": "To demonstrate electrolysis of water and understand the decomposition of compounds using electricity.",
    "theory": {
      "eli10": "Electrolysis is using electricity to break apart molecules. When we pass electricity through water, it splits into hydrogen and oxygen gas! Hydrogen bubbles form at one electrode and oxygen at the other.",
      "advanced": "Electrolysis is the process of decomposing an electrolyte by passing electric current through it. At cathode (negative): reduction occurs. At anode (positive): oxidation occurs. For water: 2H₂O → 2H₂ + O₂. Volume ratio H₂:O₂ = 2:1.",
      "realWorldApplications": [
        "Extraction of metals (aluminum, sodium)",
        "Electroplating",
        "Production of chlorine and sodium hydroxide",
        "Hydrogen fuel production"
      ]
    },
    "materials": [
      "Hoffman's voltameter or electrolysis apparatus",
      "DC power supply or battery",
      "Dilute sulfuric acid",
      "Two graphite electrodes",
      "Connecting wires",
      "Test tubes",
      "Water"
    ],
    "safetyInstructions": [
      "Use low voltage DC supply",
      "Hydrogen is flammable - keep away from flames",
      "Wear safety goggles",
      "Ensure proper ventilation"
    ],
    "variables": {
      "independent": ["Voltage", "Electrolyte concentration"],
      "dependent": ["Volume of gases produced", "Rate of electrolysis"],
      "controlled": ["Temperature", "Electrode material", "Time"]
    },
    "parameters": {
      "voltage": {
        "min": 3,
        "max": 12,
        "step": 1,
        "unit": "volts",
        "default": 6
      },
      "concentration": {
        "min": 0.1,
        "max": 2.0,
        "step": 0.1,
        "unit": "M",
        "default": 0.5
      },
      "time": {
        "min": 1,
        "max": 30,
        "step": 1,
        "unit": "minutes",
        "default": 10
      }
    },
    "formula": {
      "main": "2H_2O \\rightarrow 2H_2 + O_2",
      "explanation": "Two water molecules decompose to form two hydrogen molecules and one oxygen molecule",
      "units": {
        "Volume ratio": "H₂:O₂ = 2:1"
      }
    },
    "simulation": {
      "type": "electrolysis",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Gas bubbles form at both electrodes",
      "Twice as much hydrogen as oxygen produced",
      "Hydrogen collects at cathode",
      "Oxygen collects at anode"
    ],
    "proTips": {
      "examTips": [
        "Remember: Cathode = Reduction, Anode = Oxidation",
        "H₂:O₂ volume ratio is 2:1",
        "Pure water doesn't conduct - need electrolyte"
      ],
      "vivaQuestions": [
        "Why add acid to water?",
        "How to test for hydrogen gas?",
        "What is electroplating?"
      ],
      "commonMistakes": [
        "Reversing electrode connections",
        "Using AC instead of DC",
        "Not collecting gas properly"
      ]
    },
    "quiz": [
      {
        "question": "Hydrogen is produced at:",
        "options": ["Anode", "Cathode", "Both", "Neither"],
        "correct": 1
      },
      {
        "question": "Volume ratio H₂:O₂ is:",
        "options": ["1:1", "1:2", "2:1", "3:1"],
        "correct": 2
      },
      {
        "question": "Process of coating metal using electricity is:",
        "options": ["Electrolysis", "Electroplating", "Distillation", "Filtration"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand electrochemical decomposition, redox reactions, and industrial applications of electrolysis."
  },
  {
    "id": 11,
    "name": "Crystal Formation",
    "category": "Chemistry",
    "difficulty": "Intermediate",
    "gradeLevel": [9, 10, 11],
    "estimatedTime": "Multiple days",
    "safetyLevel": "High",
    "objective": "To grow crystals from saturated solutions and study crystal structure formation.",
    "theory": {
      "eli10": "Crystals are beautiful shapes that form when certain substances come out of solution slowly. Like how snowflakes form in clouds! If you dissolve sugar or salt in hot water and let it cool slowly, pretty crystals grow.",
      "advanced": "Crystallization is the process of forming solid crystals from a homogeneous solution. It involves nucleation (formation of tiny crystal seeds) followed by crystal growth. Crystal structure depends on molecular arrangement, temperature, and rate of cooling. Slow cooling produces larger, well-formed crystals.",
      "realWorldApplications": [
        "Sugar and salt production",
        "Pharmaceutical manufacturing",
        "Gemstone synthesis",
        "Purification of chemicals"
      ]
    },
    "materials": [
      "Copper sulfate or alum",
      "Distilled water",
      "Beaker",
      "Filter paper",
      "Thread",
      "Glass rod",
      "Heat source"
    ],
    "safetyInstructions": [
      "Do not ingest chemicals",
      "Wear gloves when handling copper sulfate",
      "Use heat source carefully",
      "Wash hands after experiment"
    ],
    "variables": {
      "independent": ["Temperature", "Concentration", "Cooling rate"],
      "dependent": ["Crystal size", "Crystal shape", "Growth rate"],
      "controlled": ["Type of solute", "Volume of solution", "Impurities"]
    },
    "parameters": {
      "temperature": {
        "min": 20,
        "max": 100,
        "step": 5,
        "unit": "°C",
        "default": 80
      },
      "concentration": {
        "min": 10,
        "max": 50,
        "step": 5,
        "unit": "g/100mL",
        "default": 30
      },
      "coolingRate": {
        "values": ["Fast", "Medium", "Slow"],
        "default": "Slow"
      }
    },
    "formula": {
      "main": "\\text{Solubility} = \\frac{\\text{Mass of solute}}{\\text{Volume of solvent}} \\times 100",
      "explanation": "Solubility is the maximum amount of solute that can dissolve in a given amount of solvent at a specific temperature",
      "units": {
        "Solubility": "g/100mL",
        "Mass": "grams (g)",
        "Volume": "milliliters (mL)"
      }
    },
    "simulation": {
      "type": "crystallization",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Crystals form as solution cools",
      "Slower cooling produces larger crystals",
      "Crystals have definite geometric shapes",
      "Supersaturation needed for crystallization"
    ],
    "proTips": {
      "examTips": [
        "Saturated solution: maximum solute dissolved",
        "Supersaturated: more than normal amount dissolved",
        "Seed crystal helps start crystallization"
      ],
      "vivaQuestions": [
        "Why filter the hot solution?",
        "What affects crystal size?",
        "Name some natural crystals"
      ],
      "commonMistakes": [
        "Cooling too quickly",
        "Disturbing growing crystals",
        "Using impure chemicals"
      ]
    },
    "quiz": [
      {
        "question": "Larger crystals form with:",
        "options": ["Fast cooling", "Slow cooling", "No cooling", "Freezing"],
        "correct": 1
      },
      {
        "question": "Solution with maximum dissolved solute is:",
        "options": ["Unsaturated", "Saturated", "Supersaturated", "Dilute"],
        "correct": 1
      },
      {
        "question": "Crystals have:",
        "options": ["Irregular shape", "Definite geometric shape", "Round shape", "No shape"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand saturation, supersaturation, and factors affecting crystal growth and structure."
  },
  {
    "id": 12,
    "name": "Filtration Process",
    "category": "Chemistry",
    "difficulty": "Beginner",
    "gradeLevel": [6, 7, 8],
    "estimatedTime": "30 minutes",
    "safetyLevel": "High",
    "objective": "To separate insoluble solids from liquids using filtration technique.",
    "theory": {
      "eli10": "Filtration is like using a strainer to separate pasta from water. Filter paper has tiny holes that let liquid through but trap solid particles. It's how we make coffee and clean water!",
      "advanced": "Filtration is a mechanical separation process based on particle size differences. The mixture passes through a porous medium (filter paper) that retains solid particles (residue) while allowing liquid (filtrate) to pass. Effectiveness depends on pore size and particle size.",
      "realWorldApplications": [
        "Water purification",
        "Coffee and tea preparation",
        "Air filters in vehicles",
        "Kidney dialysis"
      ]
    },
    "materials": [
      "Filter paper",
      "Funnel",
      "Beaker",
      "Mixture (sand and water)",
      "Glass rod",
      "Stand with ring"
    ],
    "safetyInstructions": [
      "Handle glassware carefully",
      "Do not drink filtered water in lab",
      "Clean spills immediately",
      "Dispose of residue properly"
    ],
    "variables": {
      "independent": ["Type of mixture", "Filter paper pore size"],
      "dependent": ["Clarity of filtrate", "Separation efficiency"],
      "controlled": ["Volume", "Temperature", "Filtration time"]
    },
    "parameters": {
      "particleSize": {
        "min": 0.1,
        "max": 5,
        "step": 0.1,
        "unit": "mm",
        "default": 1
      },
      "volume": {
        "min": 50,
        "max": 500,
        "step": 50,
        "unit": "mL",
        "default": 200
      }
    },
    "formula": {
      "main": "\\text{Efficiency} = \\frac{\\text{Mass of solid recovered}}{\\text{Initial mass of solid}} \\times 100\\%",
      "explanation": "Filtration efficiency is the percentage of solid successfully separated from the mixture",
      "units": {
        "Efficiency": "percentage (%)",
        "Mass": "grams (g)"
      }
    },
    "simulation": {
      "type": "separation",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Solid remains on filter paper as residue",
      "Clear liquid passes through as filtrate",
      "Particle size affects filtration rate",
      "Folded filter paper increases surface area"
    ],
    "proTips": {
      "examTips": [
        "Residue: solid left on filter",
        "Filtrate: liquid that passes through",
        "Fold filter paper to make cone shape"
      ],
      "vivaQuestions": [
        "Can filtration separate salt from water?",
        "What is the advantage of folded filter paper?",
        "Name household examples of filtration"
      ],
      "commonMistakes": [
        "Tearing filter paper",
        "Pouring too fast",
        "Liquid level above filter edge"
      ]
    },
    "quiz": [
      {
        "question": "Solid left on filter is called:",
        "options": ["Filtrate", "Residue", "Solution", "Mixture"],
        "correct": 1
      },
      {
        "question": "Filtration separates based on:",
        "options": ["Density", "Particle size", "Color", "Temperature"],
        "correct": 1
      },
      {
        "question": "Filter paper shape should be:",
        "options": ["Flat", "Cone", "Ball", "Cube"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand separation techniques, practical filtration methods, and applications in daily life."
  },
  {
    "id": 13,
    "name": "Rate of Chemical Reactions",
    "category": "Chemistry",
    "difficulty": "Intermediate",
    "gradeLevel": [10, 11, 12],
    "estimatedTime": "50 minutes",
    "safetyLevel": "Medium",
    "objective": "To investigate factors affecting the rate of chemical reactions.",
    "theory": {
      "eli10": "Some reactions happen super fast (like fireworks!) and some are slow (like rusting). Things that make reactions faster: hotter temperature, smaller pieces, more concentrated stuff, and special helpers called catalysts!",
      "advanced": "Reaction rate depends on collision frequency and energy between reactant molecules. Factors affecting rate: (1) Concentration - more particles = more collisions, (2) Temperature - higher energy = more successful collisions, (3) Surface area - more exposed particles, (4) Catalyst - lowers activation energy.",
      "realWorldApplications": [
        "Food preservation (slowing spoilage)",
        "Industrial catalysis",
        "Combustion engines",
        "Enzyme function in biology"
      ]
    },
    "materials": [
      "Magnesium ribbon",
      "Dilute HCl",
      "Conical flask",
      "Gas syringe or measuring cylinder",
      "Stopwatch",
      "Thermometer",
      "Water bath"
    ],
    "safetyInstructions": [
      "Wear safety goggles",
      "Handle acids carefully",
      "Hydrogen gas is flammable",
      "Use small amounts of magnesium"
    ],
    "variables": {
      "independent": ["Concentration", "Temperature", "Surface area"],
      "dependent": ["Rate of reaction", "Volume of gas produced"],
      "controlled": ["Volume of acid", "Mass of magnesium"]
    },
    "parameters": {
      "concentration": {
        "min": 0.5,
        "max": 3.0,
        "step": 0.5,
        "unit": "M",
        "default": 1.0
      },
      "temperature": {
        "min": 20,
        "max": 80,
        "step": 5,
        "unit": "°C",
        "default": 25
      },
      "surfaceArea": {
        "values": ["Powder", "Small pieces", "Large pieces", "Ribbon"],
        "default": "Ribbon"
      }
    },
    "formula": {
      "main": "\\text{Rate} = \\frac{\\Delta \\text{[Product]}}{\\Delta t} = \\frac{\\Delta V_{gas}}{\\Delta t}",
      "explanation": "Reaction rate is the change in product concentration or volume per unit time",
      "units": {
        "Rate": "mol/L·s or mL/s",
        "Δt": "seconds (s)"
      }
    },
    "simulation": {
      "type": "reaction-rate",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Rate increases with concentration",
      "Rate increases with temperature",
      "Powder reacts faster than ribbon",
      "Gas evolution indicates reaction progress"
    ],
    "proTips": {
      "examTips": [
        "Rate ∝ Concentration (usually)",
        "Rate approximately doubles per 10°C rise",
        "Catalyst speeds up without being consumed"
      ],
      "vivaQuestions": [
        "What is activation energy?",
        "How do catalysts work?",
        "Why refrigerate food?"
      ],
      "commonMistakes": [
        "Not controlling all variables",
        "Inaccurate timing",
        "Gas leaks in apparatus"
      ]
    },
    "quiz": [
      {
        "question": "Increasing temperature usually:",
        "options": ["Slows reaction", "Speeds reaction", "No effect", "Stops reaction"],
        "correct": 1
      },
      {
        "question": "Catalyst:",
        "options": ["Is consumed", "Lowers activation energy", "Changes products", "Slows reaction"],
        "correct": 1
      },
      {
        "question": "Powder reacts faster because:",
        "options": ["It's lighter", "More surface area", "It's hotter", "It's purer"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand kinetics, collision theory, and practical control of reaction rates."
  },
  {
    "id": 14,
    "name": "Separation of Mixtures",
    "category": "Chemistry",
    "difficulty": "Beginner",
    "gradeLevel": [7, 8, 9],
    "estimatedTime": "45 minutes",
    "safetyLevel": "High",
    "objective": "To separate components of a mixture using various techniques based on their properties.",
    "theory": {
      "eli10": "Mixtures are things mixed together that can be separated. Like separating M&Ms by color! We use different tricks: magnets for iron, evaporation for salt water, and special papers for ink colors.",
      "advanced": "Mixtures can be separated based on differences in physical properties: magnetic properties (magnetic separation), solubility (evaporation, crystallization), boiling point (distillation), adsorption (chromatography), density (decantation). Choice of method depends on nature of components.",
      "realWorldApplications": [
        "Petroleum refining",
        "Water desalination",
        "Recycling processes",
        "Forensic analysis"
      ]
    },
    "materials": [
      "Mixture (sand, salt, iron filings)",
      "Magnet",
      "Filter paper",
      "Evaporating dish",
      "Beaker",
      "Heat source",
      "Water"
    ],
    "safetyInstructions": [
      "Use heat source carefully",
      "Don't inhale powders",
      "Wear safety goggles",
      "Handle hot equipment with tongs"
    ],
    "variables": {
      "independent": ["Separation technique used"],
      "dependent": ["Purity of separated components", "Recovery percentage"],
      "controlled": ["Initial mixture composition", "Equipment used"]
    },
    "parameters": {
      "technique": {
        "values": ["Magnetic Separation", "Filtration", "Evaporation", "Distillation", "Chromatography"],
        "default": "Magnetic Separation"
      }
    },
    "formula": {
      "main": "\\text{Recovery \\%} = \\frac{\\text{Mass recovered}}{\\text{Initial mass}} \\times 100\\%",
      "explanation": "Percentage recovery indicates efficiency of separation process",
      "units": {
        "Recovery %": "percentage (%)",
        "Mass": "grams (g)"
      }
    },
    "simulation": {
      "type": "separation",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Iron filings separated by magnet",
      "Sand separated by filtration",
      "Salt recovered by evaporation",
      "Each component retains original properties"
    ],
    "proTips": {
      "examTips": [
        "Magnetic separation: for magnetic materials",
        "Distillation: for liquids with different boiling points",
        "Chromatography: for colored substances"
      ],
      "vivaQuestions": [
        "How would you separate oil and water?",
        "What is fractional distillation?",
        "Why can't mixtures be separated chemically?"
      ],
      "commonMistakes": [
        "Choosing wrong separation method",
        "Incomplete separation",
        "Loss of material during transfer"
      ]
    },
    "quiz": [
      {
        "question": "Best method to separate salt from water:",
        "options": ["Filtration", "Evaporation", "Magnetic", "Decantation"],
        "correct": 1
      },
      {
        "question": "Iron filings from sand separated by:",
        "options": ["Filter", "Magnet", "Heat", "Water"],
        "correct": 1
      },
      {
        "question": "Chromatography separates based on:",
        "options": ["Size", "Color/adsorption", "Density", "Magnetism"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand mixture types, separation techniques, and selection criteria for different methods."
  },
  {
    "id": 15,
    "name": "Microscope Observation",
    "category": "Biology",
    "difficulty": "Beginner",
    "gradeLevel": [6, 7, 8],
    "estimatedTime": "40 minutes",
    "safetyLevel": "High",
    "objective": "To learn proper use of compound microscope and observe prepared slides.",
    "theory": {
      "eli10": "Microscopes make tiny things look big! They use special lenses like super-powered magnifying glasses. You can see cells, bacteria, and other tiny things your eyes can't normally see. It's like having X-ray vision for small stuff!",
      "advanced": "Compound microscopes use multiple lenses to achieve high magnification. Total magnification = objective lens × eyepiece lens. Resolution (ability to distinguish close objects) is limited by wavelength of light. Proper illumination and focusing are crucial for clear observation.",
      "realWorldApplications": [
        "Medical diagnosis",
        "Research laboratories",
        "Quality control",
        "Forensic science"
      ]
    },
    "materials": [
      "Compound microscope",
      "Prepared slides (plant cell, animal cell, etc.)",
      "Lens paper",
      "Slide covers",
      "Dropper",
      "Water"
    ],
    "safetyInstructions": [
      "Handle microscope with both hands",
      "Don't touch lenses with fingers",
      "Start with lowest power objective",
      "Clean lenses only with lens paper"
    ],
    "variables": {
      "independent": ["Magnification level", "Type of specimen"],
      "dependent": ["Image clarity", "Detail visible"],
      "controlled": ["Light intensity", "Focus adjustment"]
    },
    "parameters": {
      "magnification": {
        "values": ["40x", "100x", "400x", "1000x"],
        "default": "100x"
      },
      "lightIntensity": {
        "min": 1,
        "max": 10,
        "step": 1,
        "unit": "level",
        "default": 5
      }
    },
    "formula": {
      "main": "\\text{Total Magnification} = \\text{Objective} \\times \\text{Eyepiece}",
      "explanation": "Total magnification is product of objective lens and eyepiece lens magnifications",
      "units": {
        "Magnification": "times (×)"
      }
    },
    "simulation": {
      "type": "microscope",
      "calculations": false,
      "graph": false
    },
    "observations": [
      "Cells visible at higher magnifications",
      "Plant cells have cell walls",
      "Animal cells lack cell walls",
      "Nucleus visible in most cells"
    ],
    "proTips": {
      "examTips": [
        "Always start with lowest power",
        "Use coarse focus first, then fine",
        "Clean lenses before and after use"
      ],
      "vivaQuestions": [
        "Why start with low power?",
        "What is resolution?",
        "Difference between plant and animal cells?"
      ],
      "commonMistakes": [
        "Starting with high power",
        "Breaking slide with objective",
        "Using too much light"
      ]
    },
    "quiz": [
      {
        "question": "Start observing with:",
        "options": ["Highest power", "Lowest power", "Medium power", "Any power"],
        "correct": 1
      },
      {
        "question": "Plant cells have:",
        "options": ["No cell wall", "Cell wall", "Only membrane", "Shell"],
        "correct": 1
      },
      {
        "question": "Total magnification with 10x eyepiece and 40x objective:",
        "options": ["50x", "40x", "400x", "10x"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will learn microscope operation, proper handling, and basic cell observation techniques."
  },
  {
    "id": 16,
    "name": "Plant Cell Structure",
    "category": "Biology",
    "difficulty": "Beginner",
    "gradeLevel": [7, 8, 9],
    "estimatedTime": "45 minutes",
    "safetyLevel": "High",
    "objective": "To prepare and observe onion peel cells and identify plant cell structures.",
    "theory": {
      "eli10": "Plants are made of tiny building blocks called cells. Plant cells have special parts: a tough outer wall, green chloroplasts for making food, and a big storage sac. They're like little factories making the plant grow!",
      "advanced": "Plant cells are eukaryotic cells with distinctive features: rigid cell wall (cellulose), large central vacuole, chloroplasts for photosynthesis, and plasmodesmata for intercellular communication. Key organelles include nucleus, mitochondria, endoplasmic reticulum, and Golgi apparatus.",
      "realWorldApplications": [
        "Understanding plant growth",
        "Agricultural improvements",
        "Genetic engineering",
        "Drug discovery from plants"
      ]
    },
    "materials": [
      "Onion bulb",
      "Microscope",
      "Slides and coverslips",
      "Iodine solution",
      "Forceps",
      "Needle",
      "Dropper"
    ],
    "safetyInstructions": [
      "Handle glass slides carefully",
      "Don't ingest iodine",
      "Use needle carefully",
      "Wash hands after experiment"
    ],
    "variables": {
      "independent": ["Type of stain used", "Thickness of peel"],
      "dependent": ["Visibility of structures", "Clarity of observation"],
      "controlled": ["Magnification", "Light intensity"]
    },
    "parameters": {
      "stain": {
        "values": ["Iodine", "Methylene Blue", "Safranin", "None"],
        "default": "Iodine"
      },
      "magnification": {
        "values": ["100x", "400x"],
        "default": "100x"
      }
    },
    "formula": {
      "main": "\\text{Cell Size} = \\frac{\\text{Field of View}}{\\text{Number of cells}}",
      "explanation": "Approximate cell size can be calculated by dividing field of view diameter by number of cells across",
      "units": {
        "Cell Size": "micrometers (μm)",
        "Field of View": "micrometers (μm)"
      }
    },
    "simulation": {
      "type": "cell-observation",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Rectangular cells arranged in rows",
      "Cell wall clearly visible",
      "Nucleus stains dark",
      "Large vacuole occupies most space"
    ],
    "proTips": {
      "examTips": [
        "Plant cell features: cell wall, chloroplast, large vacuole",
        "Iodine stains starch and nucleus",
        "Cells appear brick-like in onion peel"
      ],
      "vivaQuestions": [
        "Why no chloroplasts in onion cells?",
        "Function of cell wall?",
        "What is cytoplasmic streaming?"
      ],
      "commonMistakes": [
        "Peel too thick",
        "Air bubbles under coverslip",
        "Too much stain"
      ]
    },
    "quiz": [
      {
        "question": "Plant cell wall is made of:",
        "options": ["Protein", "Cellulose", "Fat", "Sugar"],
        "correct": 1
      },
      {
        "question": "Photosynthesis occurs in:",
        "options": ["Nucleus", "Mitochondria", "Chloroplast", "Vacuole"],
        "correct": 2
      },
      {
        "question": "Large storage sac in plant cell is:",
        "options": ["Nucleus", "Ribosome", "Vacuole", "Lysosome"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will identify plant cell structures, understand their functions, and learn slide preparation techniques."
  },
  {
    "id": 17,
    "name": "Animal Cell Structure",
    "category": "Biology",
    "difficulty": "Beginner",
    "gradeLevel": [7, 8, 9],
    "estimatedTime": "45 minutes",
    "safetyLevel": "Medium",
    "objective": "To observe cheek cells and identify animal cell structures.",
    "theory": {
      "eli10": "Animal cells are the building blocks of your body! They're different from plant cells - no hard wall outside, no green parts for making food. They have a flexible skin (membrane) and a control center (nucleus) inside.",
      "advanced": "Animal cells are eukaryotic cells lacking cell wall and chloroplasts. They have plasma membrane, nucleus containing DNA, mitochondria for energy production, and various organelles. Cells specialize for different functions: muscle cells contract, nerve cells transmit signals, blood cells carry oxygen.",
      "realWorldApplications": [
        "Medical research",
        "Tissue engineering",
        "Cancer research",
        "Stem cell therapy"
      ]
    },
    "materials": [
      "Microscope",
      "Slides and coverslips",
      "Methylene blue stain",
      "Toothpick (sterile)",
      "Dropper",
      "Water"
    ],
    "safetyInstructions": [
      "Use sterile toothpicks only",
      "Dispose of toothpicks properly",
      "Don't share toothpicks",
      "Wash hands before and after"
    ],
    "variables": {
      "independent": ["Stain concentration", "Sample collection method"],
      "dependent": ["Cell visibility", "Structure clarity"],
      "controlled": ["Magnification", "Light intensity"]
    },
    "parameters": {
      "stain": {
        "values": ["Methylene Blue", "Iodine", "Eosin", "None"],
        "default": "Methylene Blue"
      },
      "magnification": {
        "values": ["100x", "400x"],
        "default": "400x"
      }
    },
    "formula": {
      "main": "\\text{Magnification} = \\frac{\\text{Image Size}}{\\text{Actual Size}}",
      "explanation": "Magnification is the ratio of image size to actual object size",
      "units": {
        "Magnification": "times (×)",
        "Size": "micrometers (μm)"
      }
    },
    "simulation": {
      "type": "cell-observation",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Irregular shaped cells",
      "No cell wall present",
      "Nucleus visible as dark spot",
      "Cell membrane is outer boundary"
    ],
    "proTips": {
      "examTips": [
        "Animal cell: no cell wall, no chloroplast",
        "Methylene blue stains nucleus",
        "Cheek cells are squamous epithelial cells"
      ],
      "vivaQuestions": [
        "Why scrape inside of cheek?",
        "Shape of animal cells?",
        "Function of cell membrane?"
      ],
      "commonMistakes": [
        "Scraping too hard",
        "Too many cells overlapping",
        "Air bubbles in preparation"
      ]
    },
    "quiz": [
      {
        "question": "Animal cells lack:",
        "options": ["Nucleus", "Cell wall", "Membrane", "Cytoplasm"],
        "correct": 1
      },
      {
        "question": "Powerhouse of cell is:",
        "options": ["Nucleus", "Ribosome", "Mitochondria", "Golgi"],
        "correct": 2
      },
      {
        "question": "Cheek cells are:",
        "options": ["Plant cells", "Animal cells", "Bacteria", "Fungi"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will compare plant and animal cells, understand cell theory, and learn about cell specialization."
  },
  {
    "id": 18,
    "name": "Photosynthesis",
    "category": "Biology",
    "difficulty": "Intermediate",
    "gradeLevel": [9, 10, 11],
    "estimatedTime": "60 minutes",
    "safetyLevel": "High",
    "objective": "To demonstrate oxygen production during photosynthesis and test for starch in leaves.",
    "theory": {
      "eli10": "Plants make their own food using sunlight! They take air and water, and with sunshine, they make sugar and release oxygen. That's the oxygen we breathe! Leaves are like solar panels for plants.",
      "advanced": "Photosynthesis converts light energy to chemical energy: 6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂. Occurs in chloroplasts containing chlorophyll. Two stages: light-dependent reactions (produce ATP, NADPH, O₂) and Calvin cycle (produces glucose). Essential for life on Earth.",
      "realWorldApplications": [
        "Crop yield optimization",
        "Biofuel production",
        "Carbon sequestration",
        "Artificial photosynthesis research"
      ]
    },
    "materials": [
      "Fresh water plant (Elodea/Hydrilla)",
      "Beaker",
      "Funnel",
      "Test tube",
      "Water",
      "Light source",
      "Alcohol",
      "Iodine solution"
    ],
    "safetyInstructions": [
      "Handle alcohol away from flame",
      "Use water bath for heating",
      "Wear safety goggles",
      "Don't ingest any chemicals"
    ],
    "variables": {
      "independent": ["Light intensity", "CO₂ concentration", "Temperature"],
      "dependent": ["Oxygen production", "Starch presence"],
      "controlled": ["Plant type", "Water quality", "Time"]
    },
    "parameters": {
      "lightIntensity": {
        "min": 0,
        "max": 100,
        "step": 10,
        "unit": "%",
        "default": 100
      },
      "co2Level": {
        "min": 0.03,
        "max": 1.0,
        "step": 0.1,
        "unit": "%",
        "default": 0.04
      },
      "temperature": {
        "min": 10,
        "max": 40,
        "step": 5,
        "unit": "°C",
        "default": 25
      }
    },
    "formula": {
      "main": "6CO_2 + 6H_2O \\xrightarrow{light} C_6H_{12}O_6 + 6O_2",
      "explanation": "Six carbon dioxide molecules and six water molecules produce one glucose and six oxygen molecules",
      "units": {
        "Reactants": "moles",
        "Products": "moles"
      }
    },
    "simulation": {
      "type": "photosynthesis",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Oxygen bubbles released in light",
      "More bubbles with brighter light",
      "Leaf turns blue-black with iodine (starch present)",
      "No starch in destarched leaf kept in dark"
    ],
    "proTips": {
      "examTips": [
        "Chlorophyll traps light energy",
        "Oxygen comes from water splitting",
        "Glucose stored as starch"
      ],
      "vivaQuestions": [
        "Why boil leaf in alcohol?",
        "Source of oxygen in photosynthesis?",
        "What is compensation point?"
      ],
      "commonMistakes": [
        "Not destarching plant before experiment",
        "Insufficient boiling time",
        "Using variegated leaf incorrectly"
      ]
    },
    "quiz": [
      {
        "question": "Photosynthesis produces:",
        "options": ["CO₂", "O₂", "N₂", "H₂"],
        "correct": 1
      },
      {
        "question": "Green pigment in plants is:",
        "options": ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"],
        "correct": 1
      },
      {
        "question": "Iodine tests for:",
        "options": ["Protein", "Fat", "Starch", "Sugar"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will understand photosynthesis process, its importance, and factors affecting the rate."
  },
  {
    "id": 19,
    "name": "Human Respiratory System",
    "category": "Biology",
    "difficulty": "Intermediate",
    "gradeLevel": [9, 10, 11],
    "estimatedTime": "50 minutes",
    "safetyLevel": "High",
    "objective": "To demonstrate breathing mechanism and test for CO₂ in exhaled air.",
    "theory": {
      "eli10": "You breathe in oxygen and breathe out carbon dioxide. Your lungs are like spongy bags that fill with air. Your diaphragm (muscle below lungs) moves down to pull air in, and up to push air out!",
      "advanced": "Respiration involves ventilation (breathing), gas exchange in alveoli, and cellular respiration. Inhalation: diaphragm contracts, rib cage expands, lung volume increases, pressure decreases, air flows in. Exhalation: opposite process. CO₂ detection: limewater turns milky due to CaCO₃ formation.",
      "realWorldApplications": [
        "Understanding respiratory diseases",
        "Ventilator design",
        "Breathing exercises",
        "Altitude adaptation"
      ]
    },
    "materials": [
      "Limewater",
      "Test tubes",
      "Straw or delivery tube",
      "Bell jar model (optional)",
      "Balloons",
      "Rubber sheet"
    ],
    "safetyInstructions": [
      "Use clean straws",
      "Don't share straws",
      "Don't suck limewater",
      "Dispose of materials properly"
    ],
    "variables": {
      "independent": ["Breathing rate", "Exercise level"],
      "dependent": ["CO₂ concentration", "Breathing depth"],
      "controlled": ["Room temperature", "Subject health"]
    },
    "parameters": {
      "breathingRate": {
        "min": 10,
        "max": 40,
        "step": 2,
        "unit": "breaths/min",
        "default": 16
      },
      "activityLevel": {
        "values": ["Resting", "Walking", "Running"],
        "default": "Resting"
      }
    },
    "formula": {
      "main": "Ca(OH)_2 + CO_2 \\rightarrow CaCO_3 \\downarrow + H_2O",
      "explanation": "Calcium hydroxide (limewater) reacts with CO₂ to form insoluble calcium carbonate (milky precipitate)",
      "units": {
        "Precipitate": "calcium carbonate (CaCO₃)"
      }
    },
    "simulation": {
      "type": "respiratory",
      "calculations": true,
      "graph": false
    },
    "observations": [
      "Limewater turns milky with exhaled air",
      "Faster milky appearance after exercise",
      "Diaphragm movement controls breathing",
      "Exhaled air contains more CO₂ than inhaled"
    ],
    "proTips": {
      "examTips": [
        "Inhalation: diaphragm contracts (moves down)",
        "Exhalation: diaphragm relaxes (moves up)",
        "CO₂ turns limewater milky"
      ],
      "vivaQuestions": [
        "Why does athlete breathe faster?",
        "What is tidal volume?",
        "Site of gas exchange?"
      ],
      "commonMistakes": [
        "Blowing too gently",
        "Using old limewater",
        "Confusing inhalation/exhalation mechanics"
      ]
    },
    "quiz": [
      {
        "question": "Gas exchange occurs in:",
        "options": ["Trachea", "Bronchi", "Alveoli", "Larynx"],
        "correct": 2
      },
      {
        "question": "During inhalation, diaphragm:",
        "options": ["Relaxes", "Contracts", "Stays still", "Moves up"],
        "correct": 1
      },
      {
        "question": "Limewater tests for:",
        "options": ["Oxygen", "Nitrogen", "CO₂", "Hydrogen"],
        "correct": 2
      }
    ],
    "learningOutcome": "Students will understand breathing mechanism, gas exchange, and respiratory system function."
  },
  {
    "id": 20,
    "name": "Enzyme Activity",
    "category": "Biology",
    "difficulty": "Advanced",
    "gradeLevel": [11, 12],
    "estimatedTime": "60 minutes",
    "safetyLevel": "Medium",
    "objective": "To investigate factors affecting enzyme activity using catalase or amylase.",
    "theory": {
      "eli10": "Enzymes are tiny helpers in your body that speed up chemical reactions. They're like workers in a factory! But they're picky - they only work well at certain temperatures and acidity levels. Too hot or too acidic, and they stop working!",
      "advanced": "Enzymes are biological catalysts (proteins) that lower activation energy. They have active sites specific to substrates (lock-key model). Factors affecting activity: temperature (optimum ~37°C for human enzymes), pH (each enzyme has optimum), substrate concentration, enzyme concentration. Denaturation occurs at extreme conditions.",
      "realWorldApplications": [
        "Digestive aids",
        "Laundry detergents",
        "Food processing",
        "Medical diagnostics"
      ]
    },
    "materials": [
      "Hydrogen peroxide",
      "Catalase source (potato/liver)",
      "Test tubes",
      "Water baths",
      "Buffers (different pH)",
      "Measuring cylinder",
      "Stopwatch"
    ],
    "safetyInstructions": [
      "Wear gloves and goggles",
      "Handle H₂O₂ carefully",
      "Don't ingest any materials",
      "Dispose of biological material properly"
    ],
    "variables": {
      "independent": ["Temperature", "pH", "Enzyme concentration"],
      "dependent": ["Reaction rate", "Oxygen production"],
      "controlled": ["Substrate concentration", "Volume"]
    },
    "parameters": {
      "temperature": {
        "min": 0,
        "max": 80,
        "step": 5,
        "unit": "°C",
        "default": 37
      },
      "pH": {
        "min": 2,
        "max": 12,
        "step": 1,
        "unit": "pH",
        "default": 7
      },
      "enzymeConcentration": {
        "min": 1,
        "max": 10,
        "step": 1,
        "unit": "%",
        "default": 5
      }
    },
    "formula": {
      "main": "2H_2O_2 \\xrightarrow{catalase} 2H_2O + O_2",
      "explanation": "Catalase enzyme breaks down hydrogen peroxide into water and oxygen gas",
      "units": {
        "Rate": "mL O₂/min"
      }
    },
    "simulation": {
      "type": "enzyme",
      "calculations": true,
      "graph": true
    },
    "observations": [
      "Maximum activity at optimum temperature",
      "Activity decreases at extreme pH",
      "Rate increases with enzyme concentration",
      "Enzyme denatured at high temperature"
    ],
    "proTips": {
      "examTips": [
        "Enzymes are specific to substrates",
        "Optimum temperature for human enzymes: 37°C",
        "Denaturation is irreversible"
      ],
      "vivaQuestions": [
        "Why are enzymes called biocatalysts?",
        "What is active site?",
        "Effect of boiling on enzymes?"
      ],
      "commonMistakes": [
        "Not maintaining constant temperature",
        "Incorrect pH measurement",
        "Timing errors"
      ]
    },
    "quiz": [
      {
        "question": "Enzymes are made of:",
        "options": ["Carbohydrates", "Proteins", "Fats", "Vitamins"],
        "correct": 1
      },
      {
        "question": "Enzyme works best at:",
        "options": ["Any temperature", "Optimum temperature", "Boiling", "Freezing"],
        "correct": 1
      },
      {
        "question": "Active site binds to:",
        "options": ["Product", "Substrate", "Inhibitor", "Cofactor"],
        "correct": 1
      }
    ],
    "learningOutcome": "Students will understand enzyme function, factors affecting activity, and importance in biological systems."
  }
];
