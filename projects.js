// projects.js
// One source of truth for all projects

const PROJECTS = [
    {
        id: 1,
        title: "WildAware",
        category: "web",
        thumbnail: "assets/projects/web/thumbnail.png",
        carouselImages: [
            "assets/projects/web/wildaware-1.png",
            "assets/projects/web/wildaware-2.png",
            "assets/projects/web/wildaware-3.png",
            "assets/projects/web/wildaware-4.png",
            "assets/projects/web/wildaware-5.png",
            "assets/projects/web/wildaware-6.png",
            "assets/projects/web/wildaware-7.png",
            "assets/projects/web/wildaware-8.png",
            "assets/projects/web/wildaware-9.png",
        ],
        overview:
            "WildAware is an interactive wildlife awareness website designed to educate users about animals through visually engaging card-based content.\n" +
            "The platform focuses on making wildlife information accessible, organised, and easy to manage, while also demonstrating full-stack web development fundamentals.",
        tools: ["HTML", "CSS", "JavaScript", "Bootstrap", "Node.js (API)", "Express.js"],
        features: ["View all cards", "Add / Edit / Delete cards", "Responsive UI with Bootstrap"],
        links: {
            live: "https://c219-web-app-ca2-7mna.onrender.com/",
            github: "https://github.com/AinsOolz/C219-Web-App-CA2.git",
            figma: "",
        },
    },

    {
        id: 2,
        title: "Mars Pizza Co.",
        category: "web",
        thumbnail: "assets/projects/web/pizza-1.png",
        demoVideo: "assets/projects/web/webappdemo2.mp4",
        carouselImages: [
            "assets/projects/web/pizza-1.png",
            "assets/projects/web/pizza-2.png",
            "assets/projects/web/pizza-3.png",
            "assets/projects/web/pizza-4.png",
            "assets/projects/web/pizza-5.png",
        ],
        overview:
            "Mars Pizza Co. is a modern pizza shop web application built using React.The website simulates a real online food ordering experience, allowing users to browse a pizza menu, add items to a cart, apply promo codes, and complete a checkout flow. \n" +
            "The project focuses on front-end interactivity, state management, and user experience, while maintaining a clean and responsive design inspired by real food delivery platforms.",
        tools: ["HTML", "CSS", "JavaScript", "React Hooks", "LocalStorage"],
        features: [
            "Menu Ordering",
            "Add items to cart directly from the menu",
            "Cart overlay panel with quantity increase/decrease, removal, auto subtotal and total calculations",
            "Promo code system for percentage discounts",
            "Toast notifications",
            "Checkout page with form details and order summary",
            "Responsive design system to adapt to different screen sizes",
        ],
        links: {
            live: "",
            github: "",
            figma: "",
        },
    },

    {
        id: 3,
        title: "Marsonian's Cards",
        category: "web",
        thumbnail: "assets/projects/web/cards.png",
        demoVideo: "assets/projects/web/webappdemo3.mp4",
        carouselImages: [
            "assets/projects/web/cards.png",
            "assets/projects/web/cards-1.png",
            "assets/projects/web/cards-2.png",
            "assets/projects/web/cards-3.png",
            "assets/projects/web/cards-4.png",
        ],
        overview:
            "Marsonian’s Cards is a web-based card collection management application built using Node.js and Express." +
            "The application allows users to view, add, edit, and delete digital memory cards from different character collections. Each card represents a unique memory and includes details such as category, event, title, description, and an optional image URL." +
            "The project focuses on server-side routing, form handling, and dynamic content rendering, while maintaining a simple and visually cohesive interface styled with Bootstrap.",
        tools: ["Node.js", "Express.js", "HTML", "CSS", "Bootstrap", "JavaScript"],
        features: [
            "View all cards grouped by character category",
            "Add new cards",
            "Can add external image URL for each card",
            "Edit and delete cards",
            "Toast notifications",
            "Search cards by title, event or description",
            "Consistent navigation UI",
        ],
        links: {
            live: "",
            github: "https://github.com/Mardhiah-rp/CA1.Sem1.git",
            figma: "",
        },
    },

    {
        id: 4,
        title: "Animal Quiz App",
        category: "mobile",
        thumbnail: "assets/projects/mobile/animal-1.png",
        demoVideo: "assets/projects/mobile/wildaware-mobile.mp4",
        carouselImages: [
            "assets/projects/mobile/animal-1.png",
            "assets/projects/mobile/animal-2.png",
            "assets/projects/mobile/animal-3.png",
            "assets/projects/mobile/animal-4.png",
            "assets/projects/mobile/animal-5.png",
            "assets/projects/mobile/animal-6.png",
        ],
        overview:
            "The Wildlife Animal Mobile App is a mobile application developed using React Native, designed to educate users about different animal species through an interactive and engaging experience." +
            "The app allows users to browse animal information retrieved from a backend web service, view detailed descriptions, and test their knowledge through an in-app quiz. The project combines mobile UI development, API integration, and interactive user engagement features, making it both educational and user-friendly.",
        tools: ["React Native", "Node.js", "Express.js", "Expo", "JavaScript", "In-memory data storage", "RESTful API"],
        features: [
            "View list of animals retrieved from backend API",
            "Interactive Quiz Feature to test user knowledge and get immediate feedback and score tally",
            "Designed specifically for mobile interaction",
            "Input validation and User Feedback",
        ],
        links: { live: "", github: "https://github.com/C346-AY2025-002/c346-ca2-ca2_team1.git", figma: "" },
    },

    {
        id: 5,
        title: "Bucket List App",
        category: "mobile",
        thumbnail: "assets/projects/mobile/list-7.jpg",
        demoVideo: "assets/projects/mobile/bucketlist.mp4",
        carouselImages: [
            "assets/projects/mobile/list-1.png",
            "assets/projects/mobile/list-2.png",
            "assets/projects/mobile/list-3.png",
            "assets/projects/mobile/list-4.png",
            "assets/projects/mobile/list-5.png",
            "assets/projects/mobile/list-6.png",
            "assets/projects/mobile/list-8.jpg",
        ],
        overview:
            "Bucket List and Memory Tracker is a multi-screen mobile application developed using React Native and Expo." +
            "The app allows users to plan activities with different friends or partners, organise them into categories, track completion progress, and preserve completed activities as meaningful memories with optional photos." +
            "The project focuses on list management, multi-screen navigation, local data persistence, and interactive mobile UI design.",
        tools: ["React Native", "Node.js", "Expo", "Expo Image Picker", "JavaScript", "AsyncStorage", "React Navigation"],
        features: [
            "Create, view and manage list of people and store data in AsyncStorage",
            "Add, Edit and Delete a person or activity",
            "To do activities displayed using SectionList grouped by category",
            "Upload image using Expo Image Picker in the update and complete activities",
            "Display completed activities sorted by completion date",
            "Progress Tracking based on completed activities and total activities",
        ],
        links: { live: "", github: "https://github.com/Mardhiah-rp/CA1.git", figma: "" },
    },

    {
        id: 6,
        title: "MarLia Bakes",
        category: "mobile",
        thumbnail: "assets/projects/mobile/shop-1.png",
        demoVideo: "assets/projects/mobile/shop.mp4",
        carouselImages: [
            "assets/projects/mobile/shop-1.png",
            "assets/projects/mobile/shop-2.png",
            "assets/projects/mobile/shop-3.png",
            "assets/projects/mobile/shop-4.png",
            "assets/projects/mobile/shop-5.png",
            "assets/projects/mobile/shop-6.png",
        ],
        overview:
            "The app allows users to view a bakery menu organised into clear categories such as Cakes and Bread & Cookies. Each menu item is displayed with an image, description, and price information." +
            "Users can also manage the menu by adding new items, editing existing items, and deleting items when necessary. When a new item is added without an image, a placeholder image is automatically used to ensure consistent visual layout.",
        tools: ["React Native", "Expo", "JavaScript", "Expo Font", "React Navigation"],
        features: [
            "Create, view and manage menu of items",
            "Add menu items using Picker, Edit and Delete menu items",
            "Expandable menu cards by tapping on card to expand description",
            "Item uses a placeholder image when no image provided",
            "Dynamic state management using map() and filter() to update menu items",
            "Custom fonts loaded using Expo",
        ],
        links: { live: "", github: "", figma: "" },
    },

    {
        id: 7,
        title: "Learn@RP",
        category: "design",
        tile: "phone", // ✅ design can be phone
        thumbnail: "assets/projects/mobile/ui-4.png",
        demoVideo: "assets/projects/mobile/uidemo.mp4",
        carouselImages: [
            "assets/projects/mobile/ui-1.png",
            "assets/projects/mobile/ui-2.png",
            "assets/projects/mobile/ui-3.png",
            "assets/projects/mobile/ui-4.png",
            "assets/projects/mobile/ui-5.png",
            "assets/projects/mobile/ui-6.png",
            "assets/projects/mobile/ui-7.png",
            "assets/projects/mobile/ui-8.png",
        ],
        overview:
            "This is a ui/ux design of a educational app called Learn@RP. It includes adding courses, keeping the courses in a wishlist" +
            "and accessing the module details and lesson plans. There are videos displayed to help students study linkedin styled.",
        tools: ["Figma"],
        features: [
            "Login and Sign Up, toggle to remember user",
            "View courses and favourite course and modules",
            "View modules in courses and lesson detail plans",
            "Leave comments and reviews for lesson modules.",
        ],
        links: {
            live: "",
            github: "",
            figma: "https://www.figma.com/design/zWgu5RAS19nr9H957526vI/Mardhiah-24049647-Learn-RP-App?node-id=35-130&t=KE88pBoFVp1L2OYk-1",
        },
    },

    {
        id: 8,
        title: "Marsonian Logo Set",
        category: "design",
        tile: "wide", // ✅ design can be wide too
        thumbnail: "img/typo.png",
        carouselImages: ["img/typo.png"],
        overview: "Branding logo explorations for my portfolio identity.",
        tools: ["Illustrator"],
        features: ["Multiple logo variations", "Consistent brand palette"],
        links: { live: "", github: "", figma: "" },
    },

    // ✅ ADD YOUR NEW DESIGN PROJECT HERE (not a phone)
    // Replace thumbnail + images + link when ready
    {
        id: 9,
        title: "Sustainable Clothing Website",
        category: "design",
        tile: "wide", // ✅ THIS makes it show as web-style container, not phone
        thumbnail: "assets/projects/design/ca1d1.png",
        demoVideo : "assets/projects/design/designdemo.mp4",
        carouselImages: ["assets/projects/design/ca1d1.png",
            "assets/projects/design/ca1d2.png",
            "assets/projects/design/ca1d3.png",
            "assets/projects/design/ca1d4.png",
            "assets/projects/design/ca1d5.png",
            "assets/projects/design/ca1d6.png",
            "assets/projects/design/ca1d7.png",
            "assets/projects/design/ca1d8.png",
        ],
        overview: "A sustainable clothing website design that promotes eco-friendly fashion choices. The design focuses on a clean and modern aesthetic, highlighting the importance of sustainability in the fashion industry. It features sections for product showcases, educational content on sustainable practices, and user engagement through interactive elements.",
        tools: ["Figma"],
        features: ["Scroll through categories",
             "View sustainable options by toggle",
             "Interactive elements to educate users on sustainability",
            "Clean and modern design aesthetic",
        "Add to cart feature simulated in design",
    "Quantity selector for products and increase/decrease options",
"price subtotal calculation based on quantity selected"],
        links: { live: "", github: "", figma: "https://www.figma.com/design/VcEenM7q3gebzRk7GFZins/Mardhiah-24049647-EverGreen-Wirefram?node-id=0-1&t=L9EHKe2ZoiedkCVs-1" },
    },
];
