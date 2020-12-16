import React from 'react';
import '../index.css';

function SampleBuild(props) {
    return (
        <li>
            <div className="buildImages">
                <div  className="buildImages">
                    <div>
                    <img src={props.build.imgUrl1} className="pcImage"/>
                    </div>
                    <div>
                    <img src={props.build.imgUrl2} className="pcImage"/>
                    </div>
                </div>
                <div className="buildDescription">
                    <p>{props.build.buildName}</p>
                    <a href={props.build.buildLink}>Taken from {props.build.buildLink}</a>
                    <p>Made by user {props.build.userName}</p>
                </div>
            </div>
        </li>
    )
}

export default SampleBuild