import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashArrowUp,
  faPenToSquare,
  faFloppyDisk,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";

const Posts = ({ refetch, setReFetch }) => {
  const [posts, setPosts] = useState([]);
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState("");
  useEffect(() => {
    if (refetch) {
      fetch("https://pleased-terrier-57.hasura.app/api/rest/posts", {
        headers: {
          "x-hasura-admin-secret":
            "A2lIgrIE3b5gaAIuQJJpZtGfj3fAEGYh9Kq3ykqh6Y3Y5l9bjVM24VScCe59K8VX",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setPosts(data.posts);
          setReFetch(false);
        });
    }
  }, [refetch, setReFetch]);

  const handleDelete = (postId) => {
    fetch("https://pleased-terrier-57.hasura.app/api/rest/delete_post", {
      method: "DELETE",
      headers: {
        "x-hasura-admin-secret":
          "A2lIgrIE3b5gaAIuQJJpZtGfj3fAEGYh9Kq3ykqh6Y3Y5l9bjVM24VScCe59K8VX",
      },
      body: JSON.stringify({ id: postId }),
    }).then(() => setReFetch(true));
  };

  const handleUpdateChange = () => {
    fetch("https://pleased-terrier-57.hasura.app/api/rest/posts", {
      method: "PUT",
      headers: {
        "x-hasura-admin-secret":
          "A2lIgrIE3b5gaAIuQJJpZtGfj3fAEGYh9Kq3ykqh6Y3Y5l9bjVM24VScCe59K8VX",
      },
      body: JSON.stringify({ name: value, id: edit }),
    }).then(() => {
      setPosts((prev) =>
        prev.map((item) => {
          if (item.id === edit) {
            return {
              id: edit,
              name: value,
            };
          }
          return item;
        })
      );
      setEdit(null);
      setValue("");
    });
  };

  return (
    <ol>
      {posts.map((post) => (
        <li key={post.id} style={{ display: "flex", gap: "15px" }}>
          {edit === post.id ? (
            <div>
              <input value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <h2>{post.name}</h2>
          )}
          {edit === post.id ? (
            <div>
              <button onClick={() => handleUpdateChange()}>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </button>
            </div>
          ) : (
            <div>
              <Button
                onClick={() => {
                  setEdit(post.id);
                  setValue(post.name);
                }}
              >
                <FontAwesomeIcon icon={faPenToSquare} />
              </Button>
              <Button onClick={() => handleDelete(post.id)}>
                {" "}
                <FontAwesomeIcon icon={faTrashArrowUp} />
              </Button>
            </div>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Posts;
