import React from "react";

export default function ResumeSection() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-300">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>

      <section className="mb-6">
        <h3 className="font-semibold">Education</h3>
        <p>BCA, Vivekananda Institute of Management (2022–2025) — Grade A</p>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold">Certifications</h3>
        <ul className="list-disc pl-5">
          <li>eLearnSecurity Junior Penetration Tester (eJPT) — INE / eLearnSecurity</li>
          <li>Cisco Ethical Hacking Certificate</li>
        </ul>
      </section>

      <section className="mb-6">
        <h3 className="font-semibold">Experience</h3>
        <p>Cyber Security Intern — Pratinik Infotech (Mar 2024 – Aug 2024)</p>
        <ul className="list-disc pl-5">
          <li>Vulnerability assessments (Nmap, Nikto, OpenVAS)</li>
          <li>Web app pentesting focusing OWASP Top 10 (XSS, SQLi, LFI)</li>
          <li>Network traffic analysis using Wireshark</li>
          <li>Reporting & remediation recommendations</li>
        </ul>
      </section>

      <section>
        <h3 className="font-semibold">Technical Skills</h3>
        <p className="mt-2">
          Metasploit, SQLmap, Burp Suite, Hydra, Wireshark, Nmap, Gobuster, Exploit-DB, cryptography basics.
        </p>
      </section>
    </div>
  );
}
