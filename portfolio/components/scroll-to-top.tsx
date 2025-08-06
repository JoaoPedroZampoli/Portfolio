"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@heroui/button";
import { button as buttonStyles } from "@heroui/theme";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [animation, setAnimation] = useState("animate-fade-in");
  const buttonRef = useRef(null);

  // Show button when page is scrolled down
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      if (!isVisible) {
        setAnimation("animate-fade-in");
        setIsVisible(true);
      }
    } else {
      if (isVisible) {
        setAnimation("animate-fade-out");
        // Wait for animation to finish before hiding
        setTimeout(() => {
          setIsVisible(false);
        }, 300); // Match the animation duration
      }
    }
  };
  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, [isVisible]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <Button
          onClick={scrollToTop}          
          className={buttonStyles({            
            color: "primary",
            radius: "full", 
            variant: "shadow",
            size: "sm",
            class: `fixed bottom-6 right-6 w-12 h-16 p-0 z-50 ${animation} hidden md:flex`
          })}
          aria-label="Voltar ao topo"
        >
          <svg 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >            
            <path 
                d="M18 15L12 9L6 15"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                />
          </svg>
        </Button>
      )}
    </>
  );
}
