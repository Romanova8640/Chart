 export const data = {
    labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6'],
    datasets: [{
        data: [1, 7, 6, 4, 2, 5],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(96,108,56, ${opacity})`,
    },
    {
        data: [9, 4, 7, 8, 2, 4],
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(255,0,0,${opacity})`,  
    },
],
legend: ['Ingresos',  'Gastos'],
}