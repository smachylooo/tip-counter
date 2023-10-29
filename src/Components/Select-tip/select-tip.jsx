import React, { Component } from 'react';

import './select-tip.css'

class SelectTip extends Component {
    onHandleClick=(e)=>{
        let custom = e.target.value;
        this.props.onTakeCustomTip(custom)
        this.setState(({custom}))
    }

    render(){
        const buttonData = [5,10,15,25,50];
        const buttons = buttonData.map((el)=>{
            let clazz = 'card ';
            if (el == this.props.custom){
                clazz+= 'chosen-tip'
            }

            return <button className={clazz} key={el} value={el} type='button' onClick={e=>this.onHandleClick(e)}>{el}%</button>
        }) 
        
        return(
            <div className="select-content">
                <span>Select tip %</span>
                <div className="row-of-card">
                    {buttons}
                    <input className="card crad-in" type="number" placeholder='Custom' onChange={e=>this.onHandleClick(e)}/>
                </div>
            </div>
        ) 
    }
};

export default SelectTip;