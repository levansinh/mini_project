import { create } from 'zustand'

const useProductStore = create((set) => ({
  bears: 0 as number,
  increasePopulation: () =>
    set((state: number) => {
      state
    }),
  removeAllBears: () => set({ bears: 0 })
}))

export default useProductStore
