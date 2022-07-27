const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
      <h1>Categories</h1>
      <ul data-cy="available-cat">
        <li>Leetcode</li>
        <li>Daily Problem</li>
      </ul>
      </div>
    </div>
  );
};

export default Sidebar;
