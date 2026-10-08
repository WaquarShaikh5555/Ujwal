/* ============================================================
   NoteVerse — content data
   Subjects, flashcard decks & quick notes
   ============================================================ */

const SUBJECTS = [
  {
    id: 'maths',
    name: 'Mathematics',
    emoji: '📐',
    color: '#7c5cff',
    tagline: 'Numbers, patterns & proofs',
    cards: [
      { q: 'What is the quadratic formula?', a: 'x = (−b ± √(b² − 4ac)) / 2a — it solves any equation of the form ax² + bx + c = 0.' },
      { q: 'What is the value of π (pi) to 4 decimal places?', a: '3.1416 — the ratio of a circle\'s circumference to its diameter.' },
      { q: 'What does "SOH CAH TOA" stand for?', a: 'Sin = Opposite/Hypotenuse, Cos = Adjacent/Hypotenuse, Tan = Opposite/Adjacent.' },
      { q: 'What is the derivative of x²?', a: '2x — using the power rule: d/dx(xⁿ) = n·xⁿ⁻¹.' },
      { q: 'What is the sum of angles in a triangle?', a: '180° (always).' },
      { q: 'What is a prime number?', a: 'A natural number greater than 1 with exactly two factors: 1 and itself (e.g. 2, 3, 5, 7, 11).' },
      { q: 'What is the Pythagorean theorem?', a: 'a² + b² = c² — in a right-angled triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.' },
      { q: 'What is the factorial of 5 (5!)?', a: '120 — because 5! = 5 × 4 × 3 × 2 × 1.' },
      { q: 'What is the gradient of a straight line y = mx + c?', a: 'm — the coefficient of x. It tells you the slope: rise over run.' },
      { q: 'What is the area of a circle?', a: 'πr² — pi times the radius squared.' },
    ],
    notes: [
      {
        title: 'Quadratics & Factorising',
        points: [
          'Every quadratic can be written as <strong>ax² + bx + c = 0</strong>.',
          'Factorise by finding two numbers that <strong>multiply to ac</strong> and <strong>add to b</strong>.',
          'Use the <strong>quadratic formula</strong> when factorising is tricky.',
          'The <strong>discriminant (b² − 4ac)</strong> tells you how many roots exist: positive = 2, zero = 1, negative = none.',
        ],
      },
      {
        title: 'Trigonometry Essentials',
        points: [
          'Memorise <strong>SOH CAH TOA</strong> — it unlocks every right-triangle problem.',
          'sin²θ + cos²θ = <strong>1</strong> — the most useful identity in exams.',
          'Use the <strong>sine rule</strong> when you know two angles and a side.',
          'Use the <strong>cosine rule</strong> when you know two sides and the included angle.',
        ],
      },
      {
        title: 'Differentiation Rules',
        points: [
          '<strong>Power rule:</strong> d/dx(xⁿ) = n·xⁿ⁻¹.',
          'The derivative of a constant is <strong>zero</strong>.',
          'Multiply by the power, then <strong>reduce the power by one</strong>.',
          'The derivative gives the <strong>gradient of the curve</strong> at any point.',
        ],
      },
      {
        title: 'Circles & Geometry',
        points: [
          'Circumference = <strong>2πr</strong>, Area = <strong>πr²</strong>.',
          'The angle at the centre is <strong>twice</strong> the angle at the circumference (same arc).',
          'Opposite angles in a cyclic quadrilateral add to <strong>180°</strong>.',
          'A tangent meets a radius at <strong>90°</strong>.',
        ],
      },
    ],
  },
  {
    id: 'physics',
    name: 'Physics',
    emoji: '⚛️',
    color: '#22d3ee',
    tagline: 'How the universe works',
    cards: [
      { q: 'What is Newton\'s Second Law?', a: 'F = ma — Force equals mass times acceleration. More mass or more acceleration means more force.' },
      { q: 'What is the unit of force?', a: 'The newton (N). 1 N = 1 kg·m/s².' },
      { q: 'What is the speed of light in a vacuum?', a: 'Approximately 3.0 × 10⁸ m/s (299,792,458 m/s exactly).' },
      { q: 'What is Ohm\'s Law?', a: 'V = IR — Voltage equals current times resistance.' },
      { q: 'What is kinetic energy?', a: 'KE = ½mv² — half the mass times velocity squared.' },
      { q: 'What is the difference between mass and weight?', a: 'Mass (kg) is the amount of matter; weight (N) is the gravitational force on it: W = mg.' },
      { q: 'What is acceleration due to gravity on Earth?', a: 'About 9.8 m/s² (often rounded to 10 m/s² in exams).' },
      { q: 'What is the principle of conservation of energy?', a: 'Energy cannot be created or destroyed — only transferred or transformed.' },
      { q: 'What is wavelength?', a: 'The distance between two consecutive crests (or troughs) of a wave, usually in metres.' },
      { q: 'What is the relationship between wave speed, frequency and wavelength?', a: 'v = fλ — wave speed equals frequency times wavelength.' },
    ],
    notes: [
      {
        title: 'Forces & Motion',
        points: [
          '<strong>F = ma</strong> — force causes acceleration in the direction of the force.',
          'Speed = distance ÷ time; <strong>velocity</strong> includes direction.',
          'On a distance–time graph, the <strong>slope = speed</strong>.',
          '<strong>Friction</strong> always opposes motion and produces heat.',
        ],
      },
      {
        title: 'Electricity',
        points: [
          '<strong>V = IR</strong> — voltage, current and resistance are linked.',
          'In <strong>series</strong>, current is the same everywhere; in <strong>parallel</strong>, voltage is the same across branches.',
          'Power = <strong>VI</strong> (or I²R / V²/R).',
          'Mains electricity is <strong>AC</strong>; batteries provide <strong>DC</strong>.',
        ],
      },
      {
        title: 'Waves',
        points: [
          '<strong>v = fλ</strong> — wave speed = frequency × wavelength.',
          '<strong>Transverse</strong> waves (light) oscillate perpendicular to travel; <strong>longitudinal</strong> (sound) oscillate along it.',
          'The <strong>electromagnetic spectrum</strong>: radio → microwave → infrared → visible → UV → X-ray → gamma.',
          'Higher frequency = <strong>more energy</strong> and shorter wavelength.',
        ],
      },
    ],
  },
  {
    id: 'chemistry',
    name: 'Chemistry',
    emoji: '🧪',
    color: '#34d399',
    tagline: 'The science of stuff',
    cards: [
      { q: 'What is the chemical symbol for gold?', a: 'Au (from the Latin "aurum").' },
      { q: 'What is the pH of a neutral solution?', a: '7 — below 7 is acidic, above 7 is alkaline (basic).' },
      { q: 'What is an atom made of?', a: 'A nucleus of protons and neutrons, surrounded by electrons in shells.' },
      { q: 'What is the most abundant gas in Earth\'s atmosphere?', a: 'Nitrogen (N₂) — about 78% of the air.' },
      { q: 'What is a covalent bond?', a: 'A bond formed when two non-metal atoms share a pair of electrons.' },
      { q: 'What is the relative charge of a proton, neutron and electron?', a: 'Proton: +1, Neutron: 0, Electron: −1.' },
      { q: 'What does "H₂O" tell you about water?', a: 'Each molecule has 2 hydrogen atoms and 1 oxygen atom.' },
      { q: 'What is an ionic bond?', a: 'The electrostatic attraction between oppositely charged ions (a metal + a non-metal).' },
      { q: 'What is the conservation of mass in a chemical reaction?', a: 'The total mass of reactants equals the total mass of products — atoms are only rearranged.' },
      { q: 'What is a catalyst?', a: 'A substance that speeds up a reaction without being used up itself.' },
    ],
    notes: [
      {
        title: 'Atomic Structure',
        points: [
          'Protons and neutrons live in the <strong>nucleus</strong>; electrons orbit in <strong>shells</strong>.',
          '<strong>Atomic number</strong> = number of protons; <strong>mass number</strong> = protons + neutrons.',
          'Electron configuration of the first 20 elements follows the <strong>2, 8, 8</strong> shell pattern.',
          'Isotopes are atoms of the same element with <strong>different numbers of neutrons</strong>.',
        ],
      },
      {
        title: 'The Periodic Table',
        points: [
          'Elements are arranged by <strong>increasing atomic number</strong>.',
          '<strong>Groups</strong> (columns) share the same number of outer electrons.',
          '<strong>Periods</strong> (rows) share the same number of electron shells.',
          'Group 1 = alkali metals, Group 7 = halogens, Group 0/18 = <strong>noble gases</strong> (unreactive).',
        ],
      },
      {
        title: 'Acids, Bases & Salts',
        points: [
          '<strong>Acids</strong> turn blue litmus red; <strong>bases</strong> turn red litmus blue.',
          'A <strong>neutralisation</strong> reaction: acid + base → salt + water.',
          'The pH scale runs from <strong>0 to 14</strong>.',
          'A <strong>strong acid</strong> fully ionises in water (e.g. HCl); a weak acid only partially (e.g. ethanoic acid).',
        ],
      },
    ],
  },
  {
    id: 'biology',
    name: 'Biology',
    emoji: '🧬',
    color: '#a3e635',
    tagline: 'The study of life',
    cards: [
      { q: 'What is the powerhouse of the cell?', a: 'The mitochondrion — it produces ATP through respiration.' },
      { q: 'What molecule carries genetic information?', a: 'DNA (deoxyribonucleic acid), shaped as a double helix.' },
      { q: 'What is photosynthesis?', a: 'The process where plants use light, water and CO₂ to make glucose and oxygen: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.' },
      { q: 'What are the four bases in DNA?', a: 'Adenine (A), Thymine (T), Cytosine (C) and Guanine (G). A pairs with T, C pairs with G.' },
      { q: 'What is the function of red blood cells?', a: 'To transport oxygen around the body using haemoglobin.' },
      { q: 'What is osmosis?', a: 'The movement of water from a region of high water concentration to low, across a partially permeable membrane.' },
      { q: 'What is the role of the ribosome?', a: 'Protein synthesis — it assembles amino acids into proteins.' },
      { q: 'What is an enzyme?', a: 'A biological catalyst (protein) that speeds up reactions without being used up.' },
      { q: 'What is the equation for aerobic respiration?', a: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP).' },
      { q: 'What is the function of the xylem in plants?', a: 'To transport water and minerals from the roots up to the leaves.' },
    ],
    notes: [
      {
        title: 'Cell Biology',
        points: [
          '<strong>Cell membrane</strong> controls what enters and leaves the cell.',
          '<strong>Cytoplasm</strong> is where most chemical reactions happen.',
          '<strong>Nucleus</strong> holds the genetic material.',
          'Plant cells also have a <strong>cell wall</strong>, a large <strong>vacuole</strong> and <strong>chloroplasts</strong>.',
        ],
      },
      {
        title: 'Photosynthesis & Respiration',
        points: [
          'Photosynthesis happens in the <strong>chloroplasts</strong> (chlorophyll absorbs light).',
          'Rate is limited by <strong>light, CO₂ concentration and temperature</strong>.',
          '<strong>Aerobic</strong> respiration uses oxygen; <strong>anaerobic</strong> doesn\'t (and produces lactic acid in muscles).',
          'Plants respire <strong>all the time</strong> — but only photosynthesise in light.',
        ],
      },
      {
        title: 'Human Body Systems',
        points: [
          'The <strong>circulatory system</strong> transports blood via the heart and vessels.',
          'The <strong>digestive system</strong> breaks food down with enzymes.',
          'The <strong>respiratory system</strong> exchanges gases in the alveoli.',
          'The <strong>nervous system</strong> sends electrical signals; the <strong>hormonal system</strong> sends chemical ones.',
        ],
      },
    ],
  },
  {
    id: 'english',
    name: 'English',
    emoji: '📖',
    color: '#f472b6',
    tagline: 'Language & literature',
    cards: [
      { q: 'What is a metaphor?', a: 'Describing something as if it were something else (e.g. "time is a thief") — without "like" or "as".' },
      { q: 'What is the difference between a simile and a metaphor?', a: 'A simile compares using "like" or "as"; a metaphor states the comparison directly.' },
      { q: 'What is personification?', a: 'Giving human qualities to non-human things (e.g. "the wind whispered").' },
      { q: 'What is alliteration?', a: 'Repetition of the same starting sound in nearby words (e.g. "silent sea").' },
      { q: 'What is an oxymoron?', a: 'Two contradictory words used together (e.g. "deafening silence", "bittersweet").' },
      { q: 'What is onomatopoeia?', a: 'Words that imitate sounds (e.g. "buzz", "crash", "whisper").' },
      { q: 'What is a noun?', a: 'A naming word — a person, place, thing or idea.' },
      { q: 'What is a verb?', a: 'A doing or being word — an action or a state.' },
      { q: 'What is an adjective?', a: 'A word that describes a noun (e.g. "brilliant", "ancient").' },
      { q: 'What is a thesis statement?', a: 'A single sentence that states the main argument or point of an essay.' },
    ],
    notes: [
      {
        title: 'Literary Devices',
        points: [
          '<strong>Imagery</strong> — language that appeals to the senses.',
          '<strong>Symbolism</strong> — an object that represents a deeper idea.',
          '<strong>Foreshadowing</strong> — hints about what will happen later.',
          '<strong>Irony</strong> — when the opposite of what is expected happens.',
        ],
      },
      {
        title: 'Grammar Essentials',
        points: [
          'A <strong>sentence</strong> needs a subject and a verb.',
          'Use a <strong>comma</strong> before "but", "and", "or" when joining two full sentences.',
          '<strong>It\'s</strong> = it is; <strong>its</strong> = belonging to it.',
          'Active voice is usually <strong>stronger</strong> than passive voice in essays.',
        ],
      },
      {
        title: 'Essay Writing',
        points: [
          'Structure: <strong>introduction → main paragraphs (PEEL) → conclusion</strong>.',
          '<strong>PEEL</strong>: Point, Evidence, Explanation, Link.',
          'Always <strong>link back to the question</strong> in every paragraph.',
          'Proofread for <strong>spelling, punctuation and grammar</strong> (SPaG).',
        ],
      },
    ],
  },
  {
    id: 'history',
    name: 'History',
    emoji: '🏛️',
    color: '#fbbf24',
    tagline: 'Lessons from the past',
    cards: [
      { q: 'When did World War II end?', a: '1945 (Germany surrendered in May; Japan in September after the atomic bombs).' },
      { q: 'Who was the first President of the United States?', a: 'George Washington (1789–1797).' },
      { q: 'When did the Berlin Wall fall?', a: '9 November 1989 — a symbol of the Cold War\'s end.' },
      { q: 'Who discovered America in 1492?', a: 'Christopher Columbus, sailing under the Spanish flag.' },
      { q: 'What was the Industrial Revolution?', a: 'A period (c. 1760–1840) when economies shifted from farming to machine manufacturing.' },
      { q: 'Who was the first man to walk on the Moon?', a: 'Neil Armstrong, in 1969, aboard Apollo 11.' },
      { q: 'When did the Titanic sink?', a: '15 April 1912, after hitting an iceberg on its maiden voyage.' },
      { q: 'What was the Magna Carta?', a: 'A 1215 charter that limited the power of the English king — a foundation of modern law.' },
      { q: 'Which empire built the Colosseum?', a: 'The Roman Empire (completed in 80 AD).' },
      { q: 'When did the French Revolution begin?', a: '1789, with the storming of the Bastille on 14 July.' },
    ],
    notes: [
      {
        title: 'World War II (1939–1945)',
        points: [
          'Began with Germany\'s invasion of <strong>Poland in 1939</strong>.',
          'Key turning points: <strong>Stalingrad</strong> and <strong>D-Day (1944)</strong>.',
          'Ended with the <strong>atomic bombs on Hiroshima & Nagasaki</strong>.',
          'The <strong>Holocaust</strong> murdered six million Jews — remember the victims.',
        ],
      },
      {
        title: 'The Cold War',
        points: [
          'A decades-long tension between the <strong>USA (capitalism)</strong> and the <strong>USSR (communism)</strong>.',
          'The <strong>Space Race</strong> and the <strong>arms race</strong> defined the era.',
          'Ended with the <strong>fall of the Berlin Wall (1989)</strong> and the USSR\'s collapse (1991).',
        ],
      },
      {
        title: 'Study Like a Historian',
        points: [
          'Always ask: <strong>who wrote this, when, and why?</strong>',
          'Distinguish <strong>primary</strong> sources (from the time) from <strong>secondary</strong> sources.',
          'Look for <strong>cause, consequence and significance</strong>.',
          'Timelines and <strong>cause-and-effect chains</strong> beat rote memorisation.',
        ],
      },
    ],
  },
  {
    id: 'geography',
    name: 'Geography',
    emoji: '🌍',
    color: '#38bdf8',
    tagline: 'Explore planet Earth',
    cards: [
      { q: 'What is the largest ocean on Earth?', a: 'The Pacific Ocean — covering about 30% of Earth\'s surface.' },
      { q: 'What is the longest river in the world?', a: 'The Nile (about 6,650 km), closely followed by the Amazon.' },
      { q: 'What is the capital of Japan?', a: 'Tokyo.' },
      { q: 'What is the greenhouse effect?', a: 'Gases like CO₂ trap heat in the atmosphere, warming the planet.' },
      { q: 'What is the difference between weather and climate?', a: 'Weather is short-term conditions; climate is the long-term pattern (usually 30+ years).' },
      { q: 'What are tectonic plates?', a: 'Massive slabs of Earth\'s crust that slowly move, causing earthquakes, volcanoes and mountains.' },
      { q: 'What is urbanisation?', a: 'The growth of towns and cities as people move from rural areas.' },
      { q: 'What is the equator?', a: 'The imaginary line at 0° latitude dividing Earth into Northern and Southern hemispheres.' },
      { q: 'What is a biome?', a: 'A large natural region defined by its climate, plants and animals (e.g. rainforest, desert, tundra).' },
      { q: 'What is GDP?', a: 'Gross Domestic Product — the total value of goods and services a country produces in a year.' },
    ],
    notes: [
      {
        title: 'Plate Tectonics',
        points: [
          'Plates meet at <strong>constructive</strong>, <strong>destructive</strong> and <strong>conservative</strong> boundaries.',
          'Earthquakes and volcanoes cluster along <strong>plate boundaries</strong> (e.g. the Pacific "Ring of Fire").',
          'At constructive boundaries, plates move <strong>apart</strong> and magma rises.',
        ],
      },
      {
        title: 'Climate & Weather',
        points: [
          'The <strong>water cycle</strong>: evaporation → condensation → precipitation → collection.',
          'Climate graphs show <strong>temperature and rainfall</strong> across the year.',
          'Global warming is driven largely by <strong>burning fossil fuels</strong>.',
        ],
      },
      {
        title: 'Development & Population',
        points: [
          'The <strong>Demographic Transition Model</strong> shows how birth/death rates change as countries develop.',
          '<strong>Push factors</strong> drive people away; <strong>pull factors</strong> attract them.',
          'Sustainable development balances <strong>economy, society and environment</strong>.',
        ],
      },
    ],
  },
  {
    id: 'computing',
    name: 'Computer Science',
    emoji: '💻',
    color: '#c084fc',
    tagline: 'Logic, code & systems',
    cards: [
      { q: 'What does "CPU" stand for?', a: 'Central Processing Unit — the "brain" of the computer that executes instructions.' },
      { q: 'What is binary?', a: 'Base-2 number system using only 0s and 1s — the language computers speak.' },
      { q: 'What is an algorithm?', a: 'A step-by-step set of instructions for solving a problem.' },
      { q: 'What does "HTTP" stand for?', a: 'HyperText Transfer Protocol — the foundation of data communication on the web.' },
      { q: 'What is the difference between RAM and ROM?', a: 'RAM is volatile (lost when power is off) and holds running programs; ROM is permanent and holds boot-up instructions.' },
      { q: 'What is a loop in programming?', a: 'A construct that repeats a block of code until a condition is met (e.g. for, while).' },
      { q: 'What is a variable?', a: 'A named storage location in memory that holds a value which can change.' },
      { q: 'What is the purpose of a firewall?', a: 'To monitor and control incoming and outgoing network traffic based on security rules.' },
      { q: 'What is Big O notation?', a: 'A way to describe how an algorithm\'s time or space grows as input size grows (e.g. O(n), O(log n)).' },
      { q: 'What is the difference between a compiler and an interpreter?', a: 'A compiler translates the whole program before running; an interpreter translates and runs it line by line.' },
    ],
    notes: [
      {
        title: 'Systems Architecture',
        points: [
          'The <strong>CPU</strong> fetches, decodes and executes instructions (the Fetch–Decode–Execute cycle).',
          '<strong>RAM</strong> is fast, volatile memory; <strong>cache</strong> is even faster but smaller.',
          'Secondary storage (SSD/HDD) is <strong>non-volatile</strong> and permanent.',
        ],
      },
      {
        title: 'Programming Concepts',
        points: [
          'Use <strong>sequence, selection (if/else) and iteration (loops)</strong> to structure code.',
          '<strong>Functions</strong> let you reuse code — DRY: Don\'t Repeat Yourself.',
          'A <strong>boolean</strong> holds true/false; used in conditions and logic.',
          'Arrays/lists store <strong>multiple values under one name</strong>.',
        ],
      },
      {
        title: 'Networks & the Internet',
        points: [
          'The internet is a <strong>network of networks</strong> using the TCP/IP protocol suite.',
          '<strong>IP addresses</strong> identify devices; <strong>DNS</strong> translates domain names to IPs.',
          'The <strong>World Wide Web</strong> runs on top of the internet using HTTP/HTTPS.',
        ],
      },
    ],
  },
];

/* Convenience: flatten stats for hero counters */
const TOTAL_CARDS = SUBJECTS.reduce((sum, s) => sum + s.cards.length, 0);
const TOTAL_NOTES = SUBJECTS.reduce((sum, s) => sum + s.notes.length, 0);
