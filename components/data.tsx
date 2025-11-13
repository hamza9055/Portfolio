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
            id: 14,
            icon: "/assets/skills/sql.png",
            text: "SQL Server"
        },
        {
            id: 15,
            icon: "/assets/skills/net.png",
            text: "ASP.NET"
        },
        {
            id: 16,
            icon: "/assets/skills/node.png",
            text: "Node js"
        },
        {
            id: 17,
            icon: "/assets/skills/mongo.png",
            text: "MondoDB"
        }

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
        id: 1,
        category: 'Professional',
        slug: 'registo',
        title: 'Registo',
        image: '/assets/projects/registo.png',
        link: "https://registo.no/",
        github: "",
        description: "A full-featured accounting task management platform designed for accounting firms and their clients. Developed a scalable, multi-tenant system with secure authentication, client-specific workflows, automated task scheduling (VAT, payroll), and digital contract signing.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Ant Design", "Sass", "Azure", "REST APIs", 'SignalR', 'Azure Blob Storage'],
        points: [
            'Admin panel with role-based access control',
            'Secure user authentication and authorization',
            'Business registration workflows',
            'Digital contract e-signing',
            'Automated task scheduling (VAT filing, payroll)',
            'Real-time updates with SignalR',
            'Integrated real-time messaging system',
            'Outlook email synchronization',
            'Azure Blob Storage integration for file handling',
        ]
    },
    {
        id: 2,
        category: 'Professional',
        slug: 'equinet',
        title: 'Equinet',
        image: '/assets/projects/equinet.png',
        link: "https://equinet.no/",
        github: "",
        description: "'A web platform that connects horse trainers, riding schools, and students. Built a complete scheduling, management, and payment system enabling trainers and students to interact efficiently with role-based dashboards.",
        technologies: ["React", "TypeScript", "C#", ".NET", "SQL Server", "Ant Design", "Sass", "Azure", "REST APIs"],
        points: [
            'Role-based access control for trainers, schools, and students',
            'Stripe payment integration',
            'Product and service management',
            'Trainer, student, and school dashboards',
            'Finance management and reporting',
            'Horse management module',
            'Lesson scheduling and management system',
            'Real-time chat and messaging feature',
            'Framer Motion for better animation'
        ]
    },
    {
        id: 3,
        category: 'Professional',
        slug: 'tackit',
        title: 'TalkIt',
        image: '/assets/projects/talkit.png',
        link: 'https://talkit-frontend-cpe0cyadafd7f7hf.norwayeast-01.azurewebsites.net/',
        github: '',
        description:
            'A real-time communication tool for doctors and patients. Designed and developed modern UI components and smooth animations using Next.js and Tailwind CSS. Integrated the login API using BankID for secure authentication and connected the project with Azure Pipeline for CI/CD deployment.',
        technologies: [
            'Next.js',
            'Tailwind CSS',
            'React.js',
            'REST APIs',
            'Azure Pipeline',
        ],
        points: [
            'Responsive and animated front-end interface',
            'Secure login integration using BankID',
            'Applied smooth UI transitions for enhanced UX',
            'API integration for authentication',
            'Connected with Azure Pipeline for automated deployment',
        ],
    },
    {
        id: 3,
        category: 'Professional',
        title: 'ItTrends',
        slug: 'ittrends',
        image: '/assets/projects/ittrends.png',
        link: "https://www.ittrends.no/",
        github: "",
        description: "Corporate website for an IT services firm, built to showcase offerings, portfolio, and company information. Focused on responsive UI, professional design, and smooth animations for a strong brand presence.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tiny Slider"],
        points: [
            'Fully responsive company website',
            'Showcase of services and portfolio',
            'Smooth slider animations using Tiny Slider',
            'Optimized responsive transitions',
            'Modern layout built with Bootstrap grid system',
        ]
    },
    {
        id: 4,
        category: 'Professional',
        slug: 'plusnor',
        title: 'PlusNor',
        image: '/assets/projects/plusnor1.png',
        link: "https://plusnor.no/",
        github: "",
        description: "Corporate website for an accounting firm, designed to build client trust and highlight professional services. Fully responsive with modern animations and a polished UI to enhance brand credibility.",
        technologies: ["HTML", "CSS", "JavaScript", "Bootstrap", "Tiny Slider"],
        points: [
            "Responsive and mobile-friendly design",
            "Business service showcase",
            'Animated slider for featured content',
            'Smooth responsive animations',
            'Modern, clean UI built with Bootstrap',
        ]
    },
    {
        id: 5,
        category: 'Personal',
        slug: 'university-website',
        title: 'University Website',
        image: '/assets/projects/uniweb.png',
        link: 'https://university-website.vercel.app/',
        github: 'https://github.com/hamza9055/university-website',
        description:
            'A personal frontend project built to practice modern UI design and responsive web development. Features course details and faculty profiles, created with pure HTML, CSS, and JavaScript.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        points: [
            'Responsive and mobile-first layout',
            'Clean, semantic HTML and CSS architecture',
            'Custom animations and transitions',
            'Optimized for performance and accessibility',
        ],
    }


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
