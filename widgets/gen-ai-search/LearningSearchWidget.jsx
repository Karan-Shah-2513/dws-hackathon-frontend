"use client";
import React, { useEffect, useRef } from "react";
import Script from "next/script";

export default function LearningSearchWidget() {
  const inputRef = useRef(null);

  useEffect(() => {
    // This effect runs after the component mounts
    if (typeof window !== "undefined" && window.customElements) {
      // Check if the custom element is not already defined
      if (!customElements.get("gen-search-widget")) {
        const genSearchWidget = document.createElement("gen-search-widget");
        genSearchWidget.setAttribute(
          "configId",
          "8e41f60a-71c0-454b-b723-9bdfa7a12e69"
        );
        genSearchWidget.setAttribute("location", "eu");
        genSearchWidget.setAttribute("triggerId", "searchWidgetTrigger");
        document.body.appendChild(genSearchWidget);
      }
    }
  }, []);

  return (
    <>
      <Script
        src="https://cloud.google.com/ai/gen-app-builder/client?hl=en_US"
        strategy="lazyOnload"
      />
      <input
        ref={inputRef}
        placeholder="Search here"
        id="searchWidgetTrigger"
        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </>
  );
}
