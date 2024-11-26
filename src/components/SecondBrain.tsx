import React, { useState, useCallback } from 'react';
import ForceGraph2D from 'react-force-graph-2d';
import { Brain, Plus } from 'lucide-react';
import { questionsData } from '../data/questions';
import { Node, Link } from '../types';
import { NodeEditor } from './NodeEditor';
import { AddNodeForm } from './AddNodeForm';

export default function SecondBrain() {
  const [questions, setQuestions] = useState(questionsData);
  const [selectedNode, setSelectedNode] = useState<any>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const generateGraphData = useCallback(() => {
    const nodes: Node[] = [];
    const links: Link[] = [];

    questions.forEach(q => {
      // Add question node
      nodes.push({
        id: `q${q.id}`,
        name: q.question,
        type: 'question',
        val: 20
      });

      // Add answer node
      nodes.push({
        id: `a${q.id}`,
        name: q.answer,
        type: 'answer',
        val: 15
      });

      // Link question to its answer
      links.push({
        source: `q${q.id}`,
        target: `a${q.id}`,
        value: 1
      });

      // Add links between related questions
      q.relatedQuestions?.forEach(relatedId => {
        if (relatedId > q.id) {
          links.push({
            source: `q${q.id}`,
            target: `q${relatedId}`,
            value: 0.5
          });
        }
      });
    });

    return { nodes, links };
  }, [questions]);

  const handleNodeClick = useCallback((node: any) => {
    setSelectedNode(node);
  }, []);

  const handleUpdateNode = (updatedData: Partial<Question>) => {
    setQuestions(prev => prev.map(q => 
      `q${q.id}` === selectedNode.id ? { ...q, ...updatedData } : q
    ));
  };

  const handleDeleteNode = () => {
    const idToDelete = Number(selectedNode.id.slice(1));
    setQuestions(prev => prev.filter(q => q.id !== idToDelete));
    setSelectedNode(null);
  };

  const handleAddQuestion = (data: Omit<Question, 'id'>) => {
    const newId = Math.max(...questions.map(q => q.id)) + 1;
    setQuestions(prev => [...prev, { id: newId, ...data }]);
  };

  return (
    <div className="bg-zinc-900 rounded-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Brain className="text-green-500" />
          Knowledge Graph
        </h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 transition-colors text-black flex items-center gap-2"
        >
          <Plus size={20} />
          Add Question
        </button>
      </div>

      <div className="relative" style={{ height: '600px' }}>
        <ForceGraph2D
          graphData={generateGraphData()}
          nodeLabel="name"
          nodeColor={node => node.type === 'question' ? '#22c55e' : '#ffffff'}
          linkColor={() => '#666'}
          nodeCanvasObject={(node: any, ctx, globalScale) => {
            const label = node.name;
            const fontSize = 12/globalScale;
            ctx.font = `${fontSize}px Sans-Serif`;
            const textWidth = ctx.measureText(label).width;
            const bckgDimensions = [textWidth, fontSize].map(n => n + fontSize * 0.2);

            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(
              node.x - bckgDimensions[0] / 2,
              node.y - bckgDimensions[1] / 2,
              bckgDimensions[0],
              bckgDimensions[1]
            );

            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            ctx.fillStyle = node.type === 'question' ? '#22c55e' : '#ffffff';
            ctx.fillText(label, node.x, node.y);
          }}
          onNodeClick={handleNodeClick}
          cooldownTicks={100}
          linkDirectionalParticles={2}
          linkDirectionalParticleSpeed={d => d.value * 0.01}
        />

        {selectedNode && (
          <div className="absolute top-0 right-0 h-full">
            <NodeEditor
              selectedNode={selectedNode}
              onUpdate={handleUpdateNode}
              onDelete={handleDeleteNode}
              questions={questions}
              onClose={() => setSelectedNode(null)}
            />
          </div>
        )}
      </div>

      {showAddForm && (
        <AddNodeForm
          onAdd={handleAddQuestion}
          onClose={() => setShowAddForm(false)}
          questions={questions}
        />
      )}
    </div>
  );
}