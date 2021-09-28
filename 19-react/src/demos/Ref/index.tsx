import React from "react";
import DomClass from './DomClass';
import DomFunction from './DomFunction'
import ForwardRef from './ForwardRef';
import InstanceClass from './InstanceClass'
import InstanceFunction from './InstanceFunction'
import MultiRef from './MultiRef'

const Ref = () => {
  return <div>
		<DomClass />
		<DomFunction />
		<ForwardRef />
		<InstanceClass />
		<InstanceFunction />
		<MultiRef />
	</div>;
};

export default Ref;
