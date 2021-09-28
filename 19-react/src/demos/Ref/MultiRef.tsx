import React from "react";

const items = [
  { key: 1, label: "item1" },
  { key: 2, label: "item2" },
  { key: 3, label: "item3" },
];
const MultiRef = () => {
  const spanRefs = React.useRef<HTMLSpanElement[]>([]);

  React.useEffect(() => {
    console.log(spanRefs.current);
  }, []);

  return (
    <div>
      {items.map((item) => (
				// 通过回调 Refs 灵活获取 Ref
        <span key={item.key} ref={(el) => spanRefs.current.push(el!)}>
          {item.label}
        </span>
      ))}
    </div>
  );
};

export default MultiRef;
