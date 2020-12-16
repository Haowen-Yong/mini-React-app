import React from "react";

import '../index.css'
import RadioButton from './RadioButton'

function UserPromptForm() {
    return (
        <fieldset className="userPrompt">
            <form data-payment="pcbuild" background-color="FFFF00">
                <h2>Would you like to build a PC? If so, please fill out the form below.</h2>
                <h3>PC requirements:</h3>
                <p>Required fields are followed by <strong><abbr title="required">*</abbr></strong></p>
                <p>For some sections, feel free to enter your own values in the input box.</p>
                <section>
                    <fieldset>
                    <legend>Type of build</legend>
                        <ul>
                            <li>
                            <RadioButton btn={{forValue: "Gaming", type: "radio", id: "Gaming", name: "PCtype", value: "Gaming", textToPrint: "Gaming"}}/>
                            </li>
                            <li>
                            <RadioButton btn={{forValue: "Video", type: "radio", id: "Video", name: "PCtype", value: "Video", textToPrint: "Video Editing"}}/>
                            </li>
                            <li> 
                            <RadioButton btn={{forValue: "Photo", type: "radio", id: "Photo", name: "PCtype", value: "Photo", textToPrint: "Photo Editing/GraphicsDesign"}}/>
                            </li>
                            <li> 
                            <RadioButton btn={{forValue: "Streaming", type: "radio", id: "Streaming", name: "PCtype", value: "Streaming", textToPrint: "Streaming"}}/>
                            </li>
                            <li> 
                            <RadioButton btn={{forValue: "Music", type: "radio", id: "Music", name: "PCtype", value: "Music", textToPrint: "Music Production/Audio Editing"}}/>
                            </li>
                            <li> 
                            <RadioButton btn={{forValue: "3D", type: "radio", id: "3D", name: "PCtype", value: "3D", textToPrint: "3D rendering/Animation"}}/>
                            </li>
                            <li> 
                            <RadioButton btn={{forValue: "Best", type: "radio", id: "Best", name: "PCtype", value: "Best", textToPrint: "I don't care. Give me the best I can get forValue my budget!"}}/>
                            </li>
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Price range</legend>
                        <RadioButton btn={{forValue: "500", type: "radio", id: "500", name: "budget", value: "500", textToPrint: "$500"}}/>
                        <RadioButton btn={{forValue: "1000", type: "radio", id: "1000", name: "budget", value: "1000", textToPrint: "$1000"}}/>
                        <RadioButton btn={{forValue: "1500", type: "radio", id: "1500", name: "budget", value: "1500", textToPrint: "$1500"}}/>
                        <RadioButton btn={{forValue: "2000", type: "radio", id: "2000", name: "budget", value: "2000", textToPrint: "$2000"}}/>
                        <RadioButton btn={{forValue: "2500", type: "radio", id: "2500", name: "budget", value: "2500", textToPrint: "$2500"}}/>
                        <RadioButton btn={{forValue: "3000", type: "radio", id: "3000", name: "budget", value: "3000", textToPrint: "$3000"}}/>
                        <br />
                        <label>
                            <span>$</span>
                            <input type="number" id="userInputBudget" name="budget" />
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Motherboard Size</legend>
                        <RadioButton btn={{forValue: "ATX", type: "radio", id: "ATX", name: "moboSize", value: "ATX", textToPrint: "ATX"}}/>
                        <RadioButton btn={{forValue: "Micro-ATX", type: "radio", id: "Micro-ATX", name: "moboSize", value: "Micro-ATX", textToPrint: "Micro-ATX"}}/>
                        <RadioButton btn={{forValue: "Mini-ITX", type: "radio", id: "Mini-ITX", name: "moboSize", value: "Mini-ITX", textToPrint: "Mini-ITX"}}/>
                    </fieldset>
                    <fieldset>
                        <legend>Storage Size</legend>
                        <RadioButton btn={{forValue: "1TB", type: "radio", id: "1TB", name: "storageSize", value: "1TB", textToPrint: "1TB"}}/>
                        <RadioButton btn={{forValue: "2TB", type: "radio", id: "2TB", name: "storageSize", value: "2TB", textToPrint: "2TB"}}/>
                        <RadioButton btn={{forValue: "4TB", type: "radio", id: "4TB", name: "storageSize", value: "4TB", textToPrint: "4TB"}}/>
                        <br />
                        <label>
                            <input type="number" id="userInputStorageSize" name="storageSize" />
                            <span> TB</span>
                        </label>
                    </fieldset>
                    <fieldset>
                        <legend>Will you be utilizing ray-tracing?</legend>
                        <RadioButton btn={{forValue: "yesRT", type: "radio", id: "yesRT", name: "rayTracing", value: "yesRT", textToPrint: "Yes"}}/>
                        <RadioButton btn={{forValue: "noRT", type: "radio", id: "noRT", name: "rayTracing", value: "noRT", textToPrint: "No"}}/>
                    </fieldset>
                    <br />
                    <input type="submit" value="Submit"></input>
                </section>
            </form>
        </fieldset>
    )
}

export default UserPromptForm