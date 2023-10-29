import React, { Component } from 'react';

import './output-block.css';

class OutputBlock extends Component {
    render(){
        let isNum = false;
        const {tipAmaount, total} = this.props;
        if(isNaN(tipAmaount) || !isFinite(tipAmaount))
            isNum = true;
        
        return(
            <div className="wapper-output">
                <div className="total-content"><p>Tip Amount <br /><span>/ person</span> </p><span className='filanCount'>${isNum ? 0 : tipAmaount}</span></div>
                <div className="total-content"><p>Total <br /><span>/ person</span> </p><span className='filanCount'>${isNum ? 0 : total}</span></div>
            </div>
        )
    }
};

export default OutputBlock;