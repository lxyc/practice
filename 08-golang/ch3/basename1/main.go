package main

import (
	"fmt"
)

func basename(s string) string {
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '/' {
			s = s[i+1:]
			break
		}
	}
	for i := len(s) - 1; i >= 0; i-- {
		if s[i] == '.' {
			s = s[:i]
			break
		}
	}
	return s
}

func main() {
	s := []int{0, 1, 2, 3, 4, 5}
	weekSlice := [...]string{7: "Sunday", 1: "Monday", 2: "Tuesday", 3: "Wendsday", 4: "Thursday", 5: "Firday", 6: "Saturday"}
	// weekArr := [...]string{"Sunday", "Monday", "Tuesday", "Wendsday", "Thursday", "Firday", "Saturday"}
	// fmt.Println(cap(weekSlice[3:4]), len(weekSlice[3:4]))
	// for i, v := range weekSlice {
	// 	fmt.Println(i, "---", v)
	// }
	fmt.Println(weekSlice[:5])
	reverse(s[:2])
	reverse(s[2:])
	reverse(s[:])
	fmt.Println(s)
}

func reverse(s []int) {
	for i, j := 0, len(s)-1; i < j; i, j = i+1, j-1 {
		s[i], s[j] = s[j], s[i]
	}
}
