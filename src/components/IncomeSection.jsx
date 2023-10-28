import { useState } from 'react';
import PropTypes from 'prop-types';
import { Select } from 'antd';

export const IncomeSection = (props) => {
    const [value,setValue]  = useState();
    const taxRate = [
        {
            value: '0%',
            label: '0',
        },
        {
            value: 'Nil + 19% of excess over $18,000',
            label: '19',
        },
        {
            value: '$ 5,092 + 32.5% of excess over $45,000',
            label: '32.5',
        },
        {
            value: '$ 29,467 + 27% of excess over $120,000',
            label: '37',
        },
        {
            value: '$ 51,667 + 45% of excess over $180,000',
            label: '45',
        }
    ];
    const defaultValue = props.dataSource[0].value;
    return(
        <div 
        style={{
            width: '335.5px',
            height: '88px',
            display:'flex',
            flexDirection:'column',
            gap: '6px',
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
            <Select
            defaultValue={defaultValue}
            style={{
                width: '335.5px',
                height: '58px',   
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 22,
                letterSpacing: '0em',
                textAlign: 'left',
                borderRadius: 8,        
                justify: 'space-between',
                color:'#EFF2F5'
            }}
            options={props.dataSource}
            value={value}
            onChange={(value)=>{
                console.log(value);
                    props.onChange(value) 
                    setValue(value)
                    const rt = +taxRate.filter((rate)=>value === rate.value).map((rate)=>rate.label).join();
                    props.setRate(rt);
                }
            }
        />

        </div>
    )
}
IncomeSection.propTypes = {
    label: PropTypes.string,
    dataSource: PropTypes.array,
    onChange:PropTypes.func,
    setRate:PropTypes.func,
  };