import React , {useState} from 'react';
import './App.css';
import {ArrowRightOutlined} from  '@ant-design/icons';
import { TableSection } from './components/TableSection';
import { YearCountrySection } from './components/YearCounrtySection';
import { InputSection } from './components/InputSection';
import { GainSection } from './components/GainSection';
import { TaxSection } from './components/TaxSection';
import { InvestmentExpenseSection } from './components/InvestmentExpenseSection';
import { IncomeRateSection } from './components/IncomeRateSection';



function App() {
  const [capitalGain,setCapitalGain] = useState(); 
  const [showGainSection,setShowGainSection] = useState('Long Term');
  const [sale,setSale] = useState(); 
  const [purchase,setPurchase] = useState(); 
  const [expense,setExpense] = useState(); 
  const [rate,setRate] = useState();
  // const [flag,setFlag] = useState();

  // console.log('X',{sale,purchase,expense,flag});
  const radioChangeHandler = (value) => {
    setShowGainSection(value)
  }
  const calculateCapitalGain =()=> {
    const fg = sale && purchase && expense ? true : false;
    const capitalGain =  fg ? (sale - purchase - expense) : '' ;
    setCapitalGain(capitalGain);
  }
  
  return (
    <div className="App">
    <div className='main-container'>
      <div className='container'>
      {/* Form Contaier */}
        <div className='form-container'>
          <div className='form-container-outer'>
            <div className='form-container-inner'>
              <form className='form-layout'>
                <span className='form-title'>Free Crypto Tax Calculator Australia</span>
                <div className='form-body'>
                  <TableSection width='713px' height='48px' gap='40px' display='flex'>
                    <YearCountrySection/>
                  </TableSection>
                  <hr className='horizontal-line'/>
                  <TableSection width='711px' height='86px' gap='40px' display='flex'>
                    <InputSection label_1='Enter purchase price of Crypto' label_2='Enter sale price of Crypto'  calculateCapitalGain={calculateCapitalGain}  setSale={setSale} setPurchase={setPurchase}/>
                  </TableSection>
                  <TableSection width='711px' height='114px' gap='40px' display='flex'>
                    <InvestmentExpenseSection label_1='Enter your Expenses' label_2='Investment Type' calculateCapitalGain={calculateCapitalGain} onRadioChange={radioChangeHandler}  setExpense={setExpense}/>
                  </TableSection>
                  <TableSection width='711px' height='88px' gap='40px' display='flex'>
                    <IncomeRateSection label_1='Select Your Annual Income' label_2='Tax Rate' setRate={setRate}/>
                  </TableSection>
                  {showGainSection === 'Long Term' && <TableSection width='711px' height='86px' gap='40px' display='flex'>
                    <GainSection label_1='Capital gains amount' label_2='Discount for long term gains' capitalGain={capitalGain}/>
                  </TableSection>}
                  <TableSection width='713px' height='97px' gap='40px' display='flex'>
                    <TaxSection label_1='Net Capital gains tax amount' label_2='The tax you need to pay*' color_1='#0FBA83' color_2='#0141CF' showGainSection={showGainSection} capitalGain={capitalGain} rate={rate}/>
                  </TableSection>
                </div>
              </form>
            </div>
          </div>
        </div>

      {/* Infromation Container */}
        <div className='info-container'>
          <div className='info-container-outer'>
            <div className='info-container-inner'>
                {/* Inner div 1 */}
                <div className='inner-div-1'>
                    <div className='heading-text'>Get Started with KoinX for FREE</div>
                    <div className='description-text'>With our range of features that you can equip for free,
KoinX allows you to be more educated and aware of your tax reports.</div>
                </div>

                {/* Inner div 2 */}
                <div className='inner-div-2'>
                  <img className='inner-div-2-image' src="../assests/Capture.png" alt="descriptive_image" style={{ width:'178.66px',
  height:'166.22px' }}/>
                </div>

                {/* Inner div 3 */}
                <div className='inner-div-3'>
                  <div className='inner-div-3-sub-div'>
                    <button className='start-btn'>
                      <div className='btn-content'>
                        <div className='start-text'>Get Started for FREE</div>
                        <div style={{ width: '20px' , height: '20px'}}><ArrowRightOutlined style={{ width: '20px' , height: '20px'}}/></div>
                      </div>
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default App;
