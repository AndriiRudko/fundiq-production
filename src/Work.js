import { useState } from "react";

import "./work.css";

const Work = () => {
  const [value, setValue] = useState(null);
  const [isOpen, setOpen] = useState(false);

 

  const handleButtonClick = (url) => {
    window.location.href = url;
  };

  return (
    <div className="form">
      <div className="forma" onClick={() => setOpen(!isOpen)}>
        {value || "Оберіть елемент"}
      </div>
      {isOpen && (
        <div className="options">
          <button
            className="button"
            onClick={() => handleButtonClick("https://google.com")}
          >
            Go to Google
          </button>
          <button
            className="button"
            onClick={() => handleButtonClick("https://facebook.com")}
          >
            Go to Facebook
          </button>
          <button
            className="button"
            onClick={() => handleButtonClick("https://twitter.com")}
          >
            Go to Twitter
          </button>
        </div>
      )}
    </div>
  );
};
export default Work;
