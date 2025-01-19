import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export function Contact() {
  return (
    <div className="min-h-screen pt-16">
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">Contact Us</h2>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-lg p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <div>
                  <h3 className="text-lg font-medium text-white">Email</h3>
                  <p className="text-gray-300">LonelyDemon61@gmail.com</p>
                </div>
              </div>

              

            
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}