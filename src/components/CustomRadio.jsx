import { useState } from "react";
import { Radio } from "antd";
import PropTypes from 'prop-types';
import { CheckOutlined } from "@ant-design/icons";


export const CustomRadio = (props) => {
  const [value, setValue] = useState('Long Term');
  const onChange = (e) => {
    console.log(e.target.value);
    setValue(e.target.value)
    props.onRadioChange(e.target.value)
  }
    return (
        
        <>
            <Radio.Group onChange={onChange} defaultValue={value}>
              <Radio.Button value='Short Term'>Short Term <CheckOutlined className="tick" style={{ fontWeight:'500',fontSize:'15px', paddingLeft:'30px',transform:`translateY(-2px)`}}/></Radio.Button>
              <Radio.Button value="Long Term">Long Term <CheckOutlined  style={{ fontWeight:'500',fontSize:'15px', paddingLeft:'30px',transform:`translateY(-2px)`}}/></Radio.Button>
            </Radio.Group>
      
        </>
        
    )
} 

CustomRadio.propTypes = {
  onRadioChange: PropTypes.func,
};