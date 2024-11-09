import axios from "axios";
import { base_url } from "../../utils/AxiosConfig";

const getEmployees = async (searchdata) => {
    const responce = await axios.get(`${base_url}PersonalInfoList/CPAYS/ALL/YES/${searchdata ? searchdata : '-'}`);
    if (responce.data) {
        return responce.data
    }
}


const getEmps = async () => {
    const responce = await axios.get(`${base_url}MasterList/CPAYS/JOBTITLE`);
    if (responce.data) {
        return responce.data
    }
}

const createEmps = async (values) => {
    const responce = await axios.post(`https://cubixweberp.com:199/api/MasterReg/ENTRY/CPAYS/JOBTITLE/${values.description}/-`);
    if (responce.data) {
        return responce.data
    }
}

const Empdtls = async (empId) => {
    const responce = await axios.get(`https://cubixweberp.com:199/api/PersonalInfoList/CPAYS/SINGLE/YES/${empId}`);
    if (responce.data) {
        return responce.data
    }
}

const createAllowance = async (values) => {
    const responce = await axios.post(`https://cubixweberp.com:199/api/PersonalInfoAllowanceReg`, values);
    if (responce.data) {
        return responce.data
    }
}

const createIncrement = async (values) => {
    const responce = await axios.post(`https://cubixweberp.com:199/api/PersonalInfoIncrementReg`, values);
    if (responce.data) {
        return responce.data
    }
}

const getAllowance = async (emp) => {
    const responce = await axios.get(`https://cubixweberp.com:199/api/PersonalInfoAllowanceList/CPAYS/${emp}`);
    if (responce.data) {
        return responce.data
    }
}


const getIncrement = async (emp) => {
    const responce = await axios.get(`https://cubixweberp.com:199/api/PersonalInfoIncrementList/CPAYS/${emp}`);
    if (responce.data) {
        return responce.data
    }
}



export const empService = {
    getEmps,
    createEmps,
    Empdtls,
    createAllowance,
    createIncrement,
    getAllowance,
    getIncrement,
    getEmployees
}