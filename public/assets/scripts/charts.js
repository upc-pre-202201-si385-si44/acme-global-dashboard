export { drawCharts }

function drawCharts() {
    drawPieChart();
    drawAxisTickColors();

}

function drawPieChart() {
    const data = new google.visualization.DataTable();
    data.addColumn('string', 'Project Type');
    data.addColumn('number', 'Thousands of Requests');
    data.addRows([
        ['Automation', 3],
        ['Event Processing', 1],
        ['Gamification', 1],
        ['Geofencing', 1],
        ['Internet of Things', 2]
    ]);

    const options = {
        'title': 'Technology Projects by Type',
        'width': 500,
        'height': 300
    };

    var chart = new google.visualization.PieChart(document.getElementById('pie-placeholder'));
    chart.draw(data, options);

    $(window).resize(function () {
        chart.draw(data, options);
    })
}

function drawAxisTickColors() {

}
