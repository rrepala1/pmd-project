
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
        					title:'Requisition Details',
      					componentName: 'requisitionSearch'
    					}
                ]
              }]
              },
              {
                type: 'row',
                content:[
                {
                	type: 'stack',
                content:[
                  {
                    type: 'component',
                    title: 'Requisition with*',
                    componentName: 'heatMapBuyer'                    
                  },
                  {
                    
                    type: 'component',
                    title: 'Short Cycle Requistions',
                    componentName: 'heatMapBuyer'                    
                  },
                  {
                    
                    type: 'component',
                    title: 'Download Details',
                    componentName: 'heatMapBuyer'                    
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


myLayout.registerComponent( 'requisitionSearch', function( container, componentState ){
    container.getElement().html( '<B>Requisition Filter Criterias</B>' );
});

myLayout.registerComponent( 'heatMapBuyer', function( container, componentState ){
    container.getElement().html( '<heatmap-buyer-card></heatmap-buyer-card>' );
});



myLayout.init();

});
