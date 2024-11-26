interface Question {
  id: number;
  question: string;
  answer: string;
  relatedQuestions?: number[];
}

export const questionsData: Question[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    answer: "Paris is the capital of France",
    relatedQuestions: [2, 3]
  },
  {
    id: 2,
    question: "What is the largest city in France?",
    answer: "Paris is also the largest city in France",
    relatedQuestions: [1, 3]
  },
  {
    id: 3,
    question: "What famous tower is in Paris?",
    answer: "The Eiffel Tower is the most famous landmark in Paris",
    relatedQuestions: [1, 2]
  },
  {
    id: 4,
    question: "What is the official language of France?",
    answer: "French is the official language of France",
    relatedQuestions: [5]
  },
  {
    id: 5,
    question: "How many countries have French as an official language?",
    answer: "French is an official language in 29 countries",
    relatedQuestions: [4]
  }
];