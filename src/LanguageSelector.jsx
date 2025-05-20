import React, { useEffect } from "react";
import { useLanguage } from "./LanguageContext"; // Import the custom hook

const LanguageSelector = () => {
  const { language, changeLanguage } = useLanguage(); // Get current language and change function

  // Function to update language context when the language changes
  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    changeLanguage(newLanguage);
  };

  // Update Google Translate when the language changes (if Google Translate is used)
  useEffect(() => {
    const iframe = document.querySelector("iframe.goog-te-menu-frame");
    if (iframe) {
      const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
      const langItems = iframeDoc.querySelectorAll(
        ".goog-te-menu2-item span.text"
      );

      langItems.forEach((item) => {
        if (item.innerText.includes(language)) {
          item.click(); // Trigger the language change
        }
      });
    }
  }, [language]); // Re-run whenever the language changes

  return (
    <div
      id="google_translate_element"
      className="fixed top-5 right-5 z-50 bg-white rounded-lg shadow-md p-3 border border-gray-200 cursor-pointer"
    >
      <span className="text-gray-800 font-bold text-sm pr-3">
        <select
          value={language}
          onChange={handleLanguageChange}
          className="bg-transparent border-none text-sm font-semibold text-gray-800 outline-none cursor-pointer"
        >
          <option value="en">English</option>
          <option value="bn">বাংলা</option> {/* Bangla option */}
        </select>
      </span>
    </div>
  );
};

export default LanguageSelector;
