import * as React from "react";

export function useIsOnServer() {
  const [isOnServer, setIsOnServer] = React.useState(true);
  React.useEffect(() => {
    setIsOnServer(false);
  }, []);

  return isOnServer;
}
