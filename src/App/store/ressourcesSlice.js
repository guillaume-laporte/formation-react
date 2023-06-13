import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    image: [],
    memes: []
}

const ressourcesSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {}
});

// export const {} = ressourcesSlice.actions

export default ressourcesSlice.reducer
