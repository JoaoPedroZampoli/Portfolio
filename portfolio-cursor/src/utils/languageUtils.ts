import { languages } from '@/config/languages';

export const getLanguageConfig = (language: string) => {
  return languages[language] || {
    name: language,
    color: 'bg-gray-500',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/code/code-original.svg'
  };
}; 