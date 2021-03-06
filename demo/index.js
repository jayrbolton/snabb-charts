import chart from '../index.es6'
import render from 'ff-core/render'
import snabbdom from 'snabbdom'
import h from 'snabbdom/h'

function init() {
  return {
    chartData: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"]
    , datasets: [{
        label: '# of Votes'
      , backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ]
      , borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ]
      , data: [12, 19, 3, 5, 2, 3]
      , borderWidth: 1
      }]
    }
  }
}

let chartOpts = {
  type: 'bar',
  options: {
    scales: { yAxes: [{ ticks: { beginAtZero:true } }] }
  }
}

let sampleChart = chart(chartOpts)

function view(state) {
  return h('body', [
    sampleChart(state.chartData)
  ])
}

const patch = snabbdom.init([ ])

render({state: init(), view, patch, container: document.body})


