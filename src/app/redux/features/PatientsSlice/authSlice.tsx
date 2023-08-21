import { PatientsRegistration } from '@/app/api/PatientsEndpoints';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface User {
  emailAddress: string;
  firstName: string
  lastName: string;
  password: string;
  gender: string;
  age: number;
  patientsAddress: string;
  patientsState: string;
  confirmPassword: string;
  phoneNumber: string;
}

interface AuthState {
  isAuthenticated: boolean;
  user: null | User;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user:null,
  error: null,
  loading: false,
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (user: User, thunkAPI) => {
    try {
      await PatientsRegistration(user)
    } catch (error) {
      return thunkAPI.rejectWithValue('Registration failed.');
    }
  }
);

// export const loginUser = createAsyncThunk(
//   'auth/loginUser',
//   async (credentials: { email: string; password: string }, thunkAPI) => {
//     try {
//       // Simulate async login process
//       // Replace with actual API calls
//       await new Promise((resolve) => setTimeout(resolve, 1000));
//       return { username: 'loggedInUser' };
//     } catch (error) {
//       return thunkAPI.rejectWithValue('Login failed.');
//     }
//   }
// );

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.loading = false;
      state.isAuthenticated = true;
      state.user = action.payload as unknown as User;
      state.error = null;
    });
    builder.addCase(registerUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // builder.addCase(loginUser.pending, (state) => {
    //   state.loading = true;
    // });
    // builder.addCase(loginUser.fulfilled, (state, action) => {
    //   state.loading = false;
    //   state.isAuthenticated = true;
    //   state.user = action.payload; 
    //   state.error = null;
    // });
    // builder.addCase(loginUser.rejected, (state, action) => {
    //   state.loading = false;
    //   state.error = action.payload as string;
    // });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
