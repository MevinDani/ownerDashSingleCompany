import { createSlice,createAsyncThunk, createAction } from "@reduxjs/toolkit";
import { empService } from "./EmpService";

export const getAllEmployees=createAsyncThunk("emp/getemployees",async (searchdata,thunkAPI)=>{
    try{
        return await empService.getEmployees(searchdata)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const getAllEmp=createAsyncThunk("emp/get",async (thunkAPI)=>{
    try{
        return await empService.getEmps()
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const CreateEmp=createAsyncThunk("emp/create",async (values,thunkAPI)=>{
    try{
        return await empService.createEmps(values)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const EmpDetails=createAsyncThunk("emp/details",async (empId,thunkAPI)=>{
    try{
        return await empService.Empdtls(empId)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const CreateAlvnce=createAsyncThunk("emp/createAlvnce",async (values,thunkAPI)=>{
    try{
        return await empService.createAllowance(values)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const CreateInc=createAsyncThunk("emp/createInc",async (values,thunkAPI)=>{
    try{
        return await empService.createIncrement(values)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const GetAlv=createAsyncThunk("emp/getAlv",async (emp,thunkAPI)=>{
    try{
        return await empService.getAllowance(emp)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

export const GetInc=createAsyncThunk("emp/getInc",async (emp,thunkAPI)=>{
    try{
        return await empService.getIncrement(emp)
    }catch(errors){
        return thunkAPI.rejectWithValue(errors)
    }
})

const empState={
    Emp:"",
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:""
}
export const resetState=createAction("Reset_all")
export const empSlice=createSlice({
    name:"employee",
    initialState:empState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(getAllEmp.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllEmp.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.emplist=action.payload;
        }).addCase(getAllEmp.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(CreateEmp.pending,(state)=>{
            state.isLoading=true;
        }).addCase(CreateEmp.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.CreatedEmp=action.payload;
        }).addCase(CreateEmp.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(EmpDetails.pending,(state)=>{
            state.isLoading=true;
        }).addCase(EmpDetails.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.EmpDetails=action.payload;
        }).addCase(EmpDetails.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(CreateAlvnce.pending,(state)=>{
            state.isLoading=true;
        }).addCase(CreateAlvnce.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdAlvnce=action.payload;
        }).addCase(CreateAlvnce.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(CreateInc.pending,(state)=>{
            state.isLoading=true;
        }).addCase(CreateInc.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.createdInc=action.payload;
        }).addCase(CreateInc.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(GetAlv.pending,(state)=>{
            state.isLoading=true;
        }).addCase(GetAlv.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.GetAlv=action.payload;
        }).addCase(GetAlv.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(GetInc.pending,(state)=>{
            state.isLoading=true;
        }).addCase(GetInc.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.GetInc=action.payload;
        }).addCase(GetInc.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        }).addCase(getAllEmployees.pending,(state)=>{
            state.isLoading=true;
        }).addCase(getAllEmployees.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.isError=false;
            state.isSuccess=true;
            state.GetEmployees=action.payload;
        }).addCase(getAllEmployees.rejected,(state,action)=>{
            state.isError=true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message=action.error
        })
       
    }
})

export default empSlice.reducer;
