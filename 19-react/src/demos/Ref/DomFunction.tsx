import React from "react";

const DomFunction = () => {
  // 创建 Refs
  const domRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    // 访问 Refs
    domRef.current!.focus();
  }, []);

  return (
    <div>
      <span>Dom-Ref-Function: </span>
      {/* 挂载 Refs */}
      <input type="text" ref={domRef} />
    </div>
  );
};

export default DomFunction;
