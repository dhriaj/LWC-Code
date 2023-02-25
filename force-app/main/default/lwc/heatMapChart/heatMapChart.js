import {LightningElement} from 'lwc';
import highcharts from '@salesforce/resourceUrl/highcharts';
import heatchart from '@salesforce/resourceUrl/heatchart';
import {loadScript} from 'lightning/platformResourceLoader';

import getProductSale from '@salesforce/apex/ProductSaleService.getProductSale';

export default class HeatMapChart extends LightningElement {
    chartResourcesLoaded = false;
    connectedCallback() {
        console.log('Print the record');
        Promise.all([
                loadScript(this, highcharts)
            ])
            .then(() => {
                console.log('heatchart Loaded');
                Promise.all([
                        loadScript(this, heatchart)
                        
                    ])
                    .then(() => {
                        console.log('highchart Loaded');
                        this.chartResourcesLoaded = true;
                    });
            })
            .catch(error => {
                console.log('highchart : ' + error);
            });
    }
   
    onChangeHandler() {
        if (this.chartResourcesLoaded) {
            let start = this.template.querySelector('.startDate');
            console.log("Print start",start.value);
            getProductSale({
                    startDate: start.value
                })
                .then(result => {
                    this.data = result;
                    console.log('item:' + JSON.stringify(result));
                    var categories = [];
                    var sale = [];
                    for (const item of result) {
                        categories.push(item.EmployeeName);
                        for (const it of item.Sales) {
                            var s = [];
                            s=[...s,it.X,it.Y,it.SaleCount];
                            sale.push(s);
                        }
                    }
                    console.log('categories:' + JSON.stringify(categories));
                    console.log('sale:' + JSON.stringify(sale));
                    let container = this.template.querySelector('.chart');
console.log("Container list",container);
                    highcharts.chart(container, {
                        chart: {
                            type: 'heatmap',
                            marginTop: 40,
                            marginBottom: 80,
                            plotBorderWidth: 1
                        },


                        title: {
                            text: 'Sales per employee per day'
                        },

                        xAxis: {
                           categories: categories
                        },

                        yAxis: {
                            categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                            title: null,
                            reversed: true
                        },

                        accessibility: {
                            point: {
                                descriptionFormatter: function (point) {
                                    var ix = point.index + 1,
                                        xName = getPointCategoryName(point, 'x'),
                                        yName = getPointCategoryName(point, 'y'),
                                        val = point.value;
                                    return ix + '. ' + xName + ' sales ' + yName + ', ' + val + '.';
                                }
                            }
                        },

                        colorAxis: {
                            min: 0,
                            minColor: '#FFFFFF',
                            maxColor: Highcharts.getOptions().colors[0]
                        },

                        legend: {
                            align: 'right',
                            layout: 'vertical',
                            margin: 0,
                            verticalAlign: 'top',
                            y: 25,
                            symbolHeight: 280
                        },

                        tooltip: {
                            formatter: function () {
                                return '<b>' + getPointCategoryName(this.point, 'x') + '</b> sold <br><b>' +
                                    this.point.value + '</b> items on <br><b>' + getPointCategoryName(this.point, 'y') + '</b>';
                            }
                        },

                        series: [{
                            name: 'Sales per employee',
                            borderWidth: 1,
                            data: sale,
                            dataLabels: {
                                enabled: true,
                                color: '#000000'
                            }
                        }],

                        responsive: {
                            rules: [{
                                condition: {
                                    maxWidth: 500
                                },
                                chartOptions: {
                                    yAxis: {
                                        labels: {
                                            formatter: function () {
                                                return this.value.charAt(0);
                                            }
                                        }
                                    }
                                }
                            }]
                        }

                    });
                })
                .catch(error => {
                    console.log(error);
                    this.error = error;
                });
        }
    }
}