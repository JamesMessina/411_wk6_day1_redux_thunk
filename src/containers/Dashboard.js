import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard'
import { removeCar, updateCar } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        user: state.user,
        cars: state.cars
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        removeCar: (index) => dispatch(removeCar(index)),
        updateCar: (updatedCar) => dispatch(updateCar(updatedCar))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)