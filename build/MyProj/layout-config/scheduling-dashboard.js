
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
        					title:'Scheduling Scatter Plot',
      					componentName: 'scatterPlot'
    					}
                ]
              }]
          }  
            ]
          }
        ]
      }
    ]
  };


window.myLayout = new GoldenLayout( config );
  

myLayout.registerComponent( 'filterPanel', function( container, componentState ){
    container.getElement().html( '<filter-panel-card></filter-panel-card>' );
});


myLayout.registerComponent( 'scatterPlot', function( container, componentState ){
    container.getElement().html( '<bubble-chart-card></bubble-chart-card>' );
});


myLayout.init();

});
