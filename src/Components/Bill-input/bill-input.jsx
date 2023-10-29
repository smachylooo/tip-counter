import React, { Component } from 'react';

import './bill-input.css'

 class BillInput extends Component {
    render(){
        const {icon, name, onTakeSimilarInput, keyId} = this.props;
        return(
            <div className="bill-content">
                <span>{name}</span>
                <div className="input-content">
                    <span className="currency-code">{icon}</span>
                    <input type="number" onChange={e=>{onTakeSimilarInput(keyId, e.target.value)}}/>
                </div>
            </div>
        )
    }
};

export default BillInput;