// 用于接口，表示继承
interface T12 {
  name: string,
}

interface T22 {
  sex: number,
}

/**
 * @example
 * T3 = {name: string, sex: number, age: number}
 */
interface T3 extends T12, T22 {
  age: number,
}

// 条件判断
/**
 * @example
 * type A1 = 1
 */
 type A1 = 'x' extends 'x' ? 1 : 2;

 /**
	* @example
	* type A2 = 2
	*/
 type A2 = 'x' | 'y' extends 'x' ? 1 : 2;
 
 /**
	* @example
	* type A3 = 1 | 2
	*/
 type P<T> = T extends 'x' ? 1 : 2;
 type A3 = P<'x' | 'y'>
 