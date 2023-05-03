import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search contacts"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div id="search-spinner" aria-hidden hidden={true} />
            <div className="sr-only" aria-live="polite"></div>
          </form>
        </div>
        <nav>
          <ul>
            <li>
              <a href="/tasks/0">Task 0</a>
            </li>
            <li>
              <a href="/tasks/1">Task 1</a>
            </li>
            <li>
              <a href="/tasks/2">Task 2</a>
            </li>
            <li>
              <a href="/tasks/3">Task 3</a>
            </li>{" "}
            <li>
              <a href="/tasks/4">Task 4</a>
            </li>
            <li>
              <a href="/tasks/5">Task 5</a>
            </li>
          </ul>
        </nav>
      </div>
      <main id="tasks">
        <Outlet />
      </main>
    </>
  );
}
