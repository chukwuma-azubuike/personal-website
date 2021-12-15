import React from 'react';
import NavBar from './components/nav-bar';
import SideBar from './components/side-bar';
import Section from './components/section';
import data from './data';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';
import Education from './components/education';
import Certifications from './components/certifications';
import Contact from './components/contact';
import About from './components/about';
import Intro from './components/intro'

// import Header from './components/header';

function App() {

  const about = data.about.entries;
  const experience = data.experience.entries;
  const projects = data.projects.entries;
  const skills = data.skills.entries;
  const education = data.education.entries;
  const certifications = data.certifications.entries;
  const contact = data.contact;

  return (
    <div>
      <NavBar />
      <SideBar />
      <main>
        <Intro />
        <Section title='ABOUT' id='About' href='#About'
          entries={
            <About
              about={about.about}
              description={about.description}
            />
          }
        />
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
        <Section title='PROJECTS' id='Projects' href='#Projects' className='projects-grid'
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
          entries={education.map((e) => <Education
            school={e.school}
            location={e.location}
            degree={e.degree}
            date={e.date}
          />)}
        />
        <Section title='CERTIFICATIONS' id='Certifications' href='#certifications'
          entries={certifications.map((e) => {
            return (
              <Certifications
                organisation={e.organisation}
                organisationLogo={e.organisationLogo}
                description={e.description}
              />
            )
          })}
        />
        <Section title='CONTACT' id='Contact' href='#Contact'
          entries={
            <Contact
              title={contact.title}
              email={contact.email}
              phone={contact.phone}
              github={contact.github}
              linkedIn={contact.linkedIn}
            />
          }
        />
      </main>
    </div>
  );
}

export default App;