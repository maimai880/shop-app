export type User = { name: string }
export type LoginData = { name: string; password: string }
export type RegisterData = LoginData & { cart: string }
