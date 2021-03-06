import { createSlice } from '@reduxjs/toolkit';
import { ExtraREducer, AsyncReducer } from '../../Api/index';

const model = createSlice({
  name: 'Dude',
  initialState: {
    data: {},
    data2: {},
    status: null,
    loading: '',
  },
  reducers: {},
  extraReducers: {
    [AsyncReducer('Dude/API').GET.fulfilled]: (state, { payload }) => {
      state.data = payload;
      state.status = 'success';
    },
    [AsyncReducer('Dude/API2').GET.fulfilled]: (state, { payload }) => {
      state.data2 = payload;
      state.status = 'success';
    },
  },
});

export default model.reducer;
