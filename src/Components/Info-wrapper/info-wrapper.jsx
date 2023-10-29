import React, { Component } from 'react';
import BillInput from '../Bill-input/bill-input';
import SelectTip from '../Select-tip/select-tip';

import './info-wrapper.css'

class InfoWrapper extends Component {
    render(){
        const{onTakeSimilarInput, onTakeCustomTip, custom}=this.props
        return(
            <div className='wapper'>
                <div className="input-selectors">
                <BillInput name={'Bill'} icon={'$'} keyId='billTracker' onTakeSimilarInput={onTakeSimilarInput}/>
                </div>
               <SelectTip onTakeCustomTip={onTakeCustomTip} custom={custom}/>
               <BillInput name={'Number of people'} icon={'N'} keyId='personTracker' onTakeSimilarInput={onTakeSimilarInput}/>
            </div>
        )
    }
};

export default InfoWrapper;
