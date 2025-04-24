export default [
    {
        id:1,
        title:"Magalaty",
        description:"News web application designed to provide users with the news articles from various sources.",
        images:[
            "new1.webp",
            "new2.webp",
            "new3.webp",
            "new4.webp",
            "new5.webp",
            "new6.webp",
        ],
        githubLink:"https://github.com/yousefha2002/news_ReactJs_ExpressJs",
        headline:"fullstack website build by Reactjs and Typescript on the client and nodejs with expressjs and squilize on server .",
        usecases:[
            {
                role:"Admin",
                functions:[
                    "Add, update, and delete categories for organizing news articles.",
                    "Add, update, delete, and view news articles.",
                    "Choose the category of the news article from predefined categories.",
                    "Add new authors who contribute to the website.",
                    "Create opinions or articles written by authors, associating them with the respective author.",
                    "Add videos update, and delete to the website, which can be related to news articles or other content.",
                    "Add different social media links for easy sharing and connectivity."
                ]
            },
            {
                role:"User",
                functions:[
                    "Browse through different categories of news articles.",
                    "View a list of news articles sorted by category or publication date.",
                    "Read full articles by clicking on a news headline.",
                    "Articles are displayed with the title, content, images, and other relevant details.",
                    "See a section dedicated to the latest news articles published on the website.",
                    "Also view a list of the most popular news articles based on views."
                ]
            }
        ],
        skills:["ReactJs","Typescript","Material Ui","Redux Toolkit","Form hooks","React Query","Jodit React","ExpressJs","Sequilize"]
    },
    {
        id:2,
        title:"E-commerce",
        description:"web application offering a diverse range of products for users to explore and purchase        ",
        images:[
            "shop1.webp",
            "shop2.webp",
            "shop3.webp",
            "shop4.webp",
        ],
        githubLink:"https://github.com/yousefha2002/E-commerce-reactjs-expressjs",
        headline:"fullstack website build by Reactjs on the client and nodejs with expressjs and mongoose on server .",
        usecases:[
            {
                role:"Admin",
                functions:[
                    "Add, update, and delete categories for organizing products.",
                    "Add, update, delete, and view products.",
                    "Assign categories to products and add attributes like color and size.",
                    "View all orders made by users, mark them as delivered, and manage the order status.",
                    "View charts and graphs analyzing website."
                ]
            },
            {
                role:"User",
                functions:[
                    "Browse through different categories of products.",
                    "View a list of products sorted by category, popularity, or new arrivals.",
                    "Add products to their shopping cart for later purchase.",
                    "Add products to their favorites list for quick access.",
                    "Rate and review products based on their experience.",
                    "Can proceed to checkout to complete their purchase by providing shipping and payment information.",
                    "View their order history, including order status and tracking information."
                ]
            }
        ],
        skills:["ReactJs","Material Ui","Redux Toolkit","Form hooks","React Query","ExpressJs","Mongoose"],
    },
    {
        id:3,
        title:"Academitna",
        description:"Focuses on educational offerings and emphasizes the value of group classes, courses, and individual lessons in a structured learning environment.",
        images:[
            "education1.png",
            "education5.png",
            "education3.png",
            "education4.png",
            "education2.png"
        ],
        githubLink:"https://github.com/yousefha2002/Education_reactjs",
        headline:"FrontEnd website build by Reactjs on the client .",
        skills:["ReactJs","Tailwindcss","React social icons"]
    },
    {
        id:4,
        title:"Clinic",
        description:"web application designed to manage patients, doctors, appointments, and transactions in a medical setting.",
        images:[
            "clinic1.png",
            "clinic2.png",
            "clinic3.png",
            "clinic4.png",
            "clinic5.png",
            "clinic6.png",
            "clinic7.png"
        ],
        githubLink:"https://github.com/yousefha2002/clinic_nextjs_nestjs",
        headline:"fullstack website build by NextJs on the client and NestJs on the server .",
        skills:["NextJs15","Tailwindcss","NestJs","Sequilize"],
        usecases:[
            {
                role:"Admin",
                functions:[
                    "create, update, and delete departments (e.g., cardiology, dermatology, etc.).",
                    "create user accounts, assign roles (Doctor or Patient), and manage user access.",
                    "create, update, and cancel appointments for both doctors and patients.",
                    "update the date and time of appointments.",
                    "view all appointments, track their status (Upcoming, Completed, or Canceled).",
                    "create transactions for patients.",
                    "determine the status of a transaction (Paid or not) and set the fee amount.",
                    "view charts and graphs, displaying data about daily appointments and transactions throughout the year."
                ]
            },
            {
                role:"Doctor",
                functions:[
                    "see a list of all their upcoming appointments.",
                    "view detailed patient information for each appointment.",
                    "change their email and update their password."
                ]
            },
            {
                role:"Pateint",
                functions:[
                    "view their personal details and medical records (if available).",
                    "see a history of their upcoming and past appointments.",
                    "check the status of their appointments.",
                    "view their transaction history, including appointment payments and status (Paid or Pending).",
                    "update their email address and change their password for security."
                ]
            }
        ],
    },
    {
        id:5,
        title:"Satar",
        description:"Shows the latest news on different topics, keeping users updated with the most recent events and trends",
        images:[
            "satar1.png",
            "satar2.png",
            "satar3.png",
        ],
        githubLink:"https://github.com/yousefha2002/satar_nextjs",
        headline:"FrontEnd website build by nextjs on the client .",
        skills:["NextJs15","Tailwindcss"],
        livelink:"https://satar.vercel.app/"
    },
    {
        id: 6,
        title: "CourseHub",
        description: "An online platform for browsing and enrolling in courses. Built with a clean design and smooth navigation to enhance the learning experience.",
        images: [
            "courseHub.png"
        ],
        githubLink: "https://github.com/yousefha2002/coursehub_nextjs",
        headline: "FrontEnd website built using Next.js and Tailwind CSS.",
        skills: ["NextJs15", "Tailwindcss"],
        livelink: "https://courses-seven-iota.vercel.app/"
    }
]