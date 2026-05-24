const StatBar = ({ score, label = 'Score' }) => {

    const barColor = 
    score >= 80 ? '#4caf50' :  
    score >= 60 ? '#ff9800' :   
    '#f44336';                  
  
  return (
    <div className="stat-bar-container">
      <div className="stat-label">
        <span>{label}:</span>
        <span className="stat-score">{score}%</span>
      </div>
      <div className="stat-bar-bg">
        <div 
          className="stat-bar-fill" 
          style={{ 
            width: `${score}%`, 
            backgroundColor: barColor 
          }}
        />
      </div>
    </div>
  );
};

export default StatBar;