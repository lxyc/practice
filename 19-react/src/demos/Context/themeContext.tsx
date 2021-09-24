import React from "react";

export enum EnumTheme {
  light = "light",
  dark = "dark",
}
type ThemeCtxType = [EnumTheme, (theme: EnumTheme) => void];

// 1. 通常情况下，context 需要成对出现，用于值的修改，建议使用 useState/useReducer 的方式
// 2. 注意，此处的类型需要手动改成 Tuple 类型
export const defaultThemeCtx: ThemeCtxType = [
  EnumTheme.light,
  (theme: EnumTheme) => {},
];

// 创建 Context 对象
export default React.createContext(defaultThemeCtx);
