//   E:\My Mob Projects\3 Flutter abo hamza\flutter-porfolio\src\data\projects.js


export const projects = [
  {
    id: 1,
    title: 'TaskFlow Pro',
    shortDesc: 'Complete task management application',
    fullDesc: 'A comprehensive task management application built with Flutter that helps users organize their daily tasks, set reminders, and track productivity with beautiful analytics.',
    longDesc: `TaskFlow Pro is a productivity application designed to help users manage their daily tasks efficiently. Built with Flutter and Firebase, it features real-time synchronization across devices, smart notifications, and detailed productivity analytics.

Key Features:
• Real-time task synchronization using Firebase
• Smart notification system with custom scheduling
• Productivity analytics with charts and insights
• Dark/Light mode with custom themes
• Offline capability with local database
• Task categorization and priority levels

Technologies: Flutter, Firebase (Auth, Firestore, Cloud Functions), Provider State Management, Local Notifications, Syncfusion Charts

Challenges Solved:
• Implemented efficient offline-first architecture
• Optimized Firestore queries for real-time updates
• Created smooth animations for task transitions`,
    technologies: ['Flutter', 'Firebase', 'Provider', 'Local Notifications', 'SQLite'],
    features: [
      'Real-time Cloud Sync',
      'Smart Notifications',
      'Productivity Analytics',
      'Dark/Light Theme',
      'Offline Support'
    ],
    screens: [
      '/screens/taskflow1.jpg',
      '/screens/taskflow2.jpg',
      '/screens/taskflow3.jpg',
      '/screens/taskflow4.jpg'
    ],
    githubUrl: 'https://github.com/yourusername/taskflow-pro',
    liveDemo: 'https://play.google.com/store/apps/details?id=com.example.taskflow',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    challenges: [
      'Implementing efficient offline-first architecture',
      'Optimizing Firestore queries for real-time updates',
      'Creating smooth animations for UI transitions'
    ],
    role: 'Solo Developer - Designed, developed, and deployed the entire application'
  },
  {
    id: 2,
    title: 'WeatherWise',
    shortDesc: 'Interactive weather app with accurate forecasts',
    fullDesc: 'A beautiful weather application providing real-time weather updates, 7-day forecasts, and weather alerts with stunning visualizations.',
    longDesc: `WeatherWise delivers accurate weather information with a focus on user experience. The app features location-based weather, detailed forecasts, and severe weather alerts.

Features:
• Real-time weather updates from multiple sources
• 7-day detailed forecast with hourly breakdown
• Severe weather alerts and notifications
• Beautiful weather visualizations and animations
• Multiple location support
• Customizable widgets for home screen

Tech Stack: Flutter, BLoC Pattern, REST APIs (OpenWeatherMap), Google Maps API, Shared Preferences

Performance:
• Reduced API calls by 40% with smart caching
• Achieved 60 FPS smooth animations
• Implemented efficient memory management for weather data`,
    technologies: ['Flutter', 'BLoC', 'REST API', 'Google Maps', 'Shared Preferences'],
    features: [
      'Real-time Weather Updates',
      '7-Day Forecast',
      'Weather Maps',
      'Severe Weather Alerts',
      'Custom Widgets'
    ],
    screens: [
      '/screens/weather1.jpg',
      '/screens/weather2.jpg',
      '/screens/weather3.jpg'
    ],
    githubUrl: 'https://github.com/yourusername/weatherwise',
    liveDemo: null, // or Play Store link
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    challenges: [
      'Handling multiple weather data sources efficiently',
      'Creating smooth weather animation transitions',
      'Implementing accurate location services'
    ],
    role: 'Lead Developer - Architected the app and implemented core features'
  },
  {
    id: 3,
    title: 'E-Commerce Mobile',
    shortDesc: 'Full-featured e-commerce app',
    fullDesc: 'A complete e-commerce solution with product listings, shopping cart, payment integration, and order tracking.',
    // Add similar detailed structure...
  },
  {
    id: 4,
    title: 'FitTrack',
    shortDesc: 'Fitness tracking application',
    fullDesc: 'Comprehensive fitness app with workout plans, step tracking, and health data integration.',
    // Add similar detailed structure...
  }
];

// Helper function to get project by ID
export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};