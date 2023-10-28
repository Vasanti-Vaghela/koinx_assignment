import { ExpenseSection } from "./ExpenseSection"
import { InvestmentSection } from "./InvestmentSection"
import PropTypes from 'prop-types';

export const InvestmentExpenseSection = (props) => {
    return (
        <>
            <ExpenseSection label={props.label_1}  calculateCapitalGain={props.calculateCapitalGain} flag={props.flag} setExpense={props.setExpense} /> 
            <InvestmentSection  label={props.label_2} onRadioChange={props.onRadioChange}/>
        </>
    )
}

InvestmentExpenseSection.propTypes = {
    label_1: PropTypes.string,
    label_2: PropTypes.string,
    calculateCapitalGain: PropTypes.func,
    onRadioChange: PropTypes.func,
    flag: PropTypes.bool,
    setExpense: PropTypes.func,
  };