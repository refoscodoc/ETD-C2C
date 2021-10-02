import React from 'react'
//
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'
let sourceCode
const AreaChart = () => {
    // const { data, randomizeData } = useChartConfig({
    //     series: 10
    // })
    const series = React.useMemo(
        () => ({
            type: 'area'
        }),
        []
    )
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 2',
                data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            },
            {
                label: 'Series 3',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 4',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 5',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 6',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 7',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 8',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 9',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
                label: 'Series 10',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            
        ],
        []
    )
    
    const axes = React.useMemo(
        () => [
            { primary: true, position: 'bottom', type: 'time' },
            { position: 'left', type: 'linear', stacked: true }
        ],
        []
    )
    return (
        <>
            <div className="area-chart">
                <Chart data={data} series={series} axes={axes} tooltip />
            </div>
            <br />
            {/*<SyntaxHighlighter code={sourceCode} />*/}
        </>
    )
}

export default AreaChart;