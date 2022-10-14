import React, { useEffect } from 'react';

const Alert = ({ alert, closeAlert }) => {
  useEffect(() => {
    let timeout = setTimeout(() => {
      closeAlert();
    }, 3000);

    return () => clearTimeout(timeout);
  }, [alert]);

  const { type, msg } = alert;
  return <p className={`alert ${type}`}>{msg}</p>;
};

export default Alert;
