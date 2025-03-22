const employees = [
  {
    id: 1,
    firstname: "Amit",
    email: "e@e.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        title: "Fix UI Bug",
        description: "Resolve the navbar responsiveness issue.",
        date: "2025-03-18",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "API Integration",
        description: "Integrate Stripe payment gateway.",
        date: "2025-03-19",
        category: "Development",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Unit Testing",
        description: "Write unit tests for the authentication module.",
        date: "2025-03-20",
        category: "Testing",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
  {
    id: 2,
    firstname: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create a wireframe for the new homepage.",
        date: "2025-03-18",
        category: "Design",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Fix Backend API",
        description: "Debug and fix errors in the login API.",
        date: "2025-03-19",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "Database Optimization",
        description: "Optimize SQL queries for better performance.",
        date: "2025-03-20",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
  {
    id: 3,
    firstname: "Rajesh",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 0,
    },
    tasks: [
      {
        title: "Conduct User Testing",
        description: "Test the new mobile app with real users.",
        date: "2025-03-18",
        category: "Testing",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Develop Chat Feature",
        description: "Build a real-time chat system using WebSockets.",
        date: "2025-03-19",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "Fix Performance Issues",
        description: "Improve app loading speed by optimizing images.",
        date: "2025-03-20",
        category: "Development",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
    ],
  },
  {
    id: 4,
    firstname: "Sneha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        title: "Create API Documentation",
        description: "Write detailed API documentation using Swagger.",
        date: "2025-03-18",
        category: "Research",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Fix Bug in Checkout",
        description: "Resolve discount calculation issue at checkout.",
        date: "2025-03-19",
        category: "Development",
        active: false,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "Enhance Security",
        description: "Implement JWT authentication for better security.",
        date: "2025-03-20",
        category: "Development",
        active: false,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
  {
    id: 5,
    firstname: "Vikram",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completedTask: 1,
      failedTask: 1,
    },
    tasks: [
      {
        title: "Improve UI Design",
        description: "Redesign the login page for a better user experience.",
        date: "2025-03-18",
        category: "Design",
        active: true,
        newTask: false,
        completedTask: true,
        failedTask: false,
      },
      {
        title: "Setup CI/CD Pipeline",
        description: "Configure GitHub Actions for automated deployment.",
        date: "2025-03-19",
        category: "Development",
        active: false,
        newTask: true,
        completedTask: false,
        failedTask: false,
      },
      {
        title: "Conduct Code Review",
        description: "Review PRs and suggest improvements.",
        date: "2025-03-20",
        category: "Development",
        active: true,
        newTask: false,
        completedTask: false,
        failedTask: true,
      },
    ],
  },
];

const admin = [
  {
    id: 1,
    firstname: "Neha",
    email: "admin@example.com",
    password: "123",
  },
];

export const setlocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getlocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
