import { myAxios } from "./helper";

export const register=async (userDetail)=>{
    const userDetailsString = JSON.stringify(userDetail);
    const userDetails = JSON.parse(userDetailsString);
    const cnic = parseInt(userDetails.cnic);

    const data={
        "userName": userDetails.username,
        "companyName": userDetails.companyName,
        "password":userDetails.password,
        "cnic": cnic,
        "phoneNumber" : userDetails.phonenumber
    }
    const response = await myAxios.post('api/client/',data);
    return response;
}
export const login=async (userDetail)=>{
    const userDetailsString = JSON.stringify(userDetail);
    const userDetails = JSON.parse(userDetailsString);
    const data={
        "userName": "SyedMubarak",
        "password":"Syed!123",
    };
    // const data={
    //     "userName": userDetails.username,
    //     "password":userDetails.password,
    // };
    const response = await myAxios.post('api/client/login',data);
    return response;
}

export const getUser=async (id)=>{
    const response=myAxios.get(`api/client/${id}`);
    return response;
}


export const updateUser=async (data)=>{
    const Data={
        "userName":data.userName,
        "companyName": data.companyName,
        "password":data.newPassword,
        "cnic": data.cnic,
        "phoneNumber" : data.phoneNumber
    }
    console.log(data);
    const response=myAxios.put(`api/client/${data.id}`,Data);
    return response;
}

export const addReview=async (data)=>{
    const Data={

    };
    const response=myAxios.get(`api/review/${data.orderId}/client-review`);
    return response
}
export const getReview=async (data)=>{
    const Data={

    };
    const response=myAxios.get(`api/review/${data.orderId}`);
    return response
}

export const getAllOrder=async ()=>{
    const response=myAxios.get('api/orders/');
    return response;
}

export const getVehicleType=async ()=>{
    const response=myAxios.get('api/vehicle-type/');
    return response;
}
export const getAllVehicles=async ()=>{
    const response=myAxios.get('api/vehicle/');
    return response;
}

export const updateOrderStatus=async (Data)=> {
   
    const pickup=Data.pickuplatitude+","+Data.pickuplongitude;
    const dropoff=Data.dropOffLatitude+","+Data.dropOffLongitude;
    Data.size=parseInt(Data.size);
    Data.weight=parseInt(Data.weight);

    let data={
        "orderId": Data.orderId,
        "orderName": Data.orderName,
        "noOfLabors": Data.noOfLabors,
        "totalWeight": Data.weight,
        "totalSize": Data.size,
        "fragility": false,
        "status": {
            "statusId": Data.statusId,
            "status": Data.status
        },
        "price": Data.price,
        "client": {
            "id": Data.client.id,
            "userName": "cent1",
            "password": "mypassword",
            "phoneNumber": "1234567890",
            "cnic": 1234567890123,
            "companyName": "company"
        },
        "driver": {
            "id": 1,
            "userName": "funny_driver",
            "password": "2323",
            "phoneNumber": "24433232332",
            "cnic": 434343434434,
            "licenseNumber": "232332",
            "yearsOfExperience": 32,
            "salary": 23232,
            "foodCost": 2323,
            "status": {
                "statusId": 1,
                "status": "busy"
            },
            "vehicle": {
                "vehicleId": 6,
                "name": "formevehicle",
                "maxWeightCarry": 3434,
                "mileage": 3434.0,
                "plateNo": "V234",
                "cost": {
                    "maintenanceCost": 645.0,
                    "fuelCost": 434.0
                },
                "vtype": {
                    "typeId": 3,
                    "typeName": "container"
                },
                "status": {
                    "statusId": 4,
                    "status": "assigned"
                }
            }
        },
        "payment": {
            "paymentId": 1,
            "paymentMode": "Credit Card"
        },
        "pickUp": pickup,
        "dropOff": dropoff,
        "estimatedArrivalOfGoods": null,
        "schedule": Data.date
    }
    const response=myAxios.put(`api/orders/${Data.orderId}`,data);
    return response;
}

export const getOrder=async (id)=>{
    const response=myAxios.get(`api/orders/${id}`)
    return response;
}

export const placeOrder=async (Data) => {
    const pickup=Data.pickuplatitude+","+Data.pickuplongitude;
    const dropoff=Data.dropOffLatitude+","+Data.dropOffLongitude;
    Data.size=parseInt(Data.size);
    Data.weight=parseInt(Data.weight);
    const data={
        "orderName": Data.ordername,
        "noOfLabors": Data.labour,
        "totalWeight": Data.weight,
        "totalSize": Data.size,
        "fragility": false,
        "status": {
            "statusId": 2,
            "status": "Bidding"
        },
        "price": Data.price,
        "client": {
            "id": Data.clientId,
            "userName": "cent1",
            "password": "mypassword",
            "phoneNumber": "1234567890",
            "cnic": 1234567890123,
            "companyName": "company"
        },
        "driver": {
            "id": 1,
            "userName": "funny_driver",
            "password": "2323",
            "phoneNumber": "24433232332",
            "cnic": 434343434434,
            "licenseNumber": "232332",
            "yearsOfExperience": 32,
            "salary": 23232,
            "foodCost": 2323,
            "status": {
                "statusId": 1,
                "status": "busy"
            },
            "vehicle": {
                "vehicleId": 6,
                "name": "formevehicle",
                "maxWeightCarry": 3434,
                "mileage": 3434.0,
                "plateNo": "V234",
                "cost": {
                    "maintenanceCost": 645.0,
                    "fuelCost": 434.0
                },
                "vtype": {
                    "typeId": 3,
                    "typeName": "container"
                },
                "status": {
                    "statusId": 4,
                    "status": "assigned"
                }
            }
        },
        "payment": {
            "paymentId": 1,
            "paymentMode": "Credit Card"
        },
        "pickUp": pickup,
        "dropOff": dropoff,
        "estimatedArrivalOfGoods": null,
        "schedule": Data.date
    }
   const response = myAxios.post('api/orders/',data);
   return response;
}