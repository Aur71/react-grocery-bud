import React from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';

const Item = ({ text, id, removeItem, editItem }) => {
  return (
    <li>
      {text}
      <div className="btn-container">
        <FaEdit className="icon edit" onClick={() => editItem(id)} />
        <FaTrash className="icon delete" onClick={() => removeItem(id)} />
      </div>
    </li>
  );
};

export default Item;
