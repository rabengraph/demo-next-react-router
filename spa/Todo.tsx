import { BrowserRouter, Link, Route, useParams } from "react-router-dom";

export function Todo() {
  const params = useParams<{ id: string }>();
  return (
    <div>
      <h1>Todo: {params.id}</h1>
      <Link to="/">Back</Link>
    </div>
  );
}
