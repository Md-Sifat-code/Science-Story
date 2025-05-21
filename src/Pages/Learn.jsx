import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topics = [
  'physics',
  'chemistry',
  'biology',
  'astronomy',
  'geology',
  'neuroscience'
];

const Learn = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInput(value);

    if (value.endsWith('\n')) {
      const trimmed = value.trim();

      if (trimmed === '/list') {
        setOutput([
          ...output,
          '📚 Available Topics:',
          ...topics.map((topic, i) => `${i + 1}. ${topic}`)
        ]);
      } else if (trimmed.startsWith('/select/')) {
        const selectedTopic = trimmed.split('/select/')[1];
        if (topics.includes(selectedTopic)) {
          navigate(`/topics/${selectedTopic}`);
        } else {
          setOutput([...output, `❌ Topic "${selectedTopic}" not found.`]);
        }
      }

      setInput('');
    }
  };

  return (
    <div className="relative min-h-screen bg-[#f8f9fd] p-8 flex items-center justify-center overflow-hidden">
      
      {/* Bottom-right image */}
      <div className="absolute bottom-0 md:bottom-[-120px] right-0">
        <img src="/robotic.png" alt="Robotic" className="" />
      </div>

      <div className="w-full max-w-4xl bg-white border border-[#575B91] rounded-xl shadow-xl p-6 z-10">
        <h2 className="text-2xl font-bold text-[#575B91] mb-4">BigganAdda Learn Console</h2>

        {/* Output Display */}
        <div className="mockup-code bg-[#f0f1fa] text-[#2d2e4c] h-80 overflow-y-auto mb-4 rounded-md">
          {output.length === 0 ? (
            <pre data-prefix="$"><code>Welcome! Type <b>/list</b> to see topics.</code></pre>
          ) : (
            output.map((line, idx) => (
              <pre key={idx} data-prefix=">">
                <code>{line}</code>
              </pre>
            ))
          )}
        </div>

        {/* Command Input */}
        <textarea
          className="textarea textarea-bordered w-full resize-none font-mono focus:border-[#575B91] focus:outline-none"
          rows={3}
          placeholder="Try /list or /select/physics"
          value={input}
          onChange={handleInputChange}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) {
              e.preventDefault();
              handleInputChange({ target: { value: input + '\n' } });
            }
          }}
        />

        <p className="text-sm mt-2 text-gray-500">
          Use <code className="bg-gray-100 px-1 rounded">/list</code> to view topics, or <code className="bg-gray-100 px-1 rounded">/select/topic</code> to navigate.
        </p>
      </div>
    </div>
  );
};

export default Learn;
