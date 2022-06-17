import { drawCharts } from "./charts";

google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawCharts);
