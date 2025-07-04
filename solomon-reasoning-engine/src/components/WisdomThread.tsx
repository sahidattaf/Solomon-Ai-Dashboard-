import { useState } from 'react';
import { motion } from 'framer-motion';
import { getWisdomSteps, Language } from '../lib/i18n';

export default function WisdomThread() {
  const [lang, setLang] = useState<Language>('EN');
  const steps = getWisdomSteps(lang);

  return (
    <div className="space-y-2">
      <select
        className="border px-2 py-1"
        value={lang}
        onChange={(e) => setLang(e.target.value as Language)}
      >
        <option value="EN">EN</option>
        <option value="NL">NL</option>
        <option value="PAP">PAP</option>
      </select>
      <ul className="space-y-1">
        {steps.map((step, idx) => (
          <motion.li
            key={idx}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="border p-2 rounded"
          >
            {step}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
