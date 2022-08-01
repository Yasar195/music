import create from "zustand";

import { devtools, persist } from 'zustand/middleware'

const dataStore = (set) => ({
    emotion: '',
    addEmotion: (emotion) => {
        set((state) => ({
            emotion: state.emotion
        }))
    }
})

const useDataStore = create(
    devtools(
        persist(dataStore, {
            name: 'datas',
        })
    )
)

export default useDataStore;