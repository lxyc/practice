package main

import "fmt"

func main() {
	const freezingF, boiling = 32.0, 212.0
	fmt.Printf("%g°F = %g°C\n", freezingF, fToc(freezingF))
	fmt.Printf("%g°F = %g°C\n", boiling, fToc(boiling))
}

func fToc(f float64) float64 {
	return (f - 32) * 5 / 9
}
