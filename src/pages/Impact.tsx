import React from 'react';

export function Impact() {
  const impacts = [
    {
      title: "Enhanced Crop Yields",
      description: "Real-time, actionable data about crop health, nutrient deficiencies, and disease outbreaks enables prompt intervention, leading to increased yields and reduced losses."
    },
    {
      title: "Optimized Resource Use",
      description: "Precision agriculture practices enable targeted use of water, fertilizers, and pesticides, leading to efficient resource utilization and reduced environmental impact."
    },
    {
      title: "Disease & Pest Management",
      description: "Early detection of plant diseases and pest infestations allows for targeted treatments, reducing reliance on broad-spectrum chemical applications."
    },
    {
      title: "Soil Health",
      description: "Detailed information about soil moisture and composition promotes practices that enhance soil health and fertility, preventing degradation."
    },
    {
      title: "Climate Change Adaptation",
      description: "Monitoring weather conditions helps farmers make informed decisions in face of unpredictable climate patterns and natural disasters."
    },
    {
      title: "Economic Benefits",
      description: "Increased efficiency, reduced losses, and improved crop quality translate into significant economic benefits for farmers."
    },
    {
      title: "Data Accessibility",
      description: "Provides actionable data to farmers who lack access to technology, enabling informed decision-making and yield improvement."
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Global Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{impact.title}</h3>
                <p className="text-gray-300 leading-relaxed">{impact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}