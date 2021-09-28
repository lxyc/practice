import React from "react";

// const UseRefDemo = () => {
//   const numRef = React.useRef(0);

//   React.useEffect(() => {
//   	numRef.current += 1;
//   }, [])

//   console.log("========");

//   return <div>{numRef.current}</div>;
// };

function usePrevious<T>(state: T) {
  const ref = React.useRef(state);

  React.useEffect(() => {
    ref.current = state;
  }, [state]);

  return ref.current;
}

const UseRefDemo = () => {
  const [count, setCount] = React.useState(0);
  const [count2, setCount2] = React.useState(count);
  const prevCount = usePrevious(count);
	const aa = useRefFn(() => 123)

  const handleClick = () => {
    setCount((p) => p + 1);
  };

  React.useEffect(() => {
    setCount2(count);
  }, [count]);

  console.log("----render----");

  return (
    <div>
      <button onClick={handleClick}>CHANGE</button>
      <div>count: {count}</div>
      <div>count2: {count2}</div>
      {/* prevCount 始终显示前一个值 */}
      <div>prevCount: {prevCount}</div>
      <Time />
			<div>{aa.current}</div>
    </div>
  );
};

const Time = () => {
  const timer = React.useRef<NodeJS.Timeout>();

  React.useEffect(() => {
    timer.current = setInterval(() => {
      console.log("触发了");
    }, 1000);
    return () => clearInterval(timer.current!);
  }, []);

  return null;
};

export function useRefFn<T>(init: () => T) {
  const ref = React.useRef<T>();

  if (ref.current === undefined) {
    ref.current = init();
  }
	
  return ref as React.MutableRefObject<T>;
}

export default UseRefDemo;
