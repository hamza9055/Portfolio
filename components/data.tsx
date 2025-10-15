export const Skills = {
    hard: [
        {
            id: 1,
            icon: "/assets/skills/html.png",
            text: "Html"
        },
        {
            id: 2,
            icon: "/assets/skills/css.png",
            text: "Css"
        },
        {
            id: 3,

            icon: "/assets/skills/javascript.png",
            text: "JavaScript"
        },
        {
            id: 4,

            icon: "/assets/skills/react.png",
            text: "React"
        },
        {
            id: 5,

            icon: "/assets/skills/tailwind.png",
            text: "Tailwind"
        },
        {
            id: 6,

            icon: "/assets/skills/github1.png",
            text: "Githb"
        },
        {
            id: 7,
            icon: "/assets/skills/typescript.png",
            text: "TypeScript"
        },
        {
            id: 8,

            icon: "/assets/skills/nextjs.png",
            text: "Next"
        },
        {
            id: 9,
            icon: "/assets/skills/c.png",
            text: "C#"
        },

        {
            id: 10,
            icon: "/assets/skills/antDesign.png",
            text: "Ant Design"
        },
        {
            id: 11,
            icon: "/assets/skills/sass.png",
            text: "Sass"
        },
        {
            id: 12,
            icon: "/assets/skills/azure.png",
            text: "Azure"
        },
        {
            id: 13,
            icon: "/assets/skills/rest-api.png",
            text: "REST APis"
        },
        {
            id: 12,
            icon: "/assets/skills/sql.png",
            text: "SQL Server"
        },
         {
            id: 12,
            icon: "/assets/skills/net.png",
            text: "ASP.NET"
        },

    ],

}

export const timeline = [
    {
        duration: 'Jan 2023 - Present',
        title: 'Full Stack Developer',
        company: 'ItTrends',
        points: [
            'Developed responsive UIs with React/TypeScript and optimized performance for cross-browser compatibility.',
            'Built RESTful APIs in C# (.NET), integrated Azure Blob Storage, and enabled email workflows with Microsoft Graph API.',
        ],
    },
    {
        duration: 'Feb 2022 - Dec 2022',
        title: 'Front End Developer',
        company: 'OrderNation',
        points: [
            'Built responsive, mobile-friendly layouts for e-commerce platforms.',
            'Implemented reusable UI components from design prototypes following best practices.',
        ],
    },
];

export const education = [
    {
        id: 1,
        year: '2025',
        title: 'Bachelor of Science in Computer Science',
        institution: 'Virtual University of Lahore',
        type: 1,
    },
    {
        id: 2,
        year: 'Mar 2022',
        title: 'Responsive Web Design',
        institution: 'freeCodeCamp',
        type: 2,
    },
    {
        id: 3,
        year: 'May 2022',
        title: 'JavaScript Modern Development',
        institution: 'Udemy',
        type: 2,
    },
    {
        id: 4,
        year: 'Feb 2023',
        title: 'Front-End Development Libraries',
        institution: 'freeCodeCamp',
        type: 2,
    }
    , {
        id: 5,
        year: 'Feb 2023',
        title: 'JavaScript Algorithms & Data Structures',
        institution: 'freeCodeCamp',
        type: 2,
    }
    ,
    {
        id: 6,
        year: 'Dec 2023',
        title: 'Introduction to Front End Development',
        institution: 'SimpliLearn',
        type: 2,
    },
    {
        id: 7,
        year: 'Jan 2025',
        title: 'Foundation C# with Microsoft',
        institution: 'freeCodeCamp',
        type: 2,
    }
];

export const portfolioItems = [
    
    {
        id: 2,
        slug: 'registo',
        title: 'Registo',
        image: '/assets/projects/registo.png',
        link: "https://registo.no/",
        github: "",
        description: "Accounting Task Management Platform. Built a scalable, multi-tenant system for managing business clients, featuring contract e-signing, automated task scheduling (e.g., VAT filing, payroll), and client-specific accounting workflows.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Ant Design", "Sass", "Azure", "REST APIs", 'SignalR', 'Azure Blob Storage'],
        points: [
            "Admin panel with role-based access",
            "Secure user authentication",
            "Business registration workflows",
            "contract e-signing",
            "automated task scheduling (e.g., VAT filing, payroll)",
            "SignalR for real-time updates",
            "real time masesaging",
            "outlook integration",
            "blob storage integration",


        ]
    },
    {
        id: 3,
        slug: 'equinet',
        title: 'Equinet',
        image: '/assets/projects/equinet.png',
        link: "https://equinet.no/",
        github: "",
        description: "Service that brings horse trainers, riding schools, and students together. Implemented features like lesson scheduling, trainer/student dashboards, course management, chat, and Stripe-based payments.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Ant Design", "Sass", "Azure", "REST APIs"],
        points: [
            "Role-based access",
            "Stripe payments",
            "product management",
            "trainer/student/Shool dashboard",
            "finance management",
            "horse management",
            "lesson scheduling",
            "chat feature",
        ]
    },
    {
    id: 4,
    title: 'ItTrends',
    slug: 'ittrends',
    image: '/assets/projects/ittrends.png',
    link: "https://www.ittrends.no/",
    github: "",
    description: "A professional company website built for an IT services firm. Developed a modern business platform showcasing services, portfolio, and contact information. Implemented responsive design with smooth animations using Bootstrap and Tiny Slider.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tiny Slider"],
    points: [
        "Responsive company profile website",
        "Service and portfolio showcase",
        "Smooth slider animations with Tiny Slider",
        "Built with Bootstrap for grid and components",
    ]
},
{
    id: 5,
    slug: 'plusnor',
    title: 'PlusNor',
    image: '/assets/projects/plusnor1.png',
    link: "https://plusnor.no/",
    github: "",
    description: "Corporate website for an accounting firm. Designed to highlight services, build client trust, and provide easy contact access. Fully responsive, mobile-friendly layout with engaging slider animations.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tiny Slider"],
    points: [
        "Responsive and mobile-friendly design",
        "Business service showcase",
        "Integrated slider animations",
        "Modern, clean UI with Bootstrap",
    ]
},
{
        id: 1,
        slug: 'university-website',
        title: 'University Website',
        image: '/assets/projects/uniweb.png',
        link: "https://university-website.vercel.app/",
        github: "https://github.com/hamza9055/university-website",
        description: "A responsive front-end university website built with HTML, CSS, and JavaScript. It showcases course details, faculty profiles. Designed with clean UI, accessibility in mind, and optimized for both desktop and mobile devices.",
        technologies: ["HTML", "CSS", "JavaScript",],
        points: [
            "Course details and faculty pages",
            "Event management system",
            "Responsive mobile-first design",
            "Responsive animations",
            "Clean, modern UI", "Accessibility best practices"
        ]
    },

    // {
    //     id: 6,
    //     slug: 'portfolio-website',
    //     title: 'Portfolio Website',
    //     image: 'https://images.pexels.com/photos/326502/pexels-photo-326502.jpeg?auto=compress&cs=tinysrgb&w=800',
    //     link: "https://university-website.vercel.app/",
    //     github: "https://github.com/hamza9055/university-website",
    //     description: "Business registration and management platform.",
    //     technologies: ["React", "C#", ".NET", "SQL Server"],
    //     points: [
    //         "Secure user authentication",
    //         "Business registration workflows",
    //         "Admin panel with role-based access"
    //     ]
    // },
];
