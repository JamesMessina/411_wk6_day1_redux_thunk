import React from 'react'
import { Button, Table, TableHead, TableBody, TableRow, TableCell, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from "@material-ui/icons/Delete";
import '../stylesheets/Import.css'; 


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        marginTop: '20px'
      },
    },

}));

const Import = (props) => {
    const classes = useStyles();


    return (
        <Container className={classes.root}>
            <div className="button-count-container">
                <Button onClick={props.fetchMakes} variant="contained" color="primary">
                    Import
                </Button>
                <h2>Count:{props.makes.length}</h2>
            </div>
            <Table className="table">
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>Make</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.makes.map((make) => (
                        <TableRow key={make.MakeId}>
                            <TableCell>{make.MakeId}</TableCell>
                            <TableCell>{make.MakeName}</TableCell>
                            <TableCell>
                                <IconButton
                                    aria-label="more"
                                    aria-controls="long-menu"
                                    aria-haspopup="true"
                                    onClick={() => props.deleteMake(make.MakeId)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                ))}
                </TableBody>
            </Table>
        </Container>
    )
}

export default Import