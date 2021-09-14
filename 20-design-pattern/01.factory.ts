class A {}
class B {}

function factory(name) {
	switch (name) {
		case 1:
			return new A()
		case 2:
			return new B()
	}
}