import React from 'react';
import { useLanguage } from '../../LanguageContext'; // Adjust path if necessary

function LandingAuth() {
  const { language } = useLanguage();

  const texts = {
    en: {
      title: 'BIGGANADDA',
      login: 'Login',
      signup: 'Sign Up',
      infoText: 'Some Information Here',
    },
    bn: {
      title: 'বিগ্গানআড্ডা',
      login: 'লগইন',
      signup: 'সাইন আপ',
      infoText: 'কিছু তথ্য এখানে',
    },
  };

  const t = texts[language] || texts.en;

  return (
    <div className="bg-blue-900 min-h-screen flex flex-col justify-center items-center text-white">
      {/* Top Section */}
      <div className="flex flex-row justify-between items-center mb-4 max-w-5xl container mx-auto p-6">
        <h1 className="text-3xl font-bold">{t.title}</h1>
        <div className="space-x-4">
          <button className="bg-white text-[#575B91] px-6 py-2 rounded">
            {t.login}
          </button>
          <button className="bg-white text-[#575B91] px-6 py-2 rounded">
            {t.signup}
          </button>
        </div>
      </div>

      {/* Second Section */}
      <div className="bg-white w-full max-w-5xl rounded-2xl container mx-auto flex flex-col items-center py-6 relative">
        {/* Image placed at the top */}
        <img src="/mathgrid.png" alt="Math Grid" className="w-full max-w-4xl object-cover" />

        {/* h1 placed on the image */}
        <h1 className="text-2xl font-semibold text-blue-900 absolute top-1/2 transform -translate-y-1/2">
          {t.infoText}
        </h1>
      </div>
    </div>
  );
}

export default LandingAuth;
