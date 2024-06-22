import React, { createContext, useState } from "react";
import i18n from "./Translations";

export const LanguageContext = createContext<{
  language: string;
  changeLanguage: (lang: string) => void;
}>({
  language: "",
  changeLanguage: () => {},
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<string>(i18n.locale);

  const changeLanguage = (lang: string) => {
    i18n.locale = lang;
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
