import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'auth',
  initialState: {
    data: null,
    loading: false,
    currentRequestId: undefined,
    error: null,
    message: "Initial message",
    token: 'Init Token'
  },
  reducers: {
    setToken: (state, action) =>{
      state.token = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(authentication.pending, state => {
      state.loading = true
    })
    builder.addCase(authentication.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(authentication.rejected, state => {
      state.loading = false
    })
    builder.addCase(logout.pending, state => {
      state.loading = true
    })
    builder.addCase(logout.fulfilled, (state, action) => {
      state.data = action.payload
      state.loading = false
    })
    builder.addCase(logout.rejected, state => {
      state.loading = false
    })
  }
});

export const { setToken } = slice.actions;

export const authentication = createAsyncThunk('auth/authentication', async (params) => {
  const response = await fetch('https://next.traple.co/api/bff/1', {
    method : 'POST',
    headers: {
      'Accept'      : 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "name": "Eidi Kong",
      "gender": "Male",
      "status": 1,
      "statues":[{"key": 0, "value": "Inactive"}, {"key": 1, "value": "Active"}, {"key": 2, "value": "Limited"}, {"key": 3, "value": "Suspended"}]
    })
  });
  if(response.status == 200){
      return await response.json();
  }
  else
      return { errorStatus: response.status };
});

export const logout = createAsyncThunk('auth/logout', async (params) => {
//   const response = await fetch('https://sit-apps.nextsix.com/admins/login', {
//     method : 'POST',
//     headers: {
//       'Accept'      : 'application/json',
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(params)
//   });
//   if(response.status == 200){
//       return await response.json();
//   }
//   else
//       return { errorStatus: response.status };
  return null;
});


export default slice.reducer;