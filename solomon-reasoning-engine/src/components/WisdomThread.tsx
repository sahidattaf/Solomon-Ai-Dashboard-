import { motion } from 'framer-motion';
import { t, SUPPORTED_LANGUAGES } from '@/lib/i18n';
import { useState } from 'react';

export default function WisdomThread({ lang = 'en' }: { lang?: string }) {
  const [steps, setSteps] = useState([
    'What is the root of wisdom?',
    'Observe without judging.',
    'Synthesize emotional and symbolic cues.',
    'Proceed with care, iterate with clarity.'
  ]);

  const [selectedLang, setSelectedLang] = useState(lang);

  return (
    <div className="space-y-4 p-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold">{t(selectedLang, 'THREAD')}</h2>
        <select
          value={selectedLang}
          onChange={(e) => setSelectedLang(e.target.value)}
          className="ml-auto border rounded px-2 py-1"
        >
          {SUPPORTED_LANGUAGES.map((code) => (
            <option key={code} value={code}>{code.toUpperCase()}</option>
          ))}
        </select>
      </div>
      <div className="space-y-2">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.4 }}
            className="bg-gray-100 p-3 rounded-xl shadow-sm"
          >
            <span className="text-sm text-gray-700">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
