import { useState } from "react";
import { Outlet } from "react-router-dom";
import AddPosts from "./components/AddPosts/AddPosts";
import Posts from "./components/Posts/Posts";

const TaskFive = () => {
  const [refetch, setReFetch] = useState(true);

  return (
    <div>
      <AddPosts setReFetch={setReFetch} />
      <Posts refetch={refetch} setReFetch={setReFetch} />
      <Outlet />
    </div>
  );
};
export default TaskFive;
