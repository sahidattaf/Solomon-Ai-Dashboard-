export type Language = 'EN' | 'NL' | 'PAP';

const translations: Record<Language, string[]> = {
  EN: [
    'Understand the question clearly',
    'Seek wisdom from diverse sources',
    'Distill the essence and respond'
  ],
  NL: [
    'Begrijp de vraag duidelijk',
    'Zoek wijsheid uit verschillende bronnen',
    'Destilleer de essentie en antwoord'
  ],
  PAP: [
    'Kompronde bien e pregunta',
    'Buska sabiduria for di diferente fuente',
    'Saká esensia i kontesta'
  ]
};

export function getWisdomSteps(lang: Language = 'EN'): string[] {
  return translations[lang] || translations.EN;
}
