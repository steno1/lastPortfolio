import ecommerce from "../asset/eCommerce.jpg"
import portfolio from "../asset/portfolio.jpg"
import task from "../asset/task.jpg"

const portfolioData = [
    {
      id: 1,
      category: "Frontend",
      image: portfolio,
      title: "My Portfolio Site",
      description: "A frontend-focused portfolio site built using React, Context API, HTML, and CSS. It includes sections like Header, Home, About, Portfolio, Projects, Contact, and Experience.",
      demo: "/#home",
      githubLink: "https://github.com/steno1/lastPortfolio/tree/master"
    },
    {
      id: 2,
      category: "MERN stack",
      image:task,
      title: "User Task Management Site",
      description: "A task management platform developed with React and MERN stack, allowing users to manage daily tasks, records, sorting functionalities, and more.",
      demo: "https://dailytaskapp.onrender.com/landing",
      githubLink: "https://github.com/steno1/taskManagementApp"
    },
    {
      id: 3,
      category: "MERN stack",
      image: ecommerce,
      title: "eCommerce Platform",
      description: "An eCommerce platform built with React, Redux, and integrated PayPal. Includes features like rating and comment sections, search functionalities, and more.",
      demo: "https://stenosupermarket1.onrender.com/",
      githubLink: "https://github.com/steno1/eCommerceRedone"
    }
  ];
  
  export default portfolioData;
  