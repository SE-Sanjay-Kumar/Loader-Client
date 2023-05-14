import { myAxios } from "./helper";

export const register=async (userDetail)=>{
    const userDetailsString = JSON.stringify(userDetail);
    const userDetails = JSON.parse(userDetailsString);
    console.log(userDetails);
    const cnic = parseInt(userDetails.cnic);
    console.log(cnic);

    const data={
        "userName": userDetails.username,
        "companyName": userDetails.companyName,
        "password":userDetails.password,
        "cnic": cnic,
        "phoneNumber" : userDetails.phonenumber
    }
    console.log(data);
    const response = await myAxios.post('api/client/',data);
    return response;
}
export const login=async (userDetail)=>{
    const userDetailsString = JSON.stringify(userDetail);
    const userDetails = JSON.parse(userDetailsString);
    const data={
        "userName": userDetails.username,
        "password":userDetails.password,
    };
    console.log(data);
    const response = await myAxios.post('api/client/login',data);
    console.log(response.data);
    return response;
}