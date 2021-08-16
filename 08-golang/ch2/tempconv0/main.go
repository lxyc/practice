package main

// Celsius 摄氏温度
type Celsius float64

// Fahrenheit 华式温度
type Fahrenheit float64

const (
	// AbsoluteZeroC 绝对零度
	AbsoluteZeroC Celsius = -273.15
	// FreezingC 结冰点温度
	FreezingC Celsius = 0
	// BoilingC 沸水温度
	BoilingC Celsius = 100
)

// CToF 摄氏温度转华式温度
func CToF(c Celsius) Fahrenheit { return Fahrenheit(c*9/5 + 32) }

// FToC 华氏温度转摄式温度
func FToC(f Fahrenheit) Celsius { return Celsius((f - 32) * 5 / 9) }

func main() {

}
