import { IncomeSection } from "./IncomeSection";
import { useState } from "react";
import { RateSection } from "./RateSection";
import PropTypes from 'prop-types';

export const IncomeRateSection = (props) => {
    const [taxRate, setTaxRate] = useState('0%');


    const incomeData = [
        {
            value: '0%',
            label: '$0 - $18,200',
        },
        {
            value: 'Nil + 19% of excess over $18,000',
            label: '$18,201 - $45,000',
        },
        {
            value: '$ 5,092 + 32.5% of excess over $45,000',
            label: '$45,001 - $120,000',
        },
        {
            value: '$ 29,467 + 27% of excess over $120,000',
            label: '$120,201 - $180,000',
        },
        {
            value: '$ 51,667 + 45% of excess over $180,000',
            label: '$180,001+',
        }
    ];

    const IncomeHandler = (value) => {
        console.log(value);
        setTaxRate(value)
    }

    return (
        <>
            <IncomeSection label={props.label_1} dataSource={incomeData} onChange={IncomeHandler} setRate={props.setRate} /> 
            <RateSection  label={props.label_2} taxRate={taxRate} />
        </>
    )
}

IncomeRateSection.propTypes = {
    label_1: PropTypes.string,
    label_2: PropTypes.string,
    setRate: PropTypes.func,
  };