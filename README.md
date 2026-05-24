# KodeCamp 6.0 — Student Dashboard

A React student dashboard with dynamic filtering, responsive cards, and comprehensive student profiles. Displays names, tracks, scores, skills, and active status.

## Features

-  Display student profiles with avatars, scores, and skills
-  Modern, responsive UI with gradient designs
-  Conditional filtering (Show All / Show Active Only)
-  Visual score representation with progress bars
-  Dynamic badges for tracks, status, and grades
-  Skills showcase with tags
-  Fully responsive design for devices
-  No state management - uses URL parameters for filtering

## Technologies Used

- **React** - UI library
- **CSS3** - Styling with modern features (gradients, animations, flexbox, grid)
- **JavaScript (ES6+)** - Core functionality


### Getting Started

**Conditional Filtering**

- The dashboard implements conditional filtering without using React state. Instead, it uses URL parameters:


**Filter Buttons**

- All Students - Displays every student in the roster
- Active Students - Shows only students with isActive: true
- Clicking a button updates the URL parameter and reloads the page with filtered results.


**Student Cards**

- Avatar - Circular profile image
- Name - Student's full name
- Badges - Track, status, and grade information
- Score Bar - Visual representation of score with color coding
- Skills - List of technologies with tag styling

**Responsive Design**

- Desktop - 2-column grid layout
- Tablet - 2-column grid with adjusted spacing
- Mobile - Single column layout with stacked buttons

**Interactive Elements**

- Hover effects on cards and buttons
- Smooth transitions and animations
- Active state indicators on filter buttons

**Browser Support**

- Chrome 
- Firefox
- Safari 
- Edge 

**Responsive on all mobile devices**


### Acknowledgments
Copilot, for assisting greatly with debugging and understanding conditional filtering without any state managements

#### Key Learning Outcomes

- Conditional Filtering - Filtering arrays based on conditions
- URL-based State Management - Using URL parameters instead of React state
- Component Composition - Building reusable React components
- Modern CSS Techniques - Gradients, animations, and responsive design
- Props Drilling - Passing data through component hierarchy


#### Author

- Name: Amarachi Onyeke
- GitHub: https://github.com/Ama-a20
- Vercel: student-profile-card-sigma.vercel.app



