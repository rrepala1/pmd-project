
$(function(){

var config = {
    content:[
      {
        type: 'row',
        content:[
        {
            width: 20,
            type: 'column',
            content:[
              {
                title: 'Filter',
                type: 'component',
                componentName: 'filterPanel'
              }
              
            ]
          },
          {
            width: 80,
            type: 'column',
            content: [
              {
                
                type: 'row',
                content:[
                  {
                type: 'stack',
                content:[
                  {
      					type: 'component',
        					title:'Buyer',
      					componentName: 'heatMapBuyer'
    					},
                  {
                    
                    type: 'component',
                    title: 'Vendor',
                    componentName: 'heatMapVendor'                    
                  }
                ]
              },
                  {
                    title: 'Summary',
                    type: 'component',
                    componentName: 'barChart'
                  }
                ]
              
              },
              {
                type: 'row',
                content:[
                  {
                    type: 'component',
                    title: 'Scatter - Requisition By Buyer',
                    componentName: 'bubbleChart'                    
                  },
                  {
                    title: 'Requisition By Purchasing Group Manager',
                    type: 'component',
                    componentName: 'stackedBarChart'
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };


window.myLayout = new GoldenLayout( config);
  

myLayout.registerComponent( 'filterPanel', function( container, componentState ){
    container.getElement().html( '<filter-panel-card></filter-panel-card>' );
});

myLayout.registerComponent( 'heatMapBuyer', function( container, componentState ){
    container.getElement().html( '<heatmap-buyer-card></heatmap-buyer-card>' );
});

myLayout.registerComponent( 'heatMapVendor', function( container, componentState ){
    container.getElement().html( '<heatmap-vendor-card></heatmap-vendor-card>' );
});

myLayout.registerComponent( 'barChart', function( container, componentState ){
    container.getElement().html( '<bar-chart-card></bar-chart-card>' );
});

myLayout.registerComponent( 'bubbleChart', function( container, componentState ){
    container.getElement().html( '<bubble-chart-card></bubble-chart-card>' );
});


myLayout.registerComponent( 'stackedBarChart', function( container, componentState ){
    container.getElement().html( '<stacked-bar-chart></stacked-bar-chart>' );
});


myLayout.init();

});
