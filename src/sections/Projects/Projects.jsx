import styles from './ProjectsStyles.module.css';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://github.com/Anlprnc/VenturaTravel-MVC-Project"
          h3="Ventura Travel Project"
          p="ASP.NET Core MVC - Full Stack"
          desc={
            'I developed a travel agency project using ASP.NET Core MVC. This project includes both an admin panel and a user-specific panel. Users can perform login and logout operations through this panel, as well as schedule appointments for their travels.'
          }
        />
        <ProjectCard
          link="https://github.com/Anlprnc/DotNet6-BookStoreApp"
          h3="Book Store API - Backend"
          p="ASP.NET Core Web API"
          desc={
            'I developed a bookstore application using ASP.NET Core WebAPI. The application includes features such as books, categories, and authentication processes. Additionally, Swagger documentation tool has been integrated for API documentation.'
          }
        />
        <ProjectCard
          link="https://github.com/Anlprnc/Photo-Store"
          h3="Photo Store"
          p="Next.js - Full Stack"
          desc={
            'A photo uploading web application built using Next.js, JavaScript, and Tailwind CSS. Users can log in and upload photos only to their own accounts.'
          }
        />
        <ProjectCard
          link="https://github.com/Anlprnc/pickanddrive"
          h3="Pick And Drive - Frontend"
          p="React"
          desc={
            'A car rental web application built using React, Redux, and SCSS. Users can view vehicles in detail, log in and out, and there is also an admin panel available.'
          }
        />
      </div>
    </section>
  );
}

export default Projects;
