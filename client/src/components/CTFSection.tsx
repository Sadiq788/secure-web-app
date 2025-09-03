import React from "react";

export default function CTFSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-300">
      <h2 className="text-2xl font-bold mb-3">CTF — CloudSEK CTF 2025</h2>
      <p>
        In CloudSEK CTF 2025 I solved multi-step OSINT & exploitation challenges:
      </p>
      <ul className="list-disc pl-5 mt-3">
        <li>OSINT using Epieos to locate attacker artifacts and commit messages (Flag 1).</li>
        <li>Audio analysis — decoded Morse from an audio file to obtain Flag 2.</li>
        <li>GraphQL server analysis and token/JWT bypass to extract Flag 3.</li>
      </ul>

      <div className="mt-4">
        <a href="/assets/cloudsek_writeup.pdf" target="_blank" className="px-4 py-2 bg-green-600 rounded">Read full write-up (PDF)</a>
      </div>
    </div>
  );
}
