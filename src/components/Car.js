import React from 'react'
import { Container, Paper, Chip, Typography  } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import IconButton from '@material-ui/core/IconButton';
//import { useHistory } from "react-router-dom";



const Car = (props) => {
    const id = props.match.params.id
    {/* Change cars to props.cars and remove the cars.json import above */}
    const car = props.cars.find(c => c.id == id);

    //const history = useHistory(); 

    const handleClick = () => {
        console.log("back button clicked. useHistory hook not working. cant exoprt from react router dom.");
        // history.push("/")
    }

    return (
        <Container maxWidth="sm" className="car-container">
            <Paper className="car-paper">
                <div style={{display: "flex", alignItems: "center"}}>
                    <IconButton onClick={handleClick}>
                        <ArrowBackIcon style={{marginRight: "5px"}} color="primary" />
                    </IconButton>
                    <Typography>Back</Typography>
                </div>
                <h2>{car.name}</h2>
                {
                    Object.keys(car).map((key, idx) => {
                        return <Chip label={`${key}: ${car[key]}`}></Chip>
                    })
                }
            </Paper>
        </Container>
    )
}

export default Car