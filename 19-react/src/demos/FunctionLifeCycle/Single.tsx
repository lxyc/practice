import React, { useState } from "react";

interface SingleProps {
  name: string;
}
const Single: React.FC<SingleProps> = ({ name }) => {
  const [count, setCount] = useState(0);

  const log = React.useCallback(
    (...args: string[]) => {
      console.log(`--${name}--${args.join()}--`);
    },
    [name]
  );

  React.useEffect(() => {
    log("--mount--");
    return () => {
      log("--unmount--");
    };
  }, [log, count]);

  log("--function body--");

  return (
    <div>
      {count} <button onClick={() => setCount((p) => p + 1)}>CHANGE</button>
    </div>
  );
};

export default Single;
