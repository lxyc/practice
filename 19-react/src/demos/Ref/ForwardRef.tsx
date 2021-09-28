import React from "react";

const Child = React.forwardRef<HTMLInputElement>((_, ref) => (
  <div>
    <span>forwardRef child: </span>
    <input type="text" ref={ref} />
  </div>
));

const ForwardRef = () => {
  const childInputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    childInputRef.current!.focus();
  }, []);
	
  return <Child ref={childInputRef} />;
};

export default ForwardRef;
