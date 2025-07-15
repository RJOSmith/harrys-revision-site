import { useState } from 'react';

const subjects = [
  'English Grammar',
  'Foundation Maths',
  'Foundation Combined Science',
  'Foundation Italian',
  'Product Design',
  'Art'
];

const mockQuestions = {
  'English Grammar': [
    {
      topic: 'Verb Tense',
      question: 'Which sentence is grammatically correct?',
      options: [
        'She don’t like apples.',
        'She doesn’t likes apples.',
        'She doesn’t like apples.',
        'She not like apples.'
      ],
      answer: 2,
      clue: 'Think about subject-verb agreement with "doesn’t".',
      explanation:
        '"She doesn’t like apples" is correct because "doesn’t" takes the base form of the verb.'
    },
    {
      topic: 'Parts of Speech',
      question: 'Which word is a noun?',
      options: ['Run', 'Happy', 'Cat', 'Quickly'],
      answer: 2,
      clue: 'A noun is a person, place or thing.',
      explanation: '"Cat" is a noun.'
    },
    // Add more questions here (total 10+)
    {
      topic: 'Sentence Structure',
      question: 'Choose the sentence with correct punctuation.',
      options: [
        'Its raining outside.',
        'It’s raining outside.',
        'Its’ raining outside.',
        'It is raining outside'
      ],
      answer: 1,
      clue: 'Look for the contraction of "it is".',
      explanation:
        '"It’s" is the contraction for "it is", so the second sentence is correct.'
    },
    {
      topic: 'Prepositions',
      question: 'Which word is a preposition?',
      options: ['Before', 'Run', 'Beautiful', 'Quick'],
      answer: 0,
      clue: 'Prepositions show direction, place or time.',
      explanation: '"Before" is a preposition.'
    },
    {
      topic: 'Pronouns',
      question: 'Which sentence uses the pronoun correctly?',
      options: [
        'Her is going to school.',
        'She is going to school.',
        'Him is going to school.',
        'They is going to school.'
      ],
      answer: 1,
      clue: 'Subject pronouns are used before verbs.',
      explanation: '"She" is the correct subject pronoun.'
    },
    {
      topic: 'Adjectives',
      question: 'Which word is an adjective?',
      options: ['Beautiful', 'Run', 'Quickly', 'They'],
      answer: 0,
      clue: 'Adjectives describe nouns.',
      explanation: '"Beautiful" describes a noun, so it’s an adjective.'
    },
    {
      topic: 'Conjunctions',
      question: 'Which word is a conjunction?',
      options: ['And', 'Run', 'Quick', 'But'],
      answer: 3,
      clue: 'Conjunctions connect words or phrases.',
      explanation: '"But" is a conjunction.'
    },
    {
      topic: 'Sentence Type',
      question: 'What type of sentence is: "Close the door!"',
      options: ['Question', 'Statement', 'Command', 'Exclamation'],
      answer: 2,
      clue: 'Think about what the speaker is asking for.',
      explanation: 'It is a command (imperative sentence).'
    },
    {
      topic: 'Articles',
      question: 'Which sentence uses the article correctly?',
      options: [
        'I saw a elephant.',
        'I saw an elephant.',
        'I saw the elephant.',
        'I saw elephant.'
      ],
      answer: 1,
      clue: 'Use "an" before vowel sounds.',
      explanation: '"An" is correct before a vowel sound.'
    },
    {
      topic: 'Sentence Correction',
      question: 'Choose the correct sentence:',
      options: [
        'There is many people here.',
        'There are many people here.',
        'There is much people here.',
        'There are much people here.'
      ],
      answer: 1,
      clue: 'Think about plural subjects.',
      explanation: '"There are" is correct for plural "people".'
    }
  ],

  'Foundation Maths': [
    {
      topic: 'Percentages',
      question: 'What is 15% of 200?',
      options: ['20', '25', '30', '35'],
      answer: 2,
      clue: 'Find 10% first, then 5%.',
      explanation: '10% of 200 is 20, 5% is 10, so 15% is 30.'
    },
    {
      topic: 'Fractions',
      question: 'What is 1/2 + 1/4?',
      options: ['3/4', '1/4', '2/4', '1/2'],
      answer: 0,
      clue: 'Find common denominators.',
      explanation: '1/2 = 2/4; 2/4 + 1/4 = 3/4.'
    },
    {
      topic: 'Multiplication',
      question: 'What is 7 × 8?',
      options: ['54', '56', '58', '48'],
      answer: 1,
      clue: 'Think times tables.',
      explanation: '7 × 8 = 56.'
    },
    {
      topic: 'Division',
      question: 'What is 81 ÷ 9?',
      options: ['8', '9', '7', '10'],
      answer: 1,
      clue: 'Think about times tables backwards.',
      explanation: '81 ÷ 9 = 9.'
    },
    {
      topic: 'Shapes',
      question: 'How many sides does a hexagon have?',
      options: ['5', '6', '7', '8'],
      answer: 1,
      clue: 'Hex means six.',
      explanation: 'A hexagon has 6 sides.'
    },
    {
      topic: 'Angles',
      question: 'What is the sum of angles in a triangle?',
      options: ['180°', '360°', '90°', '270°'],
      answer: 0,
      clue: 'Think basic geometry.',
      explanation: 'Sum of angles in a triangle is 180°.'
    },
    {
      topic: 'Number Sequences',
      question: 'What is the next number in: 2, 4, 6, 8, ...?',
      options: ['9', '10', '11', '12'],
      answer: 1,
      clue: 'Look for the pattern.',
      explanation: 'The pattern increases by 2; next number is 10.'
    },
    {
      topic: 'Place Value',
      question: 'In 345, what digit is in the tens place?',
      options: ['3', '4', '5', '6'],
      answer: 1,
      clue: 'Count digits from right to left.',
      explanation: '4 is in the tens place.'
    },
    {
      topic: 'Rounding',
      question: 'Round 67 to the nearest ten.',
      options: ['60', '65', '70', '75'],
      answer: 2,
      clue: 'Look at the units digit.',
      explanation: '67 rounded to nearest ten is 70.'
    },
    {
      topic: 'Money',
      question: 'If you buy an item costing £3.50 and pay with £5, how much change do you get?',
      options: ['£1.50', '£2.50', '£1.00', '£2.00'],
      answer: 0,
      clue: 'Subtract the cost from the payment.',
      explanation: '£5 - £3.50 = £1.50.'
    }
  ],

  'Foundation Combined Science': [
    {
      topic: 'Photosynthesis',
      question: 'What gas do plants produce during photosynthesis?',
      options: ['Carbon dioxide', 'Oxygen', 'Nitrogen', 'Hydrogen'],
      answer: 1,
      clue: 'It’s the gas we breathe in.',
      explanation: 'Oxygen is produced during photosynthesis.'
    },
    {
      topic: 'Cell Structure',
      question: 'Which part of the cell contains genetic material?',
      options: ['Nucleus', 'Cytoplasm', 'Cell membrane', 'Mitochondria'],
      answer: 0,
      clue: 'It controls cell activities.',
      explanation: 'The nucleus contains DNA.'
    },
    {
      topic: 'Forces',
      question: 'What force pulls objects toward Earth?',
      options: ['Friction', 'Gravity', 'Magnetism', 'Electricity'],
      answer: 1,
      clue: 'It keeps us on the ground.',
      explanation: 'Gravity pulls objects toward Earth.'
    },
    {
      topic: 'States of Matter',
      question: 'What state of matter has a fixed volume but no fixed shape?',
      options: ['Solid', 'Liquid', 'Gas', 'Plasma'],
      answer: 1,
      clue: 'Think water in a glass.',
      explanation: 'Liquids have fixed volume but take the shape of their container.'
    },
    {
      topic: 'Energy',
      question: 'What type of energy is stored in food?',
      options: ['Kinetic', 'Thermal', 'Chemical', 'Nuclear'],
      answer: 2,
      clue: 'Energy released during digestion.',
      explanation: 'Food stores chemical energy.'
    },
    {
      topic: 'Human Body',
      question: 'Which organ pumps blood around the body?',
      options: ['Liver', 'Brain', 'Heart', 'Lungs'],
      answer: 2,
      clue: 'It beats constantly.',
      explanation: 'The heart pumps blood.'
    },
    {
      topic: 'Magnets',
      question: 'Which poles of magnets attract each other?',
      options: ['North-North', 'South-South', 'North-South', 'All poles repel'],
      answer: 2,
      clue: 'Opposites attract.',
      explanation: 'North and South poles attract.'
    },
    {
      topic: 'Electricity',
      question: 'What is the unit of electric current?',
      options: ['Volt', 'Ohm', 'Ampere', 'Watt'],
      answer: 2,
      clue: 'Measured with an ammeter.',
      explanation: 'Electric current is measured in amperes.'
    },
    {
      topic: 'Reproduction',
      question: 'What process produces new plants from seeds?',
      options: ['Germination', 'Pollination', 'Photosynthesis', 'Fertilization'],
      answer: 0,
      clue: 'Seeds sprouting.',
      explanation: 'Germination is seed sprouting.'
    },
    {
      topic: 'Environment',
      question: 'What gas contributes to global warming?',
      options: ['Oxygen', 'Nitrogen', 'Carbon dioxide', 'Hydrogen'],
      answer: 2,
      clue: 'It traps heat in the atmosphere.',
      explanation: 'Carbon dioxide contributes to global warming.'
    }
  ],

  'Foundation Italian': [
    {
      topic: 'Vocabulary',
      question: 'What is the Italian word for "apple"?',
      options: ['Mela', 'Banana', 'Pera', 'Uva'],
      answer: 0,
      clue: 'It starts with "M".',
      explanation: '"Mela" means apple in Italian.'
    },
    {
      topic: 'Greetings',
      question: 'How do you say "Good morning" in Italian?',
      options: ['Buongiorno', 'Buonasera', 'Ciao', 'Arrivederci'],
      answer: 0,
      clue: 'Used in the morning.',
      explanation: '"Buongiorno" means good morning.'
    },
    {
      topic: 'Numbers',
      question: 'What is "five" in Italian?',
      options: ['Cinque', 'Sei', 'Quattro', 'Sette'],
      answer: 0,
      clue: 'It starts with "C".',
      explanation: '"Cinque" means five.'
    },
    {
      topic: 'Colours',
      question: 'What is the Italian word for "red"?',
      options: ['Rosso', 'Blu', 'Verde', 'Giallo'],
      answer: 0,
      clue: 'It starts with "R".',
      explanation: '"Rosso" means red.'
    },
    {
      topic: 'Days of the Week',
      question: 'What day is "Lunedì"?',
      options: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
      answer: 0,
      clue: 'It’s the first day of the work week in Italy.',
      explanation: '"Lunedì" means Monday.'
    },
    {
      topic: 'Family',
      question: 'What is "mother" in Italian?',
      options: ['Madre', 'Padre', 'Sorella', 'Fratello'],
      answer: 0,
      clue: 'Female parent.',
      explanation: '"Madre" means mother.'
    },
    {
      topic: 'Food',
      question: 'What is "bread" in Italian?',
      options: ['Pane', 'Formaggio', 'Latte', 'Acqua'],
      answer: 0,
      clue: 'Common staple food.',
      explanation: '"Pane" means bread.'
    },
    {
      topic: 'Common Phrases',
      question: 'How do you say "Thank you" in Italian?',
      options: ['Grazie', 'Prego', 'Ciao', 'Scusi'],
      answer: 0,
      clue: 'Express gratitude.',
      explanation: '"Grazie" means thank you.'
    },
    {
      topic: 'Animals',
      question: 'What is "dog" in Italian?',
      options: ['Cane', 'Gatto', 'Uccello', 'Pesce'],
      answer: 0,
      clue: 'Common pet.',
      explanation: '"Cane" means dog.'
    },
    {
      topic: 'Weather',
      question: 'What does "Piove" mean?',
      options: ['It is raining', 'It is sunny', 'It is snowing', 'It is windy'],
      answer: 0,
      clue: 'Think about water falling from the sky.',
      explanation: '"Piove" means it is raining.'
    }
  ],

  'Product Design': [
    {
      topic: 'Design Process',
      question: 'What is the first step in the design process?',
      options: [
        'Testing',
        'Research',
        'Prototyping',
        'Production'
      ],
      answer: 1,
      clue: 'Before you create anything, you must learn about the problem.',
      explanation: 'Research is the first step in the design process.'
    },
    {
      topic: 'Materials',
      question: 'Which material is best for making a strong but lightweight product?',
      options: ['Steel', 'Aluminium', 'Glass', 'Wood'],
      answer: 1,
      clue: 'It’s a metal lighter than steel.',
      explanation: 'Aluminium is strong and lightweight.'
    },
    {
      topic: 'Sustainability',
      question: 'Which term means designing products to reduce environmental impact?',
      options: ['Planned Obsolescence', 'Sustainable Design', 'Mass Production', 'Disposable Products'],
      answer: 1,
      clue: 'Think green design.',
      explanation: 'Sustainable Design reduces environmental impact.'
    },
    {
      topic: 'Ergonomics',
      question: 'What does ergonomics study?',
      options: ['Material strength', 'User comfort', 'Product cost', 'Machine speed'],
      answer: 1,
      clue: 'It focuses on how people interact with products.',
      explanation: 'Ergonomics studies user comfort and efficiency.'
    },
    {
      topic: 'Manufacturing',
      question: 'What is the process of making products in large quantities?',
      options: ['Mass Production', 'Craft Production', 'Prototyping', 'Design'],
      answer: 0,
      clue: 'Think assembly lines.',
      explanation: 'Mass Production is large-scale manufacturing.'
    },
    {
      topic: 'Prototyping',
      question: 'What is the purpose of a prototype?',
      options: [
        'Final product',
        'Test design ideas',
        'Market product',
        'Sell product'
      ],
      answer: 1,
      clue: 'It’s an early model to try things out.',
      explanation: 'Prototypes test design concepts before final production.'
    },
    {
      topic: 'Tools',
      question: 'Which tool is used to cut wood precisely?',
      options: ['Hammer', 'Saw', 'Drill', 'Screwdriver'],
      answer: 1,
      clue: 'It has sharp teeth.',
      explanation: 'A saw is used to cut wood.'
    },
    {
      topic: 'CAD',
      question: 'What does CAD stand for?',
      options: [
        'Computer-Aided Design',
        'Computer Automatic Drawing',
        'Creative Artistic Design',
        'Controlled Assembly Device'
      ],
      answer: 0,
      clue: 'It involves computers and drawing.',
      explanation: 'CAD means Computer-Aided Design.'
    },
    {
      topic: 'Finishing',
      question: 'What is a common surface finish on wood products?',
      options: ['Paint', 'Varnish', 'Plastic', 'Metal'],
      answer: 1,
      clue: 'It protects and beautifies wood.',
      explanation: 'Varnish is a common wood finish.'
    },
    {
      topic: 'Safety',
      question: 'Which safety equipment should be worn when using power tools?',
      options: ['Gloves', 'Safety goggles', 'Sandals', 'Hat'],
      answer: 1,
      clue: 'Protects your eyes.',
      explanation: 'Safety goggles protect eyes.'
    }
  ],

  'Art': [
    {
      topic: 'Art Styles',
      question: 'Which art style is characterized by geometric shapes and fragmented objects?',
      options: ['Cubism', 'Impressionism', 'Surrealism', 'Realism'],
      answer: 0,
      clue: 'Think Picasso’s famous works.',
      explanation: 'Cubism is known for geometric shapes and fragmentation.'
    },
    {
      topic: 'Famous Artists',
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso',
