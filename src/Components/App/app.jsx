import React, { Component } from 'react';

import './app.css'
import InfoWrapper from '../Info-wrapper/info-wrapper';
import OutputBlock from '../Output-block/output-block';

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            custom: 0,
            billTracker: 0,
            personTracker: 0
        }
    }

    onTakeSimilarInput=(key, value)=>{
        this.setState({[key]: value});
    }

    onTakeCustomTip=(custom)=>{
        this.setState({custom})
    }

    render(){
        const {custom, billTracker, personTracker} = this.state;
        const tipAmaount = Math.floor((billTracker / 100 * custom / personTracker) * 100) / 100;
        const total = Math.floor((billTracker / personTracker + tipAmaount) * 100) / 100;
        return(
            <div className="app">
                <div className="col">
                    <InfoWrapper onTakeSimilarInput={this.onTakeSimilarInput} onTakeCustomTip={this.onTakeCustomTip} custom={this.state.custom}/>
                </div>
                <div className="col">
                    <OutputBlock total ={total} tipAmaount={tipAmaount} />
                </div>
            </div>
        )
    }
};

export default App;