import React, { useState, Fragment, useEffect, useRef } from 'react'
import {
    Container,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Button,
    TextField,
    Dialog,
    DialogContent,
    DialogTitle
} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete'
import Chart from '../containers/Chart'
import Total from '../containers/Total'
import AddCar from '../containers/AddCar'
import LoopIcon from '@material-ui/icons/Loop';
import IconButton from '@material-ui/core/IconButton'

const Dashboard = (props) => {

    const [open, setOpen] = useState(false); 
    const [UpdatedCar, setUpdatedCar] = useState({open: false, id: '', name: '', mpg: '', cylinders: '', horsepower: ''})

    const toggleDialog = () => {
        console.log("open/close modal box");
        setOpen(!open)
    }

    const handleTextChange = (e) => {
        const UpdatedCarCopy = { ...UpdatedCar }
        UpdatedCarCopy[e.target.id] = e.target.value
        setUpdatedCar(UpdatedCarCopy);
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
        const UpdatedCarPayload = { ...UpdatedCar }
        delete UpdatedCarPayload.open
        console.log("updated car", UpdatedCarPayload)
        props.updateCar(UpdatedCarPayload)
        setOpen(false)
        
    }

    return (
        <Container maxWidth="lg" className="car-container">
            <h4>Welcome, {props.user.username}</h4>
            <div className="flex-container">
                <Chart />
                <Total />
                <AddCar carTotal={props.cars.length} />
            </div>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make/Model</TableCell>
                        <TableCell>MPG</TableCell>
                        <TableCell>Cylinders</TableCell>
                        <TableCell>Horsepower</TableCell>
                        <TableCell>Delete</TableCell>
                        <TableCell>Update</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {props.cars.map((car, idx) => (
                    <TableRow key={car.id}>
                        <TableCell component="th" scope="row">
                            {car.id}
                        </TableCell>
                        <TableCell>{car["name"]}</TableCell>
                        <TableCell>{car["mpg"]}</TableCell>
                        <TableCell>{car["cylinders"]}</TableCell>
                        <TableCell>{car["horsepower"]}</TableCell>
                        <TableCell>
                            <DeleteIcon
                                onClick={() => props.removeCar(idx)}
                                className="icon text-red" />
                        </TableCell>
                        <TableCell>
                            <IconButton onClick={toggleDialog}>
                                <LoopIcon color="primary" style={{cursor: "pointer"}} />
                            </IconButton>
                        </TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
            <Fragment>
                <div>
                    <Dialog open={open} onClose={toggleDialog} >
                        <DialogTitle>Update a Car</DialogTitle>
                        <DialogContent>
                            <form 
                                onSubmit={(e) => handleSubmit(e)}
                                style={{ display: 'flex', flexDirection: 'column', width: '350px' }}>
                                <TextField 
                                    id="id" 
                                    placeholder="Car Id" 
                                    value={UpdatedCar.car_id} 
                                    onChange={(e) => handleTextChange(e)} 
                                    required />
                                <TextField 
                                    id="name" 
                                    placeholder="Make/Model" 
                                    value={UpdatedCar.name} 
                                    onChange={(e) => handleTextChange(e)} 
                                    required />
                                <TextField 
                                    id="mpg" 
                                    placeholder="Miles per gallon" 
                                    value={UpdatedCar.mpg} 
                                    onChange={(e) => handleTextChange(e)} 
                                    required />
                                <TextField 
                                    id="cylinders" 
                                    placeholder="Cylinders" 
                                    value={UpdatedCar.cylinders} 
                                    onChange={(e) => handleTextChange(e)} 
                                    required />
                                <TextField 
                                    id="horsepower" 
                                    placeholder="Horsepower" 
                                    value={UpdatedCar.horsepower} 
                                    onChange={(e) => handleTextChange(e)} 
                                    required />
                                <br />
                                <Button variant="contained" color="primary" type="submit">Submit</Button>
                            </form>
                        </DialogContent>
                    </Dialog>
                </div>
            </Fragment>
        </Container>
    )
}

export default Dashboard