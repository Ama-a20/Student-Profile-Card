const Header = ({ title, studentCount, averageScore }) => {
  
  const roundedAverage = averageScore.toFixed(1);
  
  return (
    <header className="header">
      <h1>{title}</h1>
      <div className="header-stats">
        <span>{studentCount} Students Enrolled</span>
        <span>|</span>
        <span>Class Average: {roundedAverage}%</span>
      </div>
    </header>
  );
};

export default Header;