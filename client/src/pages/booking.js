import React from "react";


export const Booking = () => {
    return(
        <div className = "Content">
            <form>
                <p>Startzeit:</p>
                <input type="datetime-local" name="startTime"></input>
                <br></br>
                <p>Endzeit:</p>
                <input type="datetime-local" name="startTime"></input>
                <br></br>
                <p>Jahrgang:</p>
                <input type="text"></input>
            </form>
        </div>
    );
}

export default Booking