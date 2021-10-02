import React from 'react'
//
// import useChartConfig from 'hooks/useChartConfig'
// import Box from 'components/Box'
// import SyntaxHighlighter from 'components/SyntaxHighlighter'
import { Chart } from 'react-charts'
let sourceCode
export default function LineChart () {
    // const { data, randomizeData } = useChartConfig({
    //     series: 10
    // })
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
    
    const series = React.useMemo(
        () => ({
            showPoints: false
        }),
        []
    )
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'time', position: 'bottom' },
            { type: 'linear', position: 'left' }
        ],
        []
    )
    return (
        <>
            {/*<button onClick={randomizeData}>Randomize Data</button>*/}
            <div className="line-chart">
                <Chart data={data} series={series} axes={axes} tooltip />
            </div>
            <br />
            {/*<SyntaxHighlighter code={sourceCode} />*/}
        </>
    )
}