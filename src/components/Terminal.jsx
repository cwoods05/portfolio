import { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from 'lucide-react';
import { clsx } from 'clsx';

const commands = {
  help: {
    description: 'Available commands',
    output: `Available commands:
  - about      : Learn more about me
  - skills     : View my technical skills
  - projects   : List my featured projects
  - experience : Show work experience
  - contact    : Get my contact information
  - clear      : Clear terminal
  - help       : Show this help message`
  },
  about: {
    description: 'About me',
    output: `Hi, I'm Connor, a Computer Engineering student at the University of Michigan interested in embedded systems, AI/ML, and systems software.
  
  I'm currently a software engineer on the Michigan Mars Rover and Atombot Research teams, where I develop robotics software, embedded firmware, and low-level hardware interfaces. Outside of team projects, I enjoy building operating systems, developer tools, and machine learning applications.
  
  Outside of engineering, I enjoy playing soccer, cooking, traveling, and exploring new places.
  
  Type 'skills' to see my technical expertise.`
  },
  skills: {
    description: 'Technical skills',
    output: `Technical Skills:
  
  Embedded Systems:
    C, C++, ROS 2, Linux, CAN, UART, DYNAMIXEL SDK
  
  AI / Machine Learning:
    Python, PyTorch, TensorFlow, Keras, NumPy,
    Pandas, CUDA, Jupyter
  
  Software & Systems:
    TypeScript, React, Node.js, FastAPI,
    Git, CMake
  
  Soft Skills:
    Leadership, Problem Solving, Communication, Team Collaboration, 
    Adaptability, Time Management`
  },
  projects: {
    description: 'Featured projects',
    output: `Featured Projects:
  
  1. Cooperative RTOS-Style Microkernel (2026)
     Cooperative task scheduler featuring synchronization primitives,
     periodic execution, runtime statistics, and automated testing.
     Tech: C++, CMake
     GitHub: github.com/cwoods05/microkernel
  
  2. ROS 2 Dynamixel Gimbal Control (2026)
     Contributed embedded software for the Michigan Mars Rover,
     implementing hardware communication, telemetry, and servo control.
     Tech: C++, ROS 2, DYNAMIXEL SDK, Linux
  
  3. CAN Motor Control Firmware (2026)
     Developed CAN firmware components and motor validation tools for
     the Atombot Research Team.
     Tech: C, C++, Linux, CAN
  
  4. LSTM-Based Portfolio Optimization (2024)
     Predicted stock returns using LSTM neural networks trained on
     publicly available financial data.
     Tech: Python, PyTorch, NumPy, Pandas
  
  Type 'github' to view all projects.`
  },
  experience: {
    description: 'Work experience',
    output: `Work Experience:

• Machine Learning Researcher @ St. Louis University (May 2025 - Present)
  Conducting deep learning research on RNA 3D structure prediction using 
  graph neural networks. Integrated code into GraphRNA and optimized 
  training on high-performance GPU clusters.

• Embedded Software Engineer @ Michigan Mars Rover Team (Aug 2025 - Present)
  Developing embedded control software for autonomous rover systems. 
  Programming STM32 microcontrollers for motor control and implementing 
  CAN/I2C communication protocols.

• Intern @ Arch Grants (April 2024 - May 2024)
  Supported startup accelerator by evaluating early-stage companies and 
  conducting market research. Analyzed 200+ potential judges and mapped 
  30+ startups in the St. Louis ecosystem.

Check the experience section for detailed information!`
  },
  contact: {
    description: 'Contact information',
    output: `Contact Me:
Email: woodsco@umich.edu
GitHub: github.com/cwoods05
LinkedIn: linkedin.com/in/connor-woods-michigan/

Feel free to reach out!`
  },
  clear: {
    description: 'Clear terminal',
    output: null
  }
};

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', content: 'Welcome to my interactive terminal!' },
    { type: 'system', content: 'Type "help" to see available commands.' }
  ]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef(null);
  const historyRef = useRef(null);

  useEffect(() => {
    if (historyRef.current) {
      historyRef.current.scrollTop = historyRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized]);

  const handleCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    
    if (trimmedCmd === '') return;

    // Add command to history
    setHistory(prev => [...prev, { type: 'command', content: `$ ${cmd}` }]);
    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    // Process command
    if (trimmedCmd === 'clear') {
      setTimeout(() => setHistory([]), 100);
      return;
    }

    if (commands[trimmedCmd]) {
      if (commands[trimmedCmd].output) {
        setHistory(prev => [...prev, { type: 'output', content: commands[trimmedCmd].output }]);
      }
    } else {
      setHistory(prev => [...prev, { 
        type: 'error', 
        content: `Command not found: ${trimmedCmd}. Type 'help' for available commands.` 
      }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex + 1;
        if (newIndex < commandHistory.length) {
          setHistoryIndex(newIndex);
          setInput(commandHistory[commandHistory.length - 1 - newIndex]);
        }
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <>
      {/* Terminal Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-8 right-8 z-50 flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-primary-500 to-primary-600 text-white rounded-lg shadow-lg shadow-primary-500/30 hover:shadow-primary-500/50 transition-all duration-300 hover:scale-105"
        >
          <TerminalIcon className="w-5 h-5" />
          <span className="font-medium">Open Terminal</span>
        </button>
      )}

      {/* Terminal Window */}
      {isOpen && (
        <div
          className={clsx(
            'fixed z-50 bg-slate-900 border border-slate-700 rounded-lg shadow-2xl transition-all duration-300',
            isMinimized
              ? 'bottom-8 right-8 w-64'
              : 'bottom-8 right-8 w-full max-w-2xl h-96'
          )}
        >
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700 rounded-t-lg">
            <div className="flex items-center gap-2">
              <TerminalIcon className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-slate-300">terminal</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 text-slate-400 hover:text-white transition-colors"
              >
                {isMinimized ? <Maximize2 className="w-4 h-4" /> : <Minimize2 className="w-4 h-4" />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 text-slate-400 hover:text-red-400 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Terminal Body */}
          {!isMinimized && (
            <div className="flex flex-col h-[calc(100%-40px)]">
              {/* Output Area */}
              <div
                ref={historyRef}
                className="flex-1 overflow-y-auto p-4 font-mono text-sm"
              >
                {history.map((entry, index) => (
                  <div key={index} className="mb-2">
                    {entry.type === 'system' && (
                      <div className="text-primary-400"># {entry.content}</div>
                    )}
                    {entry.type === 'command' && (
                      <div className="text-emerald-400">{entry.content}</div>
                    )}
                    {entry.type === 'output' && (
                      <pre className="text-slate-300 whitespace-pre-wrap">{entry.content}</pre>
                    )}
                    {entry.type === 'error' && (
                      <div className="text-red-400">{entry.content}</div>
                    )}
                  </div>
                ))}
              </div>

              {/* Input Area */}
              <form onSubmit={handleSubmit} className="border-t border-slate-700 p-4">
                <div className="flex items-center gap-2 font-mono text-sm">
                  <span className="text-emerald-400">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="flex-1 bg-transparent text-slate-300 outline-none"
                    placeholder="Type 'help' for commands..."
                    autoComplete="off"
                    spellCheck="false"
                  />
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Terminal;

