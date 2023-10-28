import { YearCountrySubSection } from "./YearCountrySubSection";

export const YearCountrySection = () => {
    const yearData = [
        {
            value: 'FY 2023-24',
            label: 'FY 2023-24',
        }
    ]

    const countryData = [
        {
            value: 'Australia',
            label: 'Australia',
        }
    ];
    return (
    <>
        <YearCountrySubSection label="Financial Year" dataSource={yearData}/> 
        <YearCountrySubSection label="Country" dataSource={countryData}/>
    </>
    )
}