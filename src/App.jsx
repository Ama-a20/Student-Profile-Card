import Header from './components/Header';
import StudentList from './components/StudentList';
import './App.css';

const students = [
  {
    id: 1,
    firstName: "Amara",
    lastName: "Johnson",
    track: "Frontend",
    score: 92,
    isActive: true,
    skills: ["React", "CSS", "TypeScript"],
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    id: 2,
    firstName: "Chidi",
    lastName: "Okafor",
    track: "Backend",
    score: 67,
    isActive: true,
    skills: ["Python", "Django"],
    avatar: "https://i.pravatar.cc/150?img=3"
  },
  {
    id: 3,
    firstName: "Fatima",
    lastName: "Hassan",
    track: "Frontend",
    score: 88,
    isActive: false,
    skills: ["HTML", "CSS", "JavaScript", "Vue"],
    avatar: "https://i.pravatar.cc/150?img=5"
  },
  {
    id: 4,
    firstName: "Emeka",
    lastName: "Nwosu",
    track: "Mobile",
    score: 45,
    isActive: true,
    skills: [],
    avatar: "https://i.pravatar.cc/150?img=7"
  },
  {
    id: 5,
    firstName: "Zara",
    lastName: "Ahmed",
    track: "Frontend",
    score: 76,
    isActive: true,
    skills: ["React", "Node.js"],
    avatar: "https://i.pravatar.cc/150?img=9"
  },
  {
    id: 6,
    firstName: "David",
    lastName: "Okwu",
    track: "Backend",
    score: 53,
    isActive: false,
    skills: ["SQL"],
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    id: 7,
    firstName: "Grace",
    lastName: "Eze",
    track: "Mobile",
    score: 81,
    isActive: true,
    skills: ["Dart", "Flutter", "Firebase"],
    avatar: "https://i.pravatar.cc/150?img=13"
  },
  {
    id: 8,
    firstName: "Tunde",
    lastName: "Bakare",
    track: "Frontend",
    score: 39,
    isActive: true,
    skills: ["HTML", "CSS"],
    avatar: "https://i.pravatar.cc/150?img=15"
  },
];

const App = () => {
  const averageScore = students.reduce((sum, s) => sum + s.score, 0) / students.length;
  
  // Get filter from URL (no state!)
  const urlParams = new URLSearchParams(window.location.search);
  const currentFilter = urlParams.get('filter') || 'all';
  
  // Conditional filtering based on URL parameter
  const getFilteredStudents = () => {
    if (currentFilter === 'active') {
      return students.filter(student => student.isActive === true);
    }
    return students;
  };
  
  const filteredStudents = getFilteredStudents();
  
  // Function to change filter (updates URL, triggers page reload)
  const changeFilter = (filterType) => {
    window.location.search = `?filter=${filterType}`;
  };
  
  return (
    <div className="app-container">
      <Header 
        title="KodeCamp 6.0 — Student Dashboard" 
        studentCount={students.length}
        averageScore={averageScore}
      />
      
      <div className="filter-buttons">
        <button 
          className={`filter-btn ${currentFilter === 'all' ? 'active' : ''}`}
          onClick={() => changeFilter('all')}
        >
          Show All
        </button>
        
        <button 
          className={`filter-btn ${currentFilter === 'active' ? 'active' : ''}`}
          onClick={() => changeFilter('active')}
        >
          Show Active Only
        </button>
      </div>
      
      <StudentList 
        students={filteredStudents}
        title="Student Roster"
        currentFilter={currentFilter}
        totalStudents={students.length}
      >
        End of student list — {filteredStudents.length} total {currentFilter === 'active' ? '(Active Only)' : '(All Students)'}
      </StudentList>
    </div>
  );
};

export default App;