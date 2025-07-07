export default [
    {
        id: 3,
        title: "Academitna",
        description: "Focuses on educational offerings and emphasizes the value of group classes, courses, and individual lessons.",
        images: [
            "education1.png",
            "education5.png",
            "education3.png",
            "education4.png",
            "education2.png"
        ],
        githubLink: "https://github.com/yousefha2002/Education_reactjs",
        headline: "FrontEnd website build by Reactjs on the client.",
        skills: ["ReactJs", "Tailwindcss", "React social icons"]
    },
    {
        id: 4,
        title: "Clinic",
        description: "Web application designed to manage patients, doctors, appointments, and transactions in a medical setting.",
        images: [
            "clinic1.png",
            "clinic2.png",
            "clinic3.png",
            "clinic4.png",
            "clinic5.png",
            "clinic6.png",
            "clinic7.png"
        ],
        githubLink: "https://github.com/yousefha2002/clinic_nextjs_nestjs",
        headline: "Fullstack website build by NextJs on the client and NestJs on the server.",
        skills: ["NextJs15", "Tailwindcss", "NestJs", "Sequilize"],
        usecases: [
            {
                role: "Admin",
                functions: [
                    "Create, update, and delete departments (e.g., cardiology, dermatology, etc.).",
                    "Create user accounts, assign roles (Doctor or Patient), and manage user access.",
                    "Create, update, and cancel appointments for both doctors and patients.",
                    "Update the date and time of appointments.",
                    "View all appointments, track their status (Upcoming, Completed, or Canceled).",
                    "Create transactions for patients.",
                    "Determine the status of a transaction (Paid or not) and set the fee amount.",
                    "View charts and graphs, displaying data about daily appointments and transactions throughout the year."
                ]
            },
            {
                role: "Doctor",
                functions: [
                    "See a list of all their upcoming appointments.",
                    "View detailed patient information for each appointment.",
                    "Change their email and update their password."
                ]
            },
            {
                role: "Patient",
                functions: [
                    "View their personal details and medical records (if available).",
                    "See a history of their upcoming and past appointments.",
                    "Check the status of their appointments.",
                    "View their transaction history, including appointment payments and status (Paid or Pending).",
                    "Update their email address and change their password for security."
                ]
            }
        ]
    },
    {
        id: 5,
        title: "Satar",
        description: "Shows the latest news on different topics, keeping users updated with the most recent events and trends.",
        images: [
            "satar1.png",
            "satar2.png",
            "satar3.png"
        ],
        githubLink: "https://github.com/yousefha2002/satar_nextjs",
        headline: "FrontEnd website build by NextJs on the client.",
        skills: ["NextJs15", "Tailwindcss"],
        livelink: "https://satar.vercel.app/"
    },
    {
        id: 6,
        title: "CourseHub",
        description: "An online platform for browsing and enrolling in courses. Built with a clean design and smooth navigation to enhance the learning experience.",
        images: ["courseHub.png"],
        githubLink: "https://github.com/yousefha2002/coursehub_nextjs",
        headline: "FrontEnd website built using Next.js and Tailwind CSS.",
        skills: ["NextJs15", "Tailwindcss"],
        livelink: "https://courses-seven-iota.vercel.app/"
    },
    {
        id: 7,
        title: "Zerotodev",
        description: "Zerotodev is an educational web platform designed to help users learn programming through interactive articles, quizzes, points, and gamified features.",
        images: [
            "zero1.png",
            "zero2.png",
            "zero3.png",
            "zero4.png",
            "zero5.png",
            "zero6.png",
            "zero7.png",
            "zero8.png"
        ],
        githubLink: "https://github.com/yousefha2002/zerotodev_nextjs",
        headline: "Fullstack educational platform built using Next.js and NestJS.",
        skills: ["NextJs15", "Tailwindcss", "NestJS", "JWT", "Sequelize"],
        usecases: [
        {
            role: "Guest",
            functions: [
                "Browse programming articles and questions without logging in.",
                "Preview quiz categories and levels."
            ]
        },
        {
            role: "User",
            functions: [
                "Read categorized programming articles and earn +1 point per article.",
                "Solve quizzes and earn +2 points per correct answer.",
                "View quiz history with scores and attempts.",
                "View and answer programming-related questions.",
                "Explore sidebar with top and random questions.",
                "View personal profile with name, bio, image, and stats.",
                "Track earned points and activity (articles, quizzes).",
                "Update email and password."
            ]
        },
        {
            role: "Admin",
            functions: [
                "Create, update, and delete articles, quizzes, and questions.",
                "Manage categories, levels, and quiz content.",
                "Moderate user content and manage users."
            ]
        }
    ]
    }
];
