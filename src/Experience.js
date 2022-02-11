import React from "react";



function Experience(experienceList) {

    experienceList = 
    console.log(experienceList)
    return (
        <section class="resume-section" id="experience">
        <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            {experienceList.map(experience => {
              
              return(
                <div class="d-flex flex-column flex-md-row justify-content-between">
                <div class="flex-grow-1">
                    <h3 class="mb-0">{experience.titre}</h3>
                    <div class="subheading mb-3">{experience.entreprise}</div>
                    <p>{experience.texte}</p>
                </div>
                <div class="flex-shrink-0"><span class="text-primary">{experience.date}</span></div>
            </div>
                 
              )
          })}
           
            
        </div>
    </section>
    
    );
   }
    
   export default Experience;