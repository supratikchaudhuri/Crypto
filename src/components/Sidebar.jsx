import { makeStyles, withStyles } from '@material-ui/core'
import React from 'react'

// import "../styles/Sidebar.css"

const styles = makeStyles({
    sidebar : {
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        left: "0",
        width: "320px",
        height: "100vh",
        backgroundColor: "rgb(5, 5, 51)",
    }
}) 

function Sidebar() {
    const classes = styles();

    return (
        <div className={classes.sidebar}>

        </div>
    )
}

export default withStyles(styles)(Sidebar);
