import React from 'react';
import Search from '../containers/Search';

const Sidebar = (props) => {
  return (
    <aside className="c-sidebar">
      <h1 className="c-sidebar__title">Find user</h1>
      <Search />
    </aside>
  );
}

export default Sidebar;
