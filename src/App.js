import React from 'react';
import SideBar from './components/side-bar';
import Section from './components/section';
import data from './data.js';
import Experience from './components/experience';
// import Header from './components/header';

function App() {

  const experience = data.experience.entries;
  const projects = data.projects.entries;
  const skills = data.skills.entries;
  const education = data.education.entries;
  const certifications = data.certifications.entries;
  const contact = data.contact;

  return (
    <div>
      <SideBar />
      <main>
        <div>Image Here... I want to build things that inspire.</div>
        <Section title='ABOUT' id='About' href='#About' />
        <Section title='EXPERIENCE' id='Experience' href='#Experience'
          entries={experience.map((e) => {
            return (
              <Experience
                companyLogo={e.companyLogo}
                companyName={e.companyName}
                role={e.role}
                jobDescription={e.jobDescription}
                responsibilities={e.responsibilities}
                date={e.date}
              />
            )
          })}
        />
        <Section title='PRODUCT' id='Projects' href='#Projects'
          entries={projects.map((e) => {
            return (
              <Projects
                image={e.image}
                title={e.title}
                description={e.description}
                accomplishments={e.accomplishments}
                gitRepo={e.gitRepo}
                url={e.url}
              />
            )
          })}
        />
        <Section title='SKILLS' id='Skills' href='#Skills'
          entries={skills.map((e) => {
            return (
              <Skills
                category={e.category}
                stack={e.stack}
              />
            )
          })}
        />
        <Section title='EDUCATION' id='Education' href='#Education'
          entries={education}
        />
        <Section title='CONTACT' id='Contact' href='#Contact' />
      </main>
    </div>
  );
}

export default App;
