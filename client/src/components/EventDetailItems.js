import React from 'react'
import { makeStyles } from "@material-ui/core/styles";
import RoomIcon from '@material-ui/icons/Room';
import EventIcon from '@material-ui/icons/Event';

const useStyles = makeStyles(theme => ({
  details: {  
    padding: "30px 6px 20px 6px",
    textAlign: "center",
    display: "flex",
    // border: "solid",
    color: "white",
    justifyContent: "flex-start"
  },
  purchaseButton: {
    color: 'white',
    borderColor: 'white',
    borderStyle: "solid",
    borderWidth: "thin",
    padding: "8px",
    textAlign: "center",
    borderRadius: "5px",
    fontWeight: "bold",
    display: "inline-block",
    marginTop: "5px",
    textDecoration: "none",
    '&:hover': {
      backgroundColor: 'white',
      color: 'black'
    },
  },
  eventDetails: {
    color: "white",
    margin: "auto",
    paddingTop: "4px"

  },
  addressIcon: {
    color: "white",
    textDecoration: "none",
    display: "inline-block"
  },
  dateNumber: {
    color: "white",
    fontSize: "1.25em",
    fontWeight: "bold",
    margin: "4px 10px 4px 9px"
  },
  dateMonth: {
    color: "white",
    margin: "4px 10px 4px 9px"

  },
  eventIcon: { 
    color: "white",
    marginTop: "5px",
    '&:hover': {
      color: '#1db954'
    },
  },
  dateDetails: {
    // border: "solid",
    // borderColor: "red"
  },
  addressDetails: {
    // border: "solid",
    // borderColor: "green",
    textAlign: "left",
    marginLeft: "6px",
    justifySelf: "start"
  },
  venueAddress: {
    display:"inline-block",
    margin: "auto",
    color: "white"
  },
  artistImgDiv: {
    width: "250px",
    height: "250px"
  },
  artistImg: {
    width: "7vw",
    height: "7vw"
  }
}))

export default function EventDetailItems(props) {
  const classes = useStyles();
  const date = new Date(props.date).toString().split(" ").splice(0,4)
  return (
    <div className={classes.details}>
      <div className={classes.dateDetails}>
        <p className={classes.dateNumber}>{date[2]}</p>
        <p className={classes.dateMonth}>{date[1]}</p>
        <a href={props.url} target="_blank"> <EventIcon className={classes.eventIcon}/> </a>
      </div>
      <div className={classes.addressDetails}>
        <p className={classes.eventDetails}>{props.title}</p>
        <p className={classes.venueAddress}>{props.address} <a className={classes.addressIcon} href={`https://www.google.com/maps/search/?api=1&query=${props.venue} ${props.city}`} target="_blank"><RoomIcon/></a></p> 
        <p className={classes.eventDetails}> {props.venue} - {props.city} </p>
        <a href={props.url} target="_blank" className={classes.purchaseButton}>Purchase Ticket</a>
      </div>
      <div  className={classes.artistImgDiv}>
        <img className={classes.artistImg} src={props.artistImage} alt=""/>
      </div>
      {/* <p className={classes.eventDetails}>{props.lowestPrice ? `Tickets Starting at: $${props.lowestPrice}`: "Sorry, tickets are currently sold out!"}</p> */}
    </div>
  )
}