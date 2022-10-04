import { Route, StaticRouter, Switch } from "react-router-dom";
import { HybridRouter } from "./HybridRouter";
import { Todo } from "./Todo";
import { Todos } from "./Todos";

export function App({ serverLocation }: { serverLocation?: string }) {
  return (
    <HybridRouter serverLocation={serverLocation}>
      <Switch>
        <Route path="/" component={Todos} exact />
        <Route path="/:id" component={Todo} />
      </Switch>
    </HybridRouter>
  );
}
