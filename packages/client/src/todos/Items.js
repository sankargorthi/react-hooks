import React from "react";

function Items({ items, del }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          <button onClick={() => del(item)}>x</button>
          {item}
        </li>
      ))}
    </ul>
  );
}
Items.defaultProps = {
  items: [],
  del: () => {}
};

export default Items;
