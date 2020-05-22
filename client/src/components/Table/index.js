import React from "react";



function Table(props) {
    return (
        <div>
            <table class="table">
                <thead>
                    <tr>
                        <th>Monday</th>
                        <th>Tuesdat</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                        <th>Sunday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>1</th>
                        <td>2</td>
                        <td>3</td>
                        <td>4</td>
                        <td>5</td>
                        <td>6</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Table;