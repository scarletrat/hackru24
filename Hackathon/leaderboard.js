const ctx = document.getElementById('leaderboardChart').getContext('2d');

const leaderboardData = {
    labels: ['You', 'Friend 1', 'Friend 2', 'Friend 3'],
    datasets: [{
        label: 'Quiz Points',
        data: [120, 150, 180, 130], // Example points data
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)', // You
            'rgba(54, 162, 235, 0.2)', // Friend 1
            'rgba(255, 206, 86, 0.2)', // Friend 2
            'rgba(75, 192, 192, 0.2)'  // Friend 3
        ],
        borderColor: [
            'rgba(255, 99, 132, 1)', // You
            'rgba(54, 162, 235, 1)', // Friend 1
            'rgba(255, 206, 86, 1)', // Friend 2
            'rgba(75, 192, 192, 1)'  // Friend 3
        ],
        borderWidth: 1
    }]
};

const leaderboardChart = new Chart(ctx, {
    type: 'bar',
    data: leaderboardData,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
