export interface Question {
  id: number;
  question: string;
  answer: string;
  relatedQuestions?: number[];
}

export interface Node {
  id: string;
  name: string;
  type: 'question' | 'answer';
  val: number;
}

export interface Link {
  source: string;
  target: string;
  value: number;
}