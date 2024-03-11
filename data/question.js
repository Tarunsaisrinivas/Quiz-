const questions = [
  {
    question: 'What is the capital of Australia?',
    options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
    answer: 'Canberra'
  },
  {
    question: 'Who is known as the father of computers?',
    options: ['Charles Babbage', 'Bill Gates', 'Steve Jobs', 'Tim Berners-Lee'],
    answer: 'Charles Babbage'
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Au', 'Ag', 'Fe', 'Cu'],
    answer: 'Au'
  },
  {
    question: 'Which continent is the largest by land area?',
    options: ['Asia', 'Africa', 'North America', 'Antarctica'],
    answer: 'Asia'
  },
  {
    question: 'Which element has the atomic number 6?',
    options: ['Oxygen', 'Carbon', 'Nitrogen', 'Hydrogen'],
    answer: 'Carbon'
  },
  {
    question: 'Who invented the telephone?',
    options: ['Alexander Graham Bell', 'Thomas Edison', 'Nikola Tesla', 'Guglielmo Marconi'],
    answer: 'Alexander Graham Bell'
  },
  {
    question: 'What is the tallest mountain in the world?',
    options: ['Mount Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
    answer: 'Mount Everest'
  },
  {
    question: 'Which language is spoken in Brazil?',
    options: ['Spanish', 'Portuguese', 'French', 'Italian'],
    answer: 'Portuguese'
  },
  {
    question: 'Who discovered penicillin?',
    options: ['Alexander Fleming', 'Louis Pasteur', 'Robert Koch', 'Joseph Lister'],
    answer: 'Alexander Fleming'
  },
  {
    question: 'What is the currency of Japan?',
    options: ['Yuan', 'Won', 'Yen', 'Rupee'],
    answer: 'Yen'
  },
  {
    question: 'Which planet is known as the "Morning Star"?',
    options: ['Venus', 'Mars', 'Jupiter', 'Mercury'],
    answer: 'Venus'
  },
  {
    question: 'Who is the author of "1984"?',
    options: ['George Orwell', 'Ernest Hemingway', 'F. Scott Fitzgerald', 'J.R.R. Tolkien'],
    answer: 'George Orwell'
  },
  {
    question: 'What is the chemical symbol for silver?',
    options: ['Ag', 'Au', 'Si', 'Pt'],
    answer: 'Ag'
  },
  {
    question: 'Which is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 'Pacific Ocean'
  },
  {
    question: 'Who composed the "Moonlight Sonata"?',
    options: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
    answer: 'Ludwig van Beethoven'
  },
  {
    question: 'What is the chemical symbol for sodium?',
    options: ['S', 'Na', 'So', 'N'],
    answer: 'Na'
  },
  {
    question: 'Who is the CEO of Tesla Inc.?',
    options: ['Mark Zuckerberg', 'Tim Cook', 'Elon Musk', 'Jeff Bezos'],
    answer: 'Elon Musk'
  },
  {
    question: 'Which planet is known as the "Evening Star"?',
    options: ['Mercury', 'Venus', 'Mars', 'Jupiter'],
    answer: 'Mercury'
  },
  {
    question: 'What is the largest organ in the human body?',
    options: ['Liver', 'Heart', 'Skin', 'Brain'],
    answer: 'Skin'
  },
  {
    question: 'Who invented the World Wide Web (WWW)?',
    options: ['Bill Gates', 'Steve Jobs', 'Tim Berners-Lee', 'Larry Page'],
    answer: 'Tim Berners-Lee'
  },
  {
    question: 'What is the chemical symbol for iron?',
    options: ['Fe', 'Ir', 'In', 'Au'],
    answer: 'Fe'
  },
  {
    question: 'What is the national animal of India?',
    options: ['Tiger', 'Elephant', 'Lion', 'Leopard'],
    answer: 'Tiger'
  },
  {
    question: 'Who is known as the "Father of the Indian Nation"?',
    options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Subhas Chandra Bose', 'Bhagat Singh'],
    answer: 'Mahatma Gandhi'
  },
  {
    question: 'What is the chemical symbol for oxygen?',
    options: ['O', 'Ox', 'Om', 'Oy'],
    answer: 'O'
  },
  {
    question: 'Who developed the theory of relativity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
    answer: 'Albert Einstein'
  },
  {
    question: 'What is the largest desert in the world?',
    options: ['Sahara Desert', 'Arabian Desert', 'Gobi Desert', 'Antarctica'],
    answer: 'Antarctica'
  },
  {
    question: 'Who painted the Sistine Chapel ceiling?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
    answer: 'Michelangelo'
  },
  {
    question: 'What is the chemical symbol for lead?',
    options: ['Pb', 'Pd', 'Pu', 'Pb'],
    answer: 'Pb'
  },
  {
    question: 'What is the capital of Brazil?',
    options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
    answer: 'Brasília'
  },
  {
    question: 'Who is known as the "Queen of Pop"?',
    options: ['Madonna', 'Beyoncé', 'Rihanna', 'Lady Gaga'],
    answer: 'Madonna'
  },
  {
    question: 'What is the chemical symbol for carbon?',
    options: ['C', 'Co', 'Ca', 'Cr'],
    answer: 'C'
  },
  {
    question: 'What is the highest mountain in Africa?',
    options: ['Mount Kilimanjaro', 'Mount Kenya', 'Mount Elgon', 'Mount Stanley'],
    answer: 'Mount Kilimanjaro'
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the chemical symbol for helium?',
    options: ['He', 'H', 'Ha', 'Ho'],
    answer: 'He'
  },
  {
    question: 'Which is the largest bird in the world?',
    options: ['Ostrich', 'Eagle', 'Albatross', 'Penguin'],
    answer: 'Ostrich'
  },
  {
    question: 'Who discovered the theory of evolution?',
    options: ['Charles Darwin', 'Gregor Mendel', 'Louis Pasteur', 'Alfred Wegener'],
    answer: 'Charles Darwin'
  },
  {
    question: 'What is the chemical symbol for potassium?',
    options: ['K', 'P', 'Ka', 'Ke'],
    answer: 'K'
  },
  {
    question: 'Who wrote "Hamlet"?',
    options: ['William Shakespeare', 'F. Scott Fitzgerald', 'Jane Austen', 'Leo Tolstoy'],
    answer: 'William Shakespeare'
  },
  {
    question: 'What is the chemical symbol for nitrogen?',
    options: ['N', 'Ni', 'Na', 'Ne'],
    answer: 'N'
  },
  {
    question: 'What is the longest river in the world?',
    options: ['Nile', 'Amazon', 'Mississippi', 'Yangtze'],
    answer: 'Nile'
  },
  {
    question: 'Who composed "Fur Elise"?',
    options: ['Wolfgang Amadeus Mozart', 'Ludwig van Beethoven', 'Johann Sebastian Bach', 'Franz Schubert'],
    answer: 'Ludwig van Beethoven'
  },
  {
    question: 'What is the chemical symbol for silver?',
    options: ['Ag', 'Au', 'Si', 'Pt'],
    answer: 'Ag'
  },
  {
    question: 'Who developed the theory of gravity?',
    options: ['Isaac Newton', 'Albert Einstein', 'Galileo Galilei', 'Nikola Tesla'],
    answer: 'Isaac Newton'
  },
  {
    question: 'What is the currency of the United Kingdom?',
    options: ['Euro', 'Pound Sterling', 'Dollar', 'Yen'],
    answer: 'Pound Sterling'
  },
  {
    question: 'Which country is known as the "Land of the Rising Sun"?',
    options: ['China', 'India', 'Japan', 'South Korea'],
    answer: 'Japan'
  },
  {
    question: 'Who was the first woman to win a Nobel Prize?',
    options: ['Marie Curie', 'Rosalind Franklin', 'Ada Lovelace', 'Dorothy Hodgkin'],
    answer: 'Marie Curie'
  },
  {
    question: 'What is the chemical symbol for copper?',
    options: ['Cu', 'Co', 'Ca', 'C'],
    answer: 'Cu'
  },
  {
    question: 'Who wrote "The Great Gatsby"?',
    options: ['F. Scott Fitzgerald', 'Ernest Hemingway', 'Mark Twain', 'J.D. Salinger'],
    answer: 'F. Scott Fitzgerald'
  }
  // Add more questions here...
];

export default questions;
