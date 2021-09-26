import React from "react";

const FancyButton = React.forwardRef<
  HTMLButtonElement,
  { children: React.ReactNode }
>((props, ref) => {
  return <button ref={ref}>{props.children}</button>;
});

const ForwardRef = () => {
	const ref = React.useRef<HTMLButtonElement>(null)
	React.useEffect(() => {
		console.log(ref.current)
	}, [])
	return <FancyButton ref={ref}>Click me!</FancyButton>;
}

export default ForwardRef