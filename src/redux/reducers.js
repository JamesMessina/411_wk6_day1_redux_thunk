import { combineReducers } from 'redux'

const user = (state = null) => state

const cars = (state = [], action) => {
    switch(action.type) {
        case 'ADD_CAR':
            return [ ...state, action.value ]
        case 'REMOVE_CAR':
            const cars = [ ...state ]
            cars.splice(action.value, 1)
            return cars
        case 'UPDATE_CAR':
            const carsCopy = [ ...state ]
            let foundCarIndex = carsCopy.findIndex((car) => car.id == action.value.id)
            console.log(foundCarIndex)
            if(foundCarIndex < 0){
                return state
            }
            carsCopy.splice(foundCarIndex, 1, action.value)
            return carsCopy
        default:
            return state
    }
}

const makes = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_MAKES' :
            return action.value
        case 'DELETE_MAKE' :
            return state.filter((make) => make.MakeId !== action.value)
        default:
            return state
    }
}

export default combineReducers({ user, cars, makes })