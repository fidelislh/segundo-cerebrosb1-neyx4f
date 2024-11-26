import React from 'react';
import { Question } from '../types';

interface NodeEditorProps {
  selectedNode: any;
  onUpdate: (updatedData: Partial<Question>) => void;
  onDelete: () => void;
  questions: Question[];
  onClose: () => void;
}

export const NodeEditor: React.FC<NodeEditorProps> = ({
  selectedNode,
  onUpdate,
  onDelete,
  questions,
  onClose,
}) => {
  const isQuestion = selectedNode.type === 'question';
  const currentQuestion = questions.find(q => `q${q.id}` === selectedNode.id);

  return (
    <div className="w-96 bg-gray-800 p-6 overflow-y-auto">
      <h2 className="text-xl font-bold mb-4">
        Edit {isQuestion ? 'Question' : 'Answer'}
      </h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">
            {isQuestion ? 'Question' : 'Answer'} Text
          </label>
          <textarea
            className="w-full p-2 bg-gray-700 rounded text-white"
            rows={3}
            value={selectedNode.name}
            onChange={(e) => onUpdate({ 
              [isQuestion ? 'question' : 'answer']: e.target.value 
            })}
          />
        </div>

        {isQuestion && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Related Questions
            </label>
            <div className="space-y-2">
              {questions
                .filter(q => q.id !== Number(selectedNode.id.slice(1)))
                .map(q => (
                  <label key={q.id} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={currentQuestion?.relatedQuestions?.includes(q.id)}
                      onChange={(e) => {
                        const current = currentQuestion?.relatedQuestions || [];
                        const updated = e.target.checked
                          ? [...current, q.id]
                          : current.filter(id => id !== q.id);
                        onUpdate({ relatedQuestions: updated });
                      }}
                      className="form-checkbox text-green-500"
                    />
                    <span>{q.question}</span>
                  </label>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={onDelete}
          className="px-4 py-2 bg-red-600 rounded hover:bg-red-700"
        >
          Delete
        </button>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};