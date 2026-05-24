import Badge from './Badge';
import StatBar from './StatBar';

const getGradeLetter = (score) => {
  if (score >= 90) return 'A';
  if (score >= 80) return 'B';
  if (score >= 70) return 'C';
  if (score >= 60) return 'D';
  return 'F';
};

const StudentCard = ({ student }) => {

    const { 
    firstName, 
    lastName, 
    track, 
    score, 
    isActive, 
    skills, 
    avatar 
  } = student;
  
  const fullName = `${firstName} ${lastName}`;
  const gradeLetter = getGradeLetter(score);
  const statusLabel = isActive ? 'Active' : 'Inactive';
  
  const cardClassName = `student-card ${!isActive ? 'inactive' : ''}`;
  
  return (
    <div className={cardClassName}>
      <div className="card-content">
        <div className="avatar-section">
          <img src={avatar} alt={fullName} className="avatar" />
        </div>
        
        <h3 className="student-name">{fullName}</h3>
        
        <div className="badge-group">
          <Badge label={track} type="track" />
          <Badge label={statusLabel} type="status" />
          <Badge label={`Grade: ${gradeLetter}`} type="grade" />
        </div>
        
        <StatBar score={score} label="Score" />
        
        <div className="skills-section">
          <div className="skills-title">Skills</div>
          {skills.length === 0 ? (
            <p className="empty-skills">No skills listed yet</p>
          ) : (
            <ul className="skills-list">
              {skills.map((skill, idx) => (
                <li key={idx} className="skill-tag">{skill}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentCard;