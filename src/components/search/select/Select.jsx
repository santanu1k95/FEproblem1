import React from 'react'
import './select.scss'
import { useEffect,useState } from 'react';

export default function Select() {

    useEffect(() => {
        console.log("component did mount");
        // return () => {
        //     cleanup
        // }
    }, [])

    return (
        <div className="select-container">
            Select
            <div class="input-field col s12">
                <select>
                    <option value="" disabled selected>Choose your option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                </select>
                <label>Materialize Select</label>
            </div>


        </div>
    )
}
