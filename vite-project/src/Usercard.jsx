import React from 'react';
import { motion } from 'framer-motion';
import userImg from './assets/images/user1.jpg'
import userImg2 from './assets/images/user2.jpg'

// Sample data
const Userdata = [
  {
    name: "Deepak Kumar",
    country: "India",
    role: "Frontend Developer",
    skills: ["UI/UX", "React", "HTML", "JS", "Python", "Tailwind", "CSS"],
    online: true,
    image: userImg,
  },
  {
    name: "Sakthi Dev",
    country: "India",
    role: "UI Designer",
    skills: ["Figma", "Sketch", "React", "Tailwind", "Branding"],
    online: false,
    image: userImg2,
  },
   {
    name: "Sakthi Dev",
    country: "India",
    role: "UI Designer",
    skills: ["Figma", "Sketch", "React", "Tailwind", "Branding"],
    online: false,
    image: userImg2,
  },
   {
    name: "Sakthi Dev",
    country: "India",
    role: "UI Designer",
    skills: ["Figma", "Sketch", "React", "Tailwind", "Branding"],
    online: false,
    image: userImg2,
  },
  


  // notes :  if you like add more card just include your path and userdata aswell.
];

// User Card Component
const User = ({ name, country, role, skills, online, image }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full sm:w-[300px] bg-white/10 border border-white/10 dark:bg-gray-900 p-6 m-4 rounded-xl backdrop-blur-md shadow-xl overflow-x-hidden"
    >
      {/* Status Badge */}
      <span className={`absolute top-5 left-5 px-3 py-1 text-xs font-bold rounded-full ${online ? "bg-green-500" : "bg-yellow-500"} text-white`}>
        {online ? "Online" : "Offline"}
      </span>

      {/* Profile Image */}
      <div className="flex justify-center">
        <img src={image} alt={name} className="w-24 h-24 rounded-full object-cover shadow-lg border-2 border-white/10" />
      </div>

      {/* Info */}
      <h3 className="text-lg font-semibold text-white mt-4 text-center">{name}</h3>
      <p className="text-sm text-gray-300 text-center">{country}</p>
      <p className="text-sm text-pink-400 text-center mt-1">{role}</p>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mt-4">
        <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-2 rounded-full text-white font-medium hover:brightness-110 transition">Message</button>
        <button className="border border-purple-400 text-white px-4 py-2 rounded-full hover:bg-purple-600 hover:border-transparent transition">Follow</button>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-100 uppercase mb-2">Skills</h4>
        <ul className="flex flex-wrap gap-2">
          {skills.map((skill, idx) => (
            <li key={idx} className="bg-white/10 text-white text-xs px-3 py-1 rounded-full border border-white/20">
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

// Main Wrapper
export const Usercard = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 py-20 px-4 text-white">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400">
          Meet Our Creative Team
        </h2>

        <div className="flex flex-wrap justify-center">
          {Userdata.map((user, idx) => (
            <User key={idx} {...user} />
          ))}
        </div>
      </div>
    </div>
  );
};
