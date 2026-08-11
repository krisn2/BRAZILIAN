"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language, TranslationKey } from "./translations";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    toggleLanguage: () => void;
    t: (key: TranslationKey) => string;
    dir: 'ltr' | 'rtl';
    isArabic: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('en');

    useEffect(() => {
        const savedLang = localStorage.getItem('diwanyeh_lang') as Language;
        if (savedLang === 'en' || savedLang === 'ar') {
            setLanguageState(savedLang);
        }
    }, []);

    useEffect(() => {
        document.documentElement.dir = 'ltr';
        document.documentElement.lang = language;
        localStorage.setItem('diwanyeh_lang', language);
    }, [language]);

    const setLanguage = (lang: Language) => {
        setLanguageState(lang);
    };

    const toggleLanguage = () => {
        setLanguageState((prev) => (prev === 'en' ? 'ar' : 'en'));
    };

    const t = (key: TranslationKey): string => {
        return translations[language][key] || translations.en[key] || key;
    };

    const dir = 'ltr';
    const isArabic = language === 'ar';


    return (
        <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t, dir, isArabic }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
