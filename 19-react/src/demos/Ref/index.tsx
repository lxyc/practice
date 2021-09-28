import React from "react";
import DomClass from './DomClass';
import DomFunction from './DomFunction'
import ForwardRef from './ForwardRef';
import InstanceClass from './InstanceClass'
import InstanceFunction from './InstanceFunction'

const Ref = () => {
  return <div>
		<DomClass />
		<DomFunction />
		<ForwardRef />
		<InstanceClass />
		<InstanceFunction />
	</div>;
};

export default Ref;
