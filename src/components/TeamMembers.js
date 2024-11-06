


import React from "react";
import Content from "../ContentFiles/Content.json";  // Directly importing JSON content

const TeamMembers = () => {
  return (
    <div className="containerr">
      {Object.keys(Content.Team.TeamMembers).map((teamName) => (
        <section key={teamName}>
            <h2 className="text-center pt-[1em]">{teamName}</h2>
            <div className='flex gap-[2vw] justify-center flex-wrap	'>
            {Content.Team.TeamMembers[teamName].map((member, index) => (
              <div key={index} className='w-[145px] sm:w-[200px] md:w-[220px] py-[1.5em] sm:py-[2em] border-[2px] border-[white] rounded-[20px]'>
                <img src={member.image} alt={member.name} className='bg-[#D9D9D9] w-[60%] mx-auto aspect-square rounded-[50%] '/>
                <div className='py-[0.7em] sm:py-[1em]'>
                    <p className='text-center'>{member.name}</p>
                    <p className='italic text-center'>{member.role}</p>
                </div>

                <div className='flex gap-[0.7em] sm:gap-[1em] justify-center'>
                    <div>
                    <a href={`mailto:${member.email}`}>
                            <svg viewBox="0 0 24 24" className='h-[1.5em] sm:h-[2em]' fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 8L8.44992 11.6333C9.73295 12.4886 10.3745 12.9163 11.0678 13.0825C11.6806 13.2293 12.3194 13.2293 12.9322 13.0825C13.6255 12.9163 14.2671 12.4886 15.5501 11.6333L21 8M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
                        </a>
                    </div>

                    {member.linkedin && (
                        <div>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" className='h-[1.2em] sm:h-[1.6em]' viewBox="0 0 24 24" fill='#fff'><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>                  
                        </a></div>
                )}
                    
                </div>
                
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default TeamMembers;
