import React from "react";

class DomClass extends React.Component {
  // 创建 Refs
  domRef = React.createRef<HTMLInputElement>();

  componentDidMount() {
    // 访问 Refs
		this.domRef.current!.focus()
  }

  render() {
		// 首次访问值为 null，仅当组件挂载成功后，才会有值
		console.log(this.domRef.current); // null
		return (
			<div>
        <span>Dom-Ref-Class: </span>
				{/* 挂载 Refs */}
        <input type="text" ref={this.domRef} />
      </div>
    );
  }
}

export default DomClass;
