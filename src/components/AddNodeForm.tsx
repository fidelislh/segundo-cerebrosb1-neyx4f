import React, { useState } from 'react';
import { Question } from '../types';

interface AddNodeFormProps {
  onAdd: (data: Omit<Question, 'id'>) => void;
  onClose: () => void;
  questions: Question[];
}

export const AddNodeForm: React.FC<AddNodeFormProps> = ({
  onAdd,
  onClose,
  questions,
}) => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [relatedQuestions, setRelatedQuestions] = useState<number[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      question,
      answer,
      relatedQuestions,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-[500px]">
        <h2 className="text-xl font-bold mb-4">Add New Question</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Question</label>
            <textarea
              className="w-full p-2 bg-gray-700 rounded text-white"
              rows={3}
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Answer</label>
            <textarea
              className="w-full p-2 bg-gray-700 rounded text-white"
              rows={3}
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Related Questions
            </label>
            <div className="space-y-2 max-h-40 overflow-y-auto">
              {questions.map(q => (
                <label key={q.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={relatedQuestions.includes(q.id)}
                    onChange={(e) => {
                      setRelatedQuestions(prev =>
                        e.target.checked
                          ? [...prev, q.id]
                          : prev.filter(id => id !== q.id)
                      );
                    }}
                    className="form-checkbox text-green-500"
                  />
                  <span>{q.question}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-green-600 rounded hover:bg-green-700"
            >
              Add Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};