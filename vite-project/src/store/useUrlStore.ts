import { create } from 'zustand';

interface UrlState {
    url: string;
    setUrl: (url: string) => void;
}

const useUrlStore = create<UrlState>((set) => ({
    url: '',
    setUrl: (url) => set({ url }),
}));

export default useUrlStore;