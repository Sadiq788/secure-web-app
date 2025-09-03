import React from "react";
import ProjectCard from "./ProjectCard";

export default function ProjectsSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-6">
      <ProjectCard
        title="Malware Detection Using Machine Learning"
        description="Static PE file feature extraction and Random Forest classifier to detect malicious Windows executables."
        technologies={["Python", "scikit-learn", "PEfile", "Flask (API)"]}
        features={[
          "PE entropy & header feature extraction",
          "Random Forest classifier with saved model (.pkl)",
          "Flask API for file upload & prediction",
          "CSV labeled dataset for training"
        ]}
        codeLink="https://github.com/Sadiq788/malware-detection"
        demoLink="#"
      />

      <ProjectCard
        title="Emotion Detection from Text"
        description="Text-based emotion detection model with emoji-enhanced output for expressive UX."
        technologies={["Python", "scikit-learn", "FastAPI", "React"]}
        features={[
          "Text preprocessing & feature extraction",
          "Trained model for multi-class emotion detection",
          "Simple web UI to classify user input"
        ]}
        codeLink="https://github.com/Sadiq788/emotion-detection"
        demoLink="#"
      />
    </div>
  );
}
