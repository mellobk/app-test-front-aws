import { saveAs } from 'file-saver';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toastApp } from "../../../../shared/application/helpers/common-functions";
import { createInventory, createTask, deleteTask, downloadInventory, getAllInventory, getAllTaksk, getModel, sendEmail, updateTask } from "../../infrastructure/api";

export const initialState = {
  modalCreatetask: false,
  inventory:[],
  tasks: [],
  recientModel: [],
  loadingTasks: false,
  loadingRecientModels: false,
  loadingcreateTask: false,
  newTask: {
    title: "",
    priority: "",
    description: "",
  },
  reloadTask: true,
};

export const homeGetTasks = createAsyncThunk(
  "home/homeGetTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getAllTaksk();
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const homeGetInventory = createAsyncThunk(
  "home/homeGetInventory",
  async (id, { rejectWithValue }) => {
    try {
      const response = await getAllInventory(id);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const createNewTasks = createAsyncThunk(
  "home/createNewTasks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createTask(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const getpdf = createAsyncThunk(
  "home/getpdf",
  async (data, { rejectWithValue }) => {
    try {
      const response = await downloadInventory(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const createNewInventory = createAsyncThunk(
  "home/createNewInventory",
  async (data, { rejectWithValue }) => {
    try {
      const response = await createInventory(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const SendEmails = createAsyncThunk(
  "home/SendEmails",
  async (data, { rejectWithValue }) => {
    try {
      const response = await sendEmail(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const getModels = createAsyncThunk(
  "home/getModels",
  async (data, { rejectWithValue }) => {
    try {
      const response = await getModel(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const updateTasks = createAsyncThunk(
  "home/updateTasks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await updateTask(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);

export const deleteTasks = createAsyncThunk(
  "home/deleteTasks",
  async (data, { rejectWithValue }) => {
    try {
      const response = await deleteTask(data);
      return response;
    } catch (error) {
      toastApp("error", error);
      return rejectWithValue(error);
    }
  }
);


const Home = createSlice({
  name: "home",
  initialState,
  reducers: {
    setModalCreateTask(state, { payload }) {
      state.modalCreatetask = payload;
    },
    setloader(state, { payload }) {
      state.reloadTask = payload;
    },
    setLoaderTask(state, { payload }) {
      const tasks = JSON.parse(JSON.stringify(state.tasks));
      const newTasks = tasks.map((data) => {
        if (data.id === payload) {
          return { ...data, uploadLoading: true };
        }
		return data;
      });
      
	  state.tasks = newTasks;
   
	  
    },
  },
  extraReducers: {
    [homeGetTasks.pending]: (state) => {
      state.loadingTasks = true;
      state.reloadTask = false;
    },
    [homeGetTasks.rejected]: (state, { payload }) => {
      state.loadingTasks = false;
      state.reloadTask = payload.false;
    },
    [homeGetTasks.fulfilled]: (state, { payload }) => {
      const newTasks = payload.data.map((data) => {
        return { ...data, uploadLoading: false };
      });
      state.loadingTasks = false;
      state.tasks = newTasks;

      state.reloadTask = payload.reloadTask;
    },

    [homeGetInventory.pending]: (state) => {
      state.loadingTasks = true;
      state.reloadTask = false;
    },
    [homeGetInventory.rejected]: (state, { payload }) => {
      state.loadingTasks = false;
      state.reloadTask = payload.false;
    },
    [homeGetInventory.fulfilled]: (state, { payload }) => {
      const newinventory = payload.data.map((data) => {
        return { ...data, uploadLoading: false };
      });
      state.loadingTasks = false;
      state.inventory = newinventory;

      state.reloadTask = false;
    },
    
    [SendEmails.pending]: (state) => {
      state.loadingcreateTask = true;
      state.reloadTask = false;
    },
    [SendEmails.rejected]: (state, { payload }) => {
      state.loadingcreateTask = false;
      state.reloadTask = payload.false;
    },
    [SendEmails.fulfilled]: (state, { payload }) => {
      toastApp("success", payload.message);
      state.loadingcreateTask = false;
      state.reloadTask = true;
      state.modalCreatetask = false;
    },

    [createNewTasks.pending]: (state) => {
      state.loadingcreateTask = true;
      state.reloadTask = false;
    },
    [createNewTasks.rejected]: (state, { payload }) => {
      state.loadingcreateTask = false;
      state.reloadTask = payload.false;
    },
    [createNewTasks.fulfilled]: (state, { payload }) => {
      toastApp("success", payload.message);
      state.loadingcreateTask = false;
      state.reloadTask = true;
      state.modalCreatetask = false;
    },
    [createNewInventory.pending]: (state) => {
      state.loadingcreateTask = true;
      state.reloadTask = false;
    },
    [createNewInventory.rejected]: (state, { payload }) => {
      state.loadingcreateTask = false;
      state.reloadTask = true;
    },
    [createNewInventory.fulfilled]: (state, { payload }) => {
      toastApp("success", payload.message);
      state.reloadTask = true;
      state.modalCreatetask = false;
    },
    [getModels.pending]: (state) => {
      state.loadingRecientModels = true;
    },
    [getModels.rejected]: (state, { payload }) => {
      state.loadingRecientModels = false;
    },
    [getModels.fulfilled]: (state, { payload }) => {
      state.loadingRecientModels = false;
      state.recientModel = payload.data;
      state.reloadTask = false;
    },
    [deleteTasks.pending]: (state) => {
      state.loadingcreateTask = true;
      state.reloadTask = false;
    },
    [deleteTasks.rejected]: (state) => {
      state.loadingcreateTask = false;
      state.reloadTask = false;
      
    },
    [deleteTasks.fulfilled]: (state, { payload }) => {
      toastApp("success", payload.message);
      state.loadingcreateTask = false;
      state.reloadTask = true;
      state.modalCreatetask = false;
    },
    [updateTasks.pending]: (state) => {
      state.reloadTask = true;
    },
    [updateTasks.rejected]: (state, { payload }) => {
      state.reloadTask = false;
    },
    [updateTasks.fulfilled]: (state, { payload }) => {
      toastApp("success", payload.message);
      state.reloadTask = true;
      state.modalCreatetask = false;
    },
    [getpdf.pending]: (state) => {
      state.reloadTask = true;
    },
    [getpdf.rejected]: (state, { payload }) => {
      state.reloadTask = false;
    },
    [getpdf.fulfilled]: (state, { payload }) => {
      saveAs(payload, 'newPdf.pdf');
    },
  },
});

export const { setModalCreateTask, setLoaderTask, setloader } = Home.actions;

export default Home.reducer;
