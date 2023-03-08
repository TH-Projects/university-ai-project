import React, {setState} from "react";


export const Attendance = () => {

    return(
        <div className="Attendance_Content">
            <h2 id="attendance_headline">Anwesenheit</h2>
            <div id="attendance_expected_container">
                <h3 id="attendance_expected_headline">headline</h3>
                <p id="attendance_expected_content">content</p>
            </div>
            <div id="attendance_current_container">
                <h3 id="attendance_current_headline">headline</h3>
                <p id="attendance_current_content">content</p>
            </div>
        </div>
    );
}

export default Attendance