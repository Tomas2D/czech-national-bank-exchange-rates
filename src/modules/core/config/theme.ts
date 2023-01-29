const colors = {
  text: '#312e2e',
  title: '#000',
  layoutBg: '#e6e1e1',
  contentBg: '#fff',
  input: '#151515',
  inputBg: '#ffffff',
  error: '#534c4c',
  errorBg: '#e6b7b7',
  errorCodeBorder: '#191818',
  primaryButton: '',
  primaryButtonBg: '',
} as const

export const theme = {
  fontFamily: "'Roboto', sans-serif",
  colors,
} as const

export type ThemeType = typeof theme
