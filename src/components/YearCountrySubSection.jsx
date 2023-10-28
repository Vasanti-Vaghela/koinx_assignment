import { Select } from 'antd';
import PropTypes from 'prop-types';

export const YearCountrySubSection = (props) => {
    const defaultValue = props.dataSource[0].value;
    return(
        <div style={{
            width:'335px', height:'48px', gap:'8px', display:'flex', alignItems:'center'
        }}>
        <label 
        style={{
            fontFamily: 'Inter',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '24px',
            letterSpacing: '0em',
            textAlign: 'left',
        }}
        >
        {props.label}
        </label>
        <Select
            defaultValue={defaultValue}
            style={{
                width: 228,
                height:48,
                fontFamily: 'Inter',
                fontSize: 18,
                fontWeight: 500,
                lineHeight: 22,
                letterSpacing: '0em',
                textAlign: 'left',
                color:'#EFF2F5'
            }}
            options={props.dataSource}
        />
        </div>
    )
}
YearCountrySubSection.propTypes = {
    label: PropTypes.string,
    dataSource:PropTypes.array
  };
