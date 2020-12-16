import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import UserPromptForm from './UserPrompt/UserPromptForm'
import Header from './components/Header'
import SampleBuild from './components/SampleBuild'

import pc1_side from './PCpics/pc1_side.jpg';
import pc1_front from './PCpics/pc1_front.jpg';
import pc2_side from './PCpics/pc2_side.jpg';
import pc2_front from './PCpics/pc2_front.jpg';
import pc3_side from './PCpics/pc3_side.jpg';
import pc3_front from './PCpics/pc3_front.jpg';

function App() {
    return (
        <div>
            <Header />
            <h2>Sample PC Builds</h2>
            <ul>
                <SampleBuild build={{imgUrl1: pc1_side, imgUrl2:pc1_front, buildName: "Vaporwave", buildLink: "https://pcpartpicker.com/b/7LYH99", userName: "CactusJoao"}}/><br />
                <SampleBuild build={{imgUrl1: pc2_side, imgUrl2:pc2_front, buildName: "uATX build Ryzen 5800x + Gigabyte Vision RTX 3080 White & Black Build", buildLink: "https://pcpartpicker.com/b/CtRkcf", userName: "CheerioCoil"}}/><br />
                <SampleBuild build={{imgUrl1: pc3_side, imgUrl2:pc3_front, buildName: "Kakashi Sensei", buildLink: "https://pcpartpicker.com/b/B427YJ", userName: "huuduy216"}}/><br />
            </ul>
            <br />
            <UserPromptForm />
        </div>
    );
}

render(<App />, document.getElementById("root"));