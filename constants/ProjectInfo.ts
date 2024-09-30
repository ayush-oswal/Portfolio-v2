export interface ProjectSchema {
    Title: string;
    Cover: string;
    Description: string;
    Stack: string[];
    Live?: string;
    Github: string;
    Video?: string;
  }
  
  export const Fullstack: ProjectSchema[] = [
    {
      Title: "CodeCollab",
      Cover: "/p1.png",
      Description:
        "A real-time collaborative code editor with room-based coding, chat, and code execution. It uses Redis for task queues and Judge0 for code evaluation.",
      Stack: [
        "AWS ec2",
        "Typescript",
        "Docker",
        "Nginx",
        "Express",
        "Node",
        "React",
        "WebSockets",
        "Redis",
        "Judge0",
        "Clerk Auth",
        "Tailwind",
      ],
      Live: "https://codecollab.ayushoswal.live/",
      Github: "https://github.com/ayush-oswal/Collaborative-code-editor",
      Video: "https://x.com/Oswal_ayushh/status/1799106143937315018",
    },
    {
      Title: "Project Management",
      Cover: "/p2.png",
      Description:
        "A B2B project management platform with admin and employee roles. Admins can manage clients, employees, and projects with status tracking.",
      Stack: ["Nextjs14", "Docker", "Typescript", "GraphQL", "MongoDB"],
      Live: "https://project-management-ggig.vercel.app",
      Github: "https://github.com/ayush-oswal/Project_Management",
      Video: "https://x.com/Oswal_ayushh/status/1775555228412113159",
    },
    {
      Title: "Blog-It",
      Cover: "/p3.png",
      Description:
        "A blogging platform with file uploads via Cloudinary, search, voice search, and JWT authentication. Users can comment, and authors have dedicated pages.",
      Stack: ["React", "Express", "Node", "MongoDB", "Cloudinary", "Jwt"],
      Live: "https://blog-it-wine.vercel.app",
      Github: "https://github.com/ayush-oswal/Blog-It",
      Video: "https://x.com/Oswal_ayushh/status/1746176305476039154",
    },
    {
      Title: "Trello-Clone",
      Cover: "/p8.png",
      Description:
        "A Trello-like task management app with drag-and-drop functionality, complex state management, and task sorting based on priority and time.",
      Stack: [
        "NextJS",
        "ExpressJS",
        "NodeJS",
        "MongoDB",
        "Tailwind",
        "Typescript",
        "Zustand",
        "React-beautiful-dnd",
      ],
      Live: "https://crework-assign.vercel.app/",
      Github: "https://github.com/ayush-oswal/Crework_assign",
      Video: "https://x.com/Oswal_ayushh/status/1819333374760100114",
    },
    {
      Title: "Go-crud",
      Cover: "/p5.png",
      Description:
        "A simple to-do list application built using Golang and React with MongoDB for storage, Docker for containerization, and CRUD functionality.",
      Stack: ["Golang", "React", "MongoDB", "Docker"],
      Github: "https://github.com/ayush-oswal/go-crud",
    },
  ];
  
  export const Backend : ProjectSchema[] = [
    {
      Title: "Paytm-clone",
      Cover: "/p4.png",
      Description:
        "A Paytm-like app showcasing secure banking architecture with CI/CD pipelines for seamless deployment and avoiding concurrent transactions.",
      Stack: ["TurboRepo", "CI/CD", "NextJS", "Prisma", "Postgres", "Tailwind", "Typescript"],
      Github: "https://github.com/ayush-oswal/paytm-clone",
    },
    {
      Title: "Elastic Search",
      Cover: "/p7.png",
      Description:
        "Implements Elasticsearch in Golang with a minimal Next.js frontend, logging the search time for enhanced performance insights.",
      Stack: ["Elastic-Search", "Docker", "NextJs", "Golang"],
      Github: "https://github.com/ayush-oswal/Elastic-Search",
    },
    {
      Title: "E-commerce Backend",
      Cover: "",
      Description : "Developed 16 api's for various tasks, used prisma ORM and postgreSQL as it needed to handle multiple relations.",
      Stack: ["Nodejs","Expressjs","Docker","Postgre","Prisma","Typescript"],
      Github : "https://github.com/ayush-oswal/Guestara_assign"
    },
    {
      Title: "gRPC in golang",
      Cover: "/p6.png",
      Description:
        "A demonstration of gRPC in Golang with a separate client to implement remote procedure calls, showcasing the power of gRPC services.",
      Stack: ["Golang", "Proto"],
      Github: "https://github.com/ayush-oswal/go-grpc",
    }
  ];


  export const Frontend : ProjectSchema[] = [
    {
      Title: "Movie Watchlist",
      Cover: "/p9.png",
      Description:
        "Users can browse through movies and add them to their custom multiple watchlists which are stored locally. Used Zustand and also applied pagination.",
      Stack: ["Reactjs","Zustand","Typescript","Pagination"],
      Github: "https://github.com/ayush-oswal/Authenticate_assign",
      Live: "https://authenticate-assign.vercel.app/"
    },
    {
      Title: "ChatGPT-clone",
      Cover: "/p10.png",
      Description:
        "Made a fully responsive chatgpt clone a while back using just tailwind css.",
      Stack: ["Tailwind CSS"],
      Github: "https://github.com/ayush-oswal/Chatgpt-clone-using-tailwind-css"
    }
  ];