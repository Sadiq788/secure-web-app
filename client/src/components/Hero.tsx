import React from "react";

export default function Hero() {
  return (
    <div className="min-h-[65vh] flex items-center">
      <div className="max-w-5xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">Mohammed Sadiq</h1>
        <p className="text-xl text-gray-300 mt-2">Cyber Analyst | Aspiring Red Teamer</p>
        <p className="mt-4 text-gray-300 max-w-2xl">
          I’m a cybersecurity enthusiast focused on offensive security, malware analysis, and machine learning for
          threat detection. I build tools and systems that help detect and secure real-world threats.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="#contact" className="bg-green-600 px-4 py-2 rounded hover:bg-green-700">Hire Me</a>
          <a href="/assets/resume.pdf" target="_blank" className="border border-gray-600 px-4 py-2 rounded">Download Resume</a>
        </div>
      </div>
    </div>
  );
}
