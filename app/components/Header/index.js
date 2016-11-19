import React from 'react';

function Header(props) {
  let content = null;

  if(props.content) {
    content = props.content;
  } else {
    content = props.children;
  }

  return (
    <header>
      {content}
    </header>
  );
}

export default Header;
