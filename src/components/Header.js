import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'gray',
    color: '#ddd',
    margin: '0',
    left: '0',
    top: '0',
    height: '5rem',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    display: 'flex',
    padding: '0 0.6rem',
    justifyContent: 'space-between',
    borderBottom: '0.2rem solid rgb(184, 184, 184)',

  }
  return (
    <React.Fragment>
      <header style={headerStyle} className="Header">
        <h1>Help Queue</h1>
      </header>
    </React.Fragment>
  );
}

export default Header;

