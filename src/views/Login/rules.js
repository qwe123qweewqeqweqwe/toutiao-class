export const moblieRules = [
  { required: true, message: '请输入手机号' },
  { pattern: /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/, message: '手机号格式错误' }
]

export const codeRiles = [
  { required: true, message: '请输入验证码' },
  { pattern: /^\d{6}$/, message: '验证码格式错误' }
]
