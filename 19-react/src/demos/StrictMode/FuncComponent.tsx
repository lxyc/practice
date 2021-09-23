import React from "react";
const { log } = console;

const FuncComponent = () => {
  const [count] = React.useState(() => {
    log("---useState---");
    return 1;
  });

  const doubleCount = React.useMemo(() => {
    log("---useMemo---");
    return 2 * count;
  }, [count]);

  log("---function body---");

  return (
    <div>
      {count}
      {doubleCount}
    </div>
  );
};

export default FuncComponent;
