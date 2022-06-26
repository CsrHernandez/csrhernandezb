import React from 'react'
import './App.css'
import data from './data/data.json'
import Skills from './components/Skills'

function App() {
  console.log(data)
  return (
    <main>
      React⚛️ + Vite⚡ + Replit🌀
      {
      data.skills.map((skill, idx) => (<Skills key={idx} skill={skill} />))
      }
    </main>
  );
}

export default App;
// https://templateflip.com/demo/templates/creative-cv/
// https://www.goskills.com/Development/Resources/Free-html-resume-templates
// https://templatemag.com/demo/Kelvin/