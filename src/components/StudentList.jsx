import StudentCard from './StudentCard';

const StudentList = ({ students, title = 'All Students', children }) => {

    if (!students || students.length === 0) {
    return (
      <div className="student-list-section">
        <h2 className="section-title">{title}</h2>
        <p>No students to display</p>
        {children && <div className="list-footer">{children}</div>}
      </div>
    );
  }
  
  return (
    <div className="student-list-section">
      <h2 className="section-title">{title}</h2>
      <div className="cards-grid">
        {students.map(student => (
          <StudentCard key={student.id} student={student} />
        ))}
      </div>
      {children && <div className="list-footer">{children}</div>}
    </div>
  );
};

export default StudentList;