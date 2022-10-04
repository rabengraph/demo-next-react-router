import { BrowserRouter, Link, Route } from "react-router-dom";

export function Todos() {
  return (
    <div>
      Todos...
      <ul>
        <li>
          <Link to="/1">Todo 1</Link>
        </li>
        <li>
          <Link to="/2">Todo 2</Link>
        </li>
        <li>
          <Link to="/3">Todo 3</Link>
        </li>
      </ul>
    </div>
  );
}
