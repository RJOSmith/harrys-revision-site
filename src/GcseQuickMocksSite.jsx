import { useState } from 'react';
import { Tabs, Tab } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectItem } from '@/components/ui/select';

const subjects = [
  'English Grammar',
  'Foundation Maths',
  'Foundation Combined Science',
  'Foundation Italian',
  'Product Design and Art'
];

const mockQuestions = {
  'English Grammar': [
    {
      topic: 'Verb Tense',
      question: 'Which sentence is grammatically correct?',
      options: ['She don’t like apples.', 'She doesn’t likes apples.', 'She doesn’t like apples.', 'She not like apples.'],
      answer: 2,
      clue: 'Think about subject-verb agreement with "doesn’t".',
      explanation: '"She doesn’t like apples" is correct because "doesn’t" takes the base form of the verb.'
    },
    {
      topic: 'Sentence Structure',
      question: 'Choose the sentence with correct punctuation.',
      options: ['Its raining outside.', 'It’s raining outside.', 'Its’ raining outside.', 'It is raining outside'],
      answer: 1,
      clue: 'Look for the contraction of "it is".',
      explanation: '"It’s" is the contraction for "it is", so the second sentence is correct.'
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
    }
  ],
  'Product Design and Art': [
    {
      topic: 'Design Process',
      question: 'What is the primary purpose of a mood board?',
      options: ['To sketch final designs', 'To gather visual inspiration', 'To record measurements', 'To evaluate a prototype'],
      answer: 1,
      clue: 'Think about what inspires creativity.',
      explanation: 'Mood boards are used to gather visual inspiration and set a theme for design.'
    },
    {
      topic: 'Famous Artists',
      question: 'Who painted the Mona Lisa?',
      options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Michelangelo'],
      answer: 1,
      clue: 'He was a Renaissance artist.',
      explanation: 'Leonardo da Vinci painted the Mona Lisa.'
    }
  ]
};

export default function GCSEMockSite() {
  const [subject, setSubject] = useState(subjects[0]);
  const [numQuestions, setNumQuestions] = useState(5);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showClue, setShowClue] = useState(false);
  const [scoreHistory, setScoreHistory] = useState([]);

  const allQuestions = mockQuestions[subject] || [];
  const questions = allQuestions.slice(0, numQuestions);

  const handleOptionSelect = (qIndex, optionIndex) => {
    setSelectedOptions({ ...selectedOptions, [qIndex]: optionIndex });
  };

  const submitAnswers = () => {
    setShowResults(true);
    const score = questions.filter((q, i) => selectedOptions[i] === q.answer).length;
    const topicStats = {};
    questions.forEach((q, i) => {
      const correct = selectedOptions[i] === q.answer;
      if (!topicStats[q.topic]) topicStats[q.topic] = { correct: 0, total: 0 };
      topicStats[q.topic].total++;
      if (correct) topicStats[q.topic].correct++;
    });
    setScoreHistory([...scoreHistory, { subject, score, outOf: questions.length, topicStats }]);
  };

  const resetQuiz = () => {
    setSelectedOptions({});
    setShowResults(false);
    setShowClue(false);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Harry's Revision Site</h1>
      <Tabs value={subject} onValueChange={(value) => { setSubject(value); resetQuiz(); }}>
        {subjects.map((subj) => (
          <Tab key={subj} value={subj} label={subj} />
        ))}
      </Tabs>

      <div className="mt-4">
        <label className="block mb-2">Select number of questions:</label>
        <Select value={numQuestions} onValueChange={(val) => setNumQuestions(parseInt(val))}>
          {[5, 10, 15, 20].map((n) => (
            <SelectItem key={n} value={n}>{n} Questions</SelectItem>
          ))}
        </Select>
      </div>

      <div className="mt-4 space-y-6">
        {questions.map((q, index) => (
          <Card key={index}>
            <CardContent>
              <p className="font-semibold">Q{index + 1}: {q.question}</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {q.options.map((option, i) => (
                  <Button
                    key={i}
                    variant={selectedOptions[index] === i ? 'default' : 'outline'}
                    onClick={() => handleOptionSelect(index, i)}
                  >
                    {option}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2 mt-2">
                <Button onClick={() => setShowClue(index)} variant="ghost">
                  Clue
                </Button>
              </div>
              {showResults && (
                <div className="mt-2 text-sm">
                  {selectedOptions[index] === q.answer ? (
                    <p className="text-green-600">✅ Correct! {q.explanation}</p>
                  ) : (
                    <p className="text-red-600">❌ Incorrect. {q.explanation}</p>
                  )}
                </div>
              )}
              {showClue === index && !showResults && (
                <p className="mt-2 italic text-blue-700">💡 Clue: {q.clue}</p>
              )}
            </CardContent>
          </Card>
        ))}

        {!showResults && (
          <Button onClick={submitAnswers} className="mt-4">
            Submit Answers
          </Button>
        )}

        {showResults && (
          <>
            <p className="font-bold mt-4">
              Score: {questions.filter((q, i) => selectedOptions[i] === q.answer).length} / {questions.length}
            </p>
            <Button onClick={resetQuiz} variant="secondary" className="mt-2">Start New Test</Button>
          </>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Score History & Topic Analysis</h2>
        {scoreHistory.map((entry, idx) => (
          <div key={idx} className="mt-2 p-2 border rounded">
            <p className="font-semibold">{entry.subject}: {entry.score}/{entry.outOf}</p>
            <ul className="list-disc list-inside">
              {Object.entries(entry.topicStats).map(([topic, stats], i) => (
                <li key={i}>{topic}: {stats.correct}/{stats.total} correct</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
