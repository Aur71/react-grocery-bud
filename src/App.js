import React from 'react';
import { useState } from 'react';
import Item from './Item';
import Alert from './Alert';

const App = () => {
  const [value, setValue] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setIsEditId] = useState(0);

  const showAlert = (show = false, type = 'green', msg = '') => {
    setAlert({ show, type, msg });
  };

  const closeAlert = () => {
    setAlert({ ...alert, show: false });
  };

  const removeItem = (id) => {
    setList(list.filter((item, index) => index !== id));
    showAlert(true, 'red', 'Item removed');
  };

  const clearList = () => {
    setList([]);
    showAlert(true, 'red', 'List cleared');
  };

  const editItem = (id) => {
    setIsEditing(true);
    setValue(list[id]);
    setIsEditId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === '') {
      return showAlert(true, 'red', 'Can`t be blank');
    }

    if (isEditing) {
      const editedList = list.map((item, index) => {
        if (index === editId) {
          item = value;
        }
        return item;
      });

      setValue('');
      return setList(editedList);
    }

    const newList = [value, ...list];
    setList(newList);
    showAlert(true, 'green', 'Item Added');
    setValue('');
  };

  return (
    <main>
      <div className="container">
        {alert.show && <Alert alert={alert} closeAlert={closeAlert} />}
        <h1>Grocery Bud</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>Submit</button>
        </form>

        <ul>
          {list.map((text, index) => {
            return (
              <Item
                text={text}
                key={index}
                id={index}
                removeItem={removeItem}
                editItem={editItem}
              />
            );
          })}
        </ul>
        {list.length > 0 && (
          <button onClick={clearList} className="clearBtn">
            Clear All
          </button>
        )}
      </div>
    </main>
  );
};

export default App;
