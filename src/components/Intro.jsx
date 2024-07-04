import React from "react";

function Intro() {
   return (
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
         <h1 className="text-4xl md:text-7xl dark:text-white mb-1 md:mb-3 font-bold">Christopher Hixon</h1>
         <p className="text-base mdf:text-xl mb-3 font-medium">Full Stack Engineer</p>
         <p className="text-sm max-w-xl mb-6 font-bold">After graduating from Georgia Southern University in 2019, I joined Travelers Insurance as an IT ops specialist, where I embarked on my full stack journey with a focus on Django. Now a full stack engineer, I manage and enhance Travelers' openDCIM codebase and have developed multiple Django apps for local and national teams. In my spare time, I build web apps and games at home to expand my skills across different frameworks and languages.</p>
      </div>
   )
}

export default Intro;