import React, { useState, useEffect } from "react";
import axios from "axios";
const AxiosComponent = () => {
    let [apiData, setapiData] = useState([])
    useEffect(() => {
        axios.get("https://gorest.co.in/public/v2/todos")
            .then(
                response => setapiData(response.data)
            )
    }, [])
    return (
        <div>
            <div className="divHeading">
                <h3 className="heading3text">My Todo List</h3>
            </div>

            <table>
                <tr>
                    <th>ID</th>
                    <th>USER ID</th>
                    <th>TITLE</th>
                    <th>DUE</th>
                    <th>STATUS</th>
                </tr>
                {
                    apiData.map(item => {
                        return (
                            <tr>
                                <td> {item.id} </td>
                                <td> {item.user_id} </td>
                                <td> {item.title} </td>
                                <td> {item.due_on} </td>
                                <td> {item.status} </td>
                            </tr>
                        )

                    })
                }
                <tr>
                    <td colSpan={5} >Displayed all Data</td>
                </tr>
            </table>
        </div>
    )
}
export default AxiosComponent