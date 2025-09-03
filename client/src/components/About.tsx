import React from "react";
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8 items-center">
      <div className="md:col-span-1">
        <img src={profile} alt="Mohammed Sadiq" className="rounded-xl shadow-lg w-full object-cover" />
      </div>
      <div className="md:col-span-2 text-gray-300">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p>
          Aspiring Red Teamer with hands-on experience in vulnerability assessment, penetration testing, and malware
          detection using machine learning. I enjoy building secure systems, participating in CTFs, and learning new
          offensive techniques ethically.
        </p>

        <h3 className="mt-4 font-semibold">Key Skills</h3>
        <ul className="mt-2 grid grid-cols-2 gap-2 text-sm">
          <li>Cybersecurity</li>
          <li>Penetration Testing</li>
          <li>Malware Analysis</li>
          <li>Python</li>
          <li>React</li>
          <li>Machine Learning</li>
        </ul>
      </div>
    </div>
  );
}
