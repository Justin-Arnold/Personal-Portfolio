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
    title: "Software Engineer",
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
    }] 
}