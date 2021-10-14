const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}

export const updateCar = (car) => {
    return {
        type: 'UPDATE_CAR',
        value: car
    }
}

export const fetchMakes = () =>{
    return(dispatch) => {
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const makesAction = {
                    type: 'FETCH_MAKES',
                    value: response.Results
                }
                dispatch(makesAction)
            })
    }
}

export const deleteMake = (makeId) =>{
    console.log(makeId)
    return {
        type: 'DELETE_MAKE',
        value: makeId
    }
}