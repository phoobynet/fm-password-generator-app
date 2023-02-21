import generator from 'generate-password'
import { create } from 'zustand'

export interface PasswordGeneratorStore {
  password: string
  length: number
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
  generatePassword: () => void
  setLength: (length: number) => void
}

export const usePasswordGeneratorStore = create<PasswordGeneratorStore>(
  (set, get) => ({
    password: '',
    length: 10,
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: false,
    setLength: (length: number) => set({ length }),
    generatePassword: () => {
      const password = generator.generate({
        length: get().length,
        uppercase: get().uppercase,
        lowercase: get().lowercase,
        numbers: get().numbers,
        symbols: get().symbols,
      })
      set({ password })
    },
  }),
)
