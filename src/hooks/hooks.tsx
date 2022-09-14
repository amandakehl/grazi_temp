import create from 'zustand'

interface loaderStore {
  isLoading: boolean;
  endLoading: () => void;
  startLoading: () => void;
}

const useLoaderStore = create<loaderStore>((set) => ({
  isLoading: false,
  endLoading: () => set({ isLoading: false }),
  startLoading: () => set({ isLoading: true }),
}))

export default useLoaderStore