// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState } from "react";

// Create a Context for the language
const LanguageContext = createContext();

// Custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// LanguageProvider component to wrap around the application
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en"); // Default language is English

  // Function to change the language
  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
