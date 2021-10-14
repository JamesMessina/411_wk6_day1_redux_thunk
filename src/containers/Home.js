import { connect } from 'react-redux'
import Home from '../components/Home'
import {useHistory} from "react-router-dom";

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
}

export default connect(mapStateToProps)(Home)
