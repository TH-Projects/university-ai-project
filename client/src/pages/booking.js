import React from "react";


export const Booking = () => {
    return(
        <div className = "Content">
            <form id="booking_form">
                <h3 id="booking_headline">Labor buchen</h3>
                <p>Startzeit:</p>
                <input type="datetime-local" name="startTime" id="booking_starttime"></input>
                <br></br>
                <p>Endzeit:</p>
                <input type="datetime-local" name="startTime" id="booking_endtime"></input>
                <br></br>
                <p>Jahrgang:</p>
                <input type="text" id="booking_class"></input>
            </form>
        </div>
    );
}

export default Booking