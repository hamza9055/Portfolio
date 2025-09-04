// components/ThemeToggle.tsx  (Client Component)
"use client";

import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";
import { Button } from "./ui/button";

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

      useEffect(() => {
    setIsLoaded(true);
  }, []);

    useEffect(() => {
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDark]);

    return (

        <Button
            variant="outline"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className={`fixed top-8 right-8 z-50 md:w-12 md:h-12 w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 border-white/20 transition-all duration-700 delay-500 hover:scale-110 hover:rotate-180 ${isLoaded ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
        >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
    );
}
