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
        "userName": "SyedMubarak",
        "password":"Syed!123",
    };
    // const data={
    //     "userName": userDetails.username,
    //     "password":userDetails.password,
    // };
    console.log(data);
    const response = await myAxios.post('api/client/login',data);
    console.log(response.data);
    return response;
}


export const getAllOrder=async ()=>{
    const response=myAxios.get('api/orders/');
    return response;
}

export const getVehicleType=async ()=>{
    const response=myAxios.get('api/vehicle-type/');
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
            "id": Data.id,
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
    console.log(data);
   const response = myAxios.post('api/orders/',data);
   return response;
}