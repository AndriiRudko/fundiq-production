import React from "react";
import { useState } from "react";
function AddPosts({ setReFetch }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetch("https://pleased-terrier-57.hasura.app/api/rest/posts", {
        method: "POST",
        headers: {
          "x-hasura-admin-secret":
            "A2lIgrIE3b5gaAIuQJJpZtGfj3fAEGYh9Kq3ykqh6Y3Y5l9bjVM24VScCe59K8VX",
        },
        body: JSON.stringify({ name: inputValue }),
      }).then(() => setReFetch(true));
      setInputValue("");
    }
  };
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

export default AddPosts;
