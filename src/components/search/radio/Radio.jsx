import React from 'react'
import './radio.scss'
export default function Radio() {
    return (
        <div className="radio-container">

            <form action="#">
                <p>
                    <label>
                        <input name="group1" type="radio" checked />
                        <span>Red</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" />
                        <span>Yellow</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input class="with-gap" name="group1" type="radio" />
                        <span>Green</span>
                    </label>
                </p>
                <p>
                    <label>
                        <input name="group1" type="radio" disabled="disabled" />
                        <span>Brown</span>
                    </label>
                </p>
            </form>
        </div>
    )
}
