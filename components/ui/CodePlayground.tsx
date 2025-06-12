'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, Play, Copy, Check } from 'lucide-react';

interface CodeExample {
  id: string;
  title: string;
  language: string;
  code: string;
  description: string;
}

const codeExamples: CodeExample[] = [
  {
    id: 'react-hook',
    title: 'Custom React Hook',
    language: 'javascript',
    code: `// useLocalStorage Hook
const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};`,
    description: 'LocalStorage ile senkronize olan kullanışlı bir React Hook örneği'
  },
  {
    id: 'python-decorator',
    title: 'Python Decorator',
    language: 'python',
    code: `# Performance decorator
import time
from functools import wraps

def measure_time(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} took {end - start:.4f} seconds")
        return result
    return wrapper

@measure_time
def slow_function():
    time.sleep(1)
    return "Done!"`,
    description: 'Fonksiyon çalışma süresini ölçen Python decorator örneği'
  },
  {
    id: 'swift-extension',
    title: 'Swift Extension',
    language: 'swift',
    code: `// String Extension for Email Validation
extension String {
    var isValidEmail: Bool {
        let emailRegex = "[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}"
        let emailPredicate = NSPredicate(format: "SELF MATCHES %@", emailRegex)
        return emailPredicate.evaluate(with: self)
    }
    
    func maskEmail() -> String {
        guard self.isValidEmail else { return self }
        let parts = self.split(separator: "@")
        guard parts.count == 2 else { return self }
        
        let username = String(parts[0])
        let masked = username.prefix(2) + "***"
        return masked + "@" + parts[1]
    }
}

// Usage
let email = "user@example.com"
print(email.isValidEmail) // true
print(email.maskEmail())  // us***@example.com`,
    description: 'Email validasyonu ve maskeleme için Swift String extension\'ı'
  }
];

export const CodePlayground: React.FC = () => {
  const [selectedExample, setSelectedExample] = useState(codeExamples[0]);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(selectedExample.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="code-playground" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Code Playground</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            İnteraktif kod örnekleri ve kullanışlı snippet'ler
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Sol taraf - Örnek listesi */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl font-semibold mb-4">Kod Örnekleri</h3>
            {codeExamples.map((example) => (
              <motion.button
                key={example.id}
                onClick={() => setSelectedExample(example)}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full text-left p-4 rounded-xl transition-all duration-200 ${
                  selectedExample.id === example.id
                    ? 'glass bg-blue-500/10 border-blue-500/50'
                    : 'glass hover:bg-white/5'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Code2 size={20} className="text-blue-400" />
                  <h4 className="font-medium">{example.title}</h4>
                </div>
                <p className="text-sm text-gray-400">{example.language}</p>
              </motion.button>
            ))}
          </motion.div>

          {/* Sağ taraf - Kod gösterimi */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-xl overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-semibold">{selectedExample.title}</h3>
                  <p className="text-sm text-gray-400 mt-1">{selectedExample.description}</p>
                </div>
                <div className="flex items-center gap-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCopy}
                    className="glass p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    {copied ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                  </motion.button>
                </div>
              </div>

              {/* Code Block */}
              <div className="p-6 bg-black/30">
                <pre className="overflow-x-auto">
                  <code className="text-sm text-gray-300 font-mono">
                    {selectedExample.code}
                  </code>
                </pre>
              </div>

              {/* Footer */}
              <div className="p-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-sm text-gray-400">
                  Dil: <span className="text-blue-400">{selectedExample.language}</span>
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 glass px-4 py-2 rounded-lg hover:bg-white/10 transition-colors text-sm"
                >
                  <Play size={16} />
                  Çalıştır (Coming Soon)
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 