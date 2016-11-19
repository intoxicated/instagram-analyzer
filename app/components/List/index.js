import React from 'react';

function List(props) {
  const ComponentToRender = props.component;
  let content = (<div></div>);

  if(props.items) {
    content = props.items.map((item, index) => {
      return (<ComponentToRender key={`item-${index}`} item={item} index={index} {...props} />);
    });
  } else {
    content = (<ComponentToRender />);
  }

  return (
    <div className={props.className}>
      {content}
    </div>
  );
}

List.propTypes = {
  component: React.PropTypes.func.isRequired,
  items: React.PropTypes.array,
};

export default List;
