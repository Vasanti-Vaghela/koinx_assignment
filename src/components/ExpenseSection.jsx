import PropTypes from 'prop-types';
import { InputNumber } from 'antd';
import { useState } from 'react';

export const ExpenseSection = (props) => {
    const [value,setValue] = useState();
    return (
        <div 
        style={{
            width: '335.5px',
            height: '86px',
            gap: '6px',
            display:'flex', 
            flexDirection:'column'
        }}
        >
            <label 
            style={{
                fontFamily: 'Inter',
                fontSize: '15px',
                fontWeight: '400',
                lineHeight: '24px',
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#0F1629'
            }}
            >
            {props.label}
            </label>
            <InputNumber
            style={{ 
                width: '335.5px',
                height: '56px',
                padding: '17px 16px 17px 16px',
                borderRadius: '8px',
                gap:'8px',
                backgroundColor: '#EFF2F5',
            }} 
            prefix="$"
            value={value}
            onPressEnter={(e)=>{
                setValue(e.target.value);
                props.setExpense(e.target.value);
                // if(props.flag){

                props.calculateCapitalGain();
                // }
            }}
            />
        </div>
    )
}

ExpenseSection.propTypes = {
    label: PropTypes.string,
    calculateCapitalGain: PropTypes.func,
    flag: PropTypes.bool,
    setExpense: PropTypes.func,
  };