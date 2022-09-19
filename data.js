 export const data = {
    labels: [' 1', ' 2', ' 3', ' 4', ' 5', ' 6'],
    datasets: [
        {
            data: [1, 7, 6, 4, 30, 5],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(255,0,0,${opacity})`, // optional
        },
        {
            data: [9, 4, 7, 8, 2, 4],
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(0,102,0, ${opacity})`, // optional
        },
    ],
    legend: ['Gastos', 'Ingresos'],
  };