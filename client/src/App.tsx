import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import ResumeSection from "./components/ResumeSection";
import ProjectsSection from "./components/ProjectsSection";
import CTFSection from "./components/CTFSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="text-white min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="resume"><ResumeSection /></section>
        <section id="projects"><ProjectsSection /></section>
        <section id="ctf"><CTFSection /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
}
