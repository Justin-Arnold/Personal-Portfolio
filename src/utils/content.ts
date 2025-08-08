enum ICON_TYPE {
    GITHUB = "mdi:github",
    EXTERNAL = "tabler:external-link"
}

export default {
    meta: {
        title: "Justin Arnold | Full Stack Engineer | Portfolio",
        description: "Explore the portfolio of Justin Arnold, an Full Stack Engineer with expertise in Typescript, Golang, and a wide array of frameworks and technologies. Browse projects, skills, and get in touch!",
        keywords: 'Full Stack Engineer, Web Development, Software Engineering, Justin Arnold, Programming Portfolio',
        ogUrl: "http://www.justin-arnold.com"
    },
    name: "Justin Arnold" ,
    title: "Software Engineer & Mentor",
    description: "I am passionate about solving problems. Curious by nature and always learning",
    callToAction: "Get In Touch",
    projectsHeader: "These are some of my recent projects",
    projects: [{
        name: "Journalyst",
        description: "This is a plugin for Obsidian that allows you to create and track grouped journal entries for each day.",
        technologies: ["TypeScript", "Obsidian API"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/Journalyst"
        }, {
            icon: ICON_TYPE.EXTERNAL,
            url: "https://obsidian.md/plugins?search=journalyst"
        }]
    }, {
        name: "Shufflr",
        description: "Lightweight, self-hosted image API service. It provides a simple REST API for retrieving images from your collection, along with a web interface for managing images and API keys.",
        technologies: ["Go", "Sqlite"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/shufflr"
        }]
    }, {
        name: "Epoch CLI",
        description: "A go based CLI tool for simple pomodoro based work sessions.",
        technologies: ["Go"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/epoch-cli"
        }]
    }, {
        name: "Dev Dungeon",
        description: "An ongoing project designed to gamify the process of growing as a developer.",
        technologies: ["TypeScript", "Vue"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/dev-dungeon"
        }]
    }, {
        name: "Solved",
        description: "Solved visualizes a backtracking algorithm commonly used to solve sudoku puzzles in an interactive way.",
        technologies: ["TypeScript", "Vue"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/svelte-sudoku-solver"
        }, {
            icon: ICON_TYPE.EXTERNAL,
            url: "https://solved-sudoku-solver.vercel.app/"
        }]
    }, {
        name: "Designer Ipsum",
        description: "A simple Lorem Ipsum generator filled with all the best design jargon to show how good you are.",
        technologies: ["TypeScript", "React"],
        links: [{
            icon: ICON_TYPE.GITHUB,
            url: "https://github.com/Justin-Arnold/designer-ipsum",
        }, {
            icon: ICON_TYPE.EXTERNAL,
            url: "https://designeripsum.xyz"
        }]
    }],
    jobsHeader: "Companies I've worked with",
    jobs: [{
        name: "Common Good Learning Tools",
        title: "Technical Lead",
        time: "June 2024 - Present",
        skills: ["Typescript", "Vue 3", "PHP", "Tailwind", "Storybook"],
        tasks: [
            "Managed and led all projects on the company's largest product, used across 14 state Departments of Education and several private agencies.",
            "Planned and implemented the migration of a complex Vue 2 application to Vue 3, along with various related libraries such as Vuex to Pinia.",
            "Established various systems to improve the developer experience, including but not limited to; comprehensive documentation, end-to-end testing, unit testing, a unified Git Strategy, and CI/CD pipelines.",
            "Lead and Mentor a team of 5 developers, providing guidance on best practices, code reviews, and technical direction.",
            "Implemented a new design system and component library, ensuring consistency and scalability across the product.",
        ]
    },{
        name: "Spectora",
        title: "Sr. Software Engineer",
        time: "March 2024 - February 2025",
        skills: ["Typescript", "Vue 3", "Ruby on Rails", "Tailwind", "Storybook"],
        tasks: [
            "Drove measurable growth by implementing data-backed UX improvements and workflow optimizations that increased conversion rates of trial users to paid users by 5-10%.",
            "Led the Design System pod, responsible for designing, developing, and maintaining an in-house component library and design system, ensuring consistency and scalability for 20+ developers across 4 teams.",
            "Developed high-impact UX features that streamlined onboarding, navigation, and user engagement, directly contributing to higher user retention and revenue growth.",
            "Established documentation standards and best practices for maintaining the component library ecosystem and processes around the Design to Developer component pipeline."
        ]
    },{
        name: "Gradecam",
        title: "Software Engineer",
        time: "February 2022 - March 2024",
        skills: ["Typescript", "Vue 3", "AngularJS", "Tailwind", "Storybook", "MongoDB"],
        tasks: [
            "Rearchitected current in-house component library, doubling development environment performance and reducing bundle size by 80%.",
            "Migrated the main product from AngularJS to Vue 3, focusing on reducing codebase complexity to enhance readability and maintainability.",
            "Designed several new product features, prioritizing user-friendly workflows, actionable data, and accelerated onboarding speed.",
            "Established and maintained documentation for the component library and design system using Storybook."
        ]
    }, {
        name: "NuCamp",
        title: "Instructor",
        time: "December 2021 - February 2023",
        skills: ["Python", "Javascript", "React", "HTML / CSS", "Sqlite"],
        tasks: [
            "Instructed 60+ students spanning 5 courses.",
            "Delivered a range of courses, such as Web Development Fundamentals and Introduction to Data Structures and Algorithms.",
            "Transformed curricula into highly engaging presentations and activities to foster a passion for learning.",
            "Consistently achieved a 4.98 ⭐ rating across all lectures, reflecting a commitment to high-quality instruction and student satisfaction."
        ]
    }, {
        name: "eWebData",
        title: "Software Engineer",
        time: "April 2021 - December 2021",
        skills: ["Vue", "Typescript", "Java", "MongoDB", "Tailwind"],
        tasks: [
            "Updated and maintained a web application in Vue 3 for aggregating and enriching visitor data for car dealers for lead generation.",
            "Developed a user-friendly API, enabling dealers to seamlessly integrate data into subsequent lead management platforms.",
            "Maintained Java backend using Spring.",
            "Designed an intelligent tracking pixel to monitor users across dealer websites, used in the data enrichment process."
        ]
    },{
        name: "U.T Medical Center",
        title: "Software Engineer",
        time: "March 2019 - May 2021",
        skills: ["Python", "Django", "Sqlite", "HTML / CSS", "Javascript"],
        tasks: [
            "Developed a Python desktop application as a user-friendly interface for the Cisco CUCM API, streamlining workflows for the hospital's Unified Communications team.",
            "Designed an inventory management system for efficient tracking and organization of phones and networking equipment within the U.C. team.",
            "Implemented a web interface for convenient remote access to the inventory management system both on and off-campus.",
            "Established a web portal to gather valuable feedback from hospital staff during a significant campus-wide phone system migration, ensuring a smooth transition."
        ]
    }, {
        name: "Storage Express",
        title: "Information Technology Developer",
        time: "May 2015 - February 2019",
        skills: ["Python", "Javascript", "Django", "Sqlite", "HTML / CSS"],
        tasks: [
            "Developed an IT staff portal for comprehensive management of devices across 200+ remote properties, including DVR systems, wireless radios, kiosks, and gate entry systems.",
            "Created a status dashboard displayed at headquarters, enabling real-time monitoring and rapid response to outages of critical equipment at remote locations.",
            "Delivered remote technical support for maintenance teams, assisting with on-site hardware troubleshooting and ensuring optimal performance.",
            "Developed a desktop application to expedite the configuration process for diverse hardware devices, including networking equipment, cameras, and gate control boards, deployed at remote sites."
        ]
        
    }]
}