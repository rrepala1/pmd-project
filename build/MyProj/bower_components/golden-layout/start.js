
$(function(){
	
console.log("inside start.js");	
/*
  var config = {
    content:[
      {
        type: 'row',
        content:[
        {
            width: 80,
            type: 'column',
            content:[
              {
                title: 'Fnts 100',
                type: 'component',
                componentName: 'hey',
              },
              {
                type: 'row',
                content:[
                  {
                    type: 'component',
                    title: 'Golden',
                    componentName: 'hey',
                    width: 30,
                    componentState: { bg: 'golden_layout_spiral.png' }
                  },
                  {
                    title: 'Layout',
                    type: 'component',
                    componentName: 'hey',
                    componentState: { bg: 'golden_layout_text.png' }
                  }
                ]
              },
              {
                type: 'stack',
                content:[
                  {
                    type: 'component',
                    title: 'Acme, inc.',
                    componentName: 'hey',
                    componentState: {
                      companyName: 'Stock X'
                    }
                  },
                  {
                    
                    type: 'component',
                    title: 'LexCorp plc.',
                    componentName: 'hey',
                    componentState: {
                      companyName: 'Stock Y'
                    }
                  },
                  {
                    type: 'component',
                    title: 'Springshield plc.',
                    componentName: 'hey',
                    componentState: {
                      companyName: 'Stock Z'
                    }
                  }
                ]
              }
            ]
          },
          {
            width: 20,
            type: 'column',
            content: [
              {
                type: 'component',
                title: 'Performance',
                componentName: 'hey'
              },
              {
                height: 40,
                type: 'component',
                title: 'Market',
                componentName: 'hey'
              }
            ]
          }
        ]
      }
    ]
  };
*/

// Function StockGrid Start  

var StockDataProvider = function() {

};

StockDataProvider.prototype.getStocksBySymbol = function( symbols ) {
    var stocks = [], i;

    for( i = 0; i < STOCK_DATA.length; i++ ) {
        if( symbols.indexOf( STOCK_DATA[ i ].symbol ) !== -1 ) {
            stocks.push( STOCK_DATA[ i ] );
        }
    }

    return stocks;
};

var STOCK_DATA = [
    {
        "symbol": "III",
        "company": "3i Group",
        "price": 376.6,
        "change": 1.6,
        "changeRel": 0.42,
        "volume": 1
    },
    {
        "symbol": "ADN",
        "company": "Aberdeen Asset Management",
        "price": 429.3,
        "change": 2.9,
        "changeRel": 0.67,
        "volume": 2
    },
    {
        "symbol": "ADM",
        "company": "Admiral Group",
        "price": 1,
        "change": 8,
        "changeRel": 0.64,
        "volume": 523
    },
    {
        "symbol": "AGK",
        "company": "Aggreko",
        "price": 1,
        "change": 7,
        "changeRel": 0.43,
        "volume": 608
    },
    {
        "symbol": "AAL",
        "company": "Anglo American",
        "price": 1,
        "change": 5.5,
        "changeRel": 0.37,
        "volume": 3
    },
    {
        "symbol": "ANTO",
        "company": "Antofagasta",
        "price": 761.5,
        "change": 2.5,
        "changeRel": 0.33,
        "volume": 1
    },
    {
        "symbol": "ARM",
        "company": "ARM Holdings",
        "price": 938,
        "change": 16.5,
        "changeRel": 1.73,
        "volume": 2
    },
    {
        "symbol": "AHT",
        "company": "Ashtead Group",
        "price": 1,
        "change": 1,
        "changeRel": 0.1,
        "volume": 1
    },
    {
        "symbol": "ABF",
        "company": "Associated British Foods",
        "price": 2,
        "change": 11,
        "changeRel": 0.42,
        "volume": 823
    },
    {
        "symbol": "AZN",
        "company": "AstraZeneca",
        "price": 4,
        "change": 23,
        "changeRel": 0.51,
        "volume": 1
    },
    {
        "symbol": "AV",
        "company": "Aviva",
        "price": 526.5,
        "change": 1,
        "changeRel": 0.19,
        "volume": 4
    },
    {
        "symbol": "BAB",
        "company": "Babcock International Group",
        "price": 1,
        "change": 25,
        "changeRel": 2.35,
        "volume": 1
    },
    {
        "symbol": "BA",
        "company": "BAE Systems",
        "price": 458.1,
        "change": 0.9,
        "changeRel": 0.2,
        "volume": 4
    },
    {
        "symbol": "BARC",
        "company": "Barclays",
        "price": 229.4,
        "change": 0.6,
        "changeRel": 0.26,
        "volume": 35
    },
    {
        "symbol": "BDEV",
        "company": "Barratt Developments",
        "price": 385,
        "change": 4.3,
        "changeRel": 1.1,
        "volume": 3
    },
    {
        "symbol": "BG",
        "company": "BG Group",
        "price": 1,
        "change": 25,
        "changeRel": 2.12,
        "volume": 5
    },
    {
        "symbol": "BLT",
        "company": "BHP Billiton",
        "price": 1,
        "change": 6.5,
        "changeRel": 0.35,
        "volume": 5
    },
    {
        "symbol": "BP",
        "company": "BP",
        "price": 468.3,
        "change": 1.85,
        "changeRel": 0.39,
        "volume": 20
    },
    {
        "symbol": "BATS",
        "company": "British American Tobacco",
        "price": 3,
        "change": 4,
        "changeRel": 0.11,
        "volume": 2
    },
    {
        "symbol": "BLND",
        "company": "British Land Co",
        "price": 713.5,
        "change": 6.5,
        "changeRel": 0.9,
        "volume": 1
    },
    {
        "symbol": "BSY",
        "company": "British Sky Broadcasting Group",
        "price": 875,
        "change": 1,
        "changeRel": 0.11,
        "volume": 2
    },
    {
        "symbol": "BT.A",
        "company": "BT Group",
        "price": 387.3,
        "change": 2.1,
        "changeRel": 0.54,
        "volume": 9
    },
    {
        "symbol": "BNZL",
        "company": "Bunzl",
        "price": 1,
        "change": 17,
        "changeRel": 1.06,
        "volume": 512
    },
    {
        "symbol": "BRBY",
        "company": "Burberry Group",
        "price": 1,
        "change": 2,
        "changeRel": 0.13,
        "volume": 966
    },
    {
        "symbol": "CPI",
        "company": "Capita",
        "price": 1,
        "change": 10,
        "changeRel": 0.85,
        "volume": 588
    },
    {
        "symbol": "CCL",
        "company": "Carnival",
        "price": 2,
        "change": 1,
        "changeRel": 0.04,
        "volume": 1
    },
    {
        "symbol": "CNA",
        "company": "Centrica",
        "price": 319.9,
        "change": 2.1,
        "changeRel": 0.65,
        "volume": 9
    },
    {
        "symbol": "CCH",
        "company": "Coca-Cola HBC AG (CDI)",
        "price": 1,
        "change": 5,
        "changeRel": 0.36,
        "volume": 319
    },
    {
        "symbol": "CPG",
        "company": "Compass Group",
        "price": 967,
        "change": 6.5,
        "changeRel": 0.67,
        "volume": 2
    },
    {
        "symbol": "CRH",
        "company": "CRH",
        "price": 1,
        "change": 33,
        "changeRel": 2.23,
        "volume": 2
    },
    {
        "symbol": "DGE",
        "company": "Diageo",
        "price": 1,
        "change": 40.5,
        "changeRel": 2.23,
        "volume": 5
    },
    {
        "symbol": "EZJ",
        "company": "easyJet",
        "price": 1,
        "change": 35,
        "changeRel": 2.51,
        "volume": 1
    },
    {
        "symbol": "EXPN",
        "company": "Experian",
        "price": 1,
        "change": 14,
        "changeRel": 1.31,
        "volume": 1
    },
    {
        "symbol": "FRES",
        "company": "Fresnillo",
        "price": 821,
        "change": 5,
        "changeRel": 0.61,
        "volume": 777
    },
    {
        "symbol": "FLG",
        "company": "Friends Life Group Limited",
        "price": 303,
        "change": 0.4,
        "changeRel": 0.13,
        "volume": 2
    },
    {
        "symbol": "GFS",
        "company": "G4S",
        "price": 260.4,
        "change": 0.9,
        "changeRel": 0.35,
        "volume": 2
    },
    {
        "symbol": "GKN",
        "company": "GKN",
        "price": 340.5,
        "change": 7.3,
        "changeRel": 2.1,
        "volume": 4
    },
    {
        "symbol": "GSK",
        "company": "GlaxoSmithKline",
        "price": 1,
        "change": 9,
        "changeRel": 0.62,
        "volume": 7
    },
    {
        "symbol": "GLEN",
        "company": "Glencore",
        "price": 355.5,
        "change": 3.25,
        "changeRel": 0.91,
        "volume": 25
    },
    {
        "symbol": "HMSO",
        "company": "Hammerson",
        "price": 603,
        "change": 3.5,
        "changeRel": 0.58,
        "volume": 1
    },
    {
        "symbol": "HL",
        "company": "Hargreaves Lansdown",
        "price": 987.5,
        "change": 17.5,
        "changeRel": 1.74,
        "volume": 775
    },
    {
        "symbol": "HSBA",
        "company": "HSBC Holdings",
        "price": 658.2,
        "change": 0.8,
        "changeRel": 0.12,
        "volume": 14
    },
    {
        "symbol": "IMI",
        "company": "IMI",
        "price": 1,
        "change": 12,
        "changeRel": 0.92,
        "volume": 515
    },
    {
        "symbol": "IMT",
        "company": "Imperial Tobacco Group",
        "price": 2,
        "change": 11,
        "changeRel": 0.4,
        "volume": 1
    },
    {
        "symbol": "IHG",
        "company": "InterContinental Hotels Group",
        "price": 2,
        "change": 22,
        "changeRel": 0.94,
        "volume": 783
    },
    {
        "symbol": "IAG",
        "company": "International Consolidated Airli..",
        "price": 373,
        "change": 1,
        "changeRel": 0.27,
        "volume": 5
    },
    {
        "symbol": "ITRK",
        "company": "Intertek Group",
        "price": 2,
        "change": 4,
        "changeRel": 0.15,
        "volume": 184
    },
    {
        "symbol": "INTU",
        "company": "Intu Properties",
        "price": 341.1,
        "change": 0.1,
        "changeRel": 0.03,
        "volume": 1
    },
    {
        "symbol": "ITV",
        "company": "ITV",
        "price": 215,
        "change": 1.5,
        "changeRel": 0.69,
        "volume": 12
    },
    {
        "symbol": "JMAT",
        "company": "Johnson Matthey",
        "price": 3,
        "change": 32,
        "changeRel": 1.01,
        "volume": 251
    },
    {
        "symbol": "KGF",
        "company": "Kingfisher",
        "price": 315.9,
        "change": 3.1,
        "changeRel": 0.97,
        "volume": 7
    },
    {
        "symbol": "LAND",
        "company": "Land Securities Group",
        "price": 1,
        "change": 1,
        "changeRel": 0.09,
        "volume": 1
    },
    {
        "symbol": "LGEN",
        "company": "Legal & General Group",
        "price": 237.1,
        "change": 1,
        "changeRel": 0.42,
        "volume": 8
    },
    {
        "symbol": "LLOY",
        "company": "Lloyds Banking Group",
        "price": 73.54,
        "change": 1.04,
        "changeRel": 1.39,
        "volume": 83
    },
    {
        "symbol": "LSE",
        "company": "London Stock Exchange Group",
        "price": 1,
        "change": 10,
        "changeRel": 0.54,
        "volume": 481
    },
    {
        "symbol": "MKS",
        "company": "Marks & Spencer Group",
        "price": 426,
        "change": 1,
        "changeRel": 0.24,
        "volume": 2
    },
    {
        "symbol": "MGGT",
        "company": "Meggitt",
        "price": 483,
        "change": 2.4,
        "changeRel": 0.49,
        "volume": 2
    },
    {
        "symbol": "MNDI",
        "company": "Mondi",
        "price": 1,
        "change": 9,
        "changeRel": 0.85,
        "volume": 809
    },
    {
        "symbol": "MRW",
        "company": "Morrison (Wm) Supermarkets",
        "price": 176.1,
        "change": 0.4,
        "changeRel": 0.23,
        "volume": 9
    },
    {
        "symbol": "NG",
        "company": "National Grid",
        "price": 895.5,
        "change": 2,
        "changeRel": 0.22,
        "volume": 4
    },
    {
        "symbol": "NXT",
        "company": "Next",
        "price": 6,
        "change": 25,
        "changeRel": 0.36,
        "volume": 282
    },
    {
        "symbol": "OML",
        "company": "Old Mutual",
        "price": 191.5,
        "change": 2.5,
        "changeRel": 1.29,
        "volume": 14
    },
    {
        "symbol": "PSON",
        "company": "Pearson",
        "price": 1,
        "change": 28,
        "changeRel": 2.38,
        "volume": 4
    },
    {
        "symbol": "PSN",
        "company": "Persimmon",
        "price": 1,
        "change": 19,
        "changeRel": 1.39,
        "volume": 673
    },
    {
        "symbol": "PFC",
        "company": "Petrofac Ltd.",
        "price": 1,
        "change": 7,
        "changeRel": 0.66,
        "volume": 1
    },
    {
        "symbol": "PRU",
        "company": "Prudential",
        "price": 1,
        "change": 8.5,
        "changeRel": 0.6,
        "volume": 3
    },
    {
        "symbol": "RRS",
        "company": "Randgold Resources Ltd.",
        "price": 4,
        "change": 7,
        "changeRel": 0.15,
        "volume": 363
    },
    {
        "symbol": "RB",
        "company": "Reckitt Benckiser Group",
        "price": 5,
        "change": 45,
        "changeRel": 0.83,
        "volume": 1
    },
    {
        "symbol": "REL",
        "company": "Reed Elsevier",
        "price": 995.5,
        "change": 3,
        "changeRel": 0.3,
        "volume": 2
    },
    {
        "symbol": "REX",
        "company": "Rexam",
        "price": 498.9,
        "change": 2.6,
        "changeRel": 0.52,
        "volume": 1
    },
    {
        "symbol": "RIO",
        "company": "Rio Tinto",
        "price": 3,
        "change": 30,
        "changeRel": 0.94,
        "volume": 3
    },
    {
        "symbol": "RR",
        "company": "Rolls-Royce Holdings",
        "price": 1,
        "change": 12,
        "changeRel": 1.17,
        "volume": 4
    },
    {
        "symbol": "RBS",
        "company": "Royal Bank of Scotland Group",
        "price": 346.7,
        "change": 3,
        "changeRel": 0.86,
        "volume": 7
    },
    {
        "symbol": "RDSA",
        "company": "Royal Dutch Shell 'A'",
        "price": 2,
        "change": 1,
        "changeRel": 0.04,
        "volume": 9
    },
    {
        "symbol": "RDSB",
        "company": "Royal Dutch Shell 'B'",
        "price": 2,
        "change": 2,
        "changeRel": 0.08,
        "volume": 2
    },
    {
        "symbol": "RMG",
        "company": "Royal Mail",
        "price": 423.3,
        "change": 0.1,
        "changeRel": 0.02,
        "volume": 1
    },
    {
        "symbol": "RSA",
        "company": "RSA Insurance Group",
        "price": 470,
        "change": 5,
        "changeRel": 1.05,
        "volume": 4
    },
    {
        "symbol": "SAB",
        "company": "SABMiller",
        "price": 3,
        "change": 334.5,
        "changeRel": 9.82,
        "volume": 17
    },
    {
        "symbol": "SGE",
        "company": "Sage Group",
        "price": 383,
        "change": 0.2,
        "changeRel": 0.05,
        "volume": 2
    },
    {
        "symbol": "SBRY",
        "company": "Sainsbury (J)",
        "price": 284.2,
        "change": 2.9,
        "changeRel": 1.01,
        "volume": 5
    },
    {
        "symbol": "SDR",
        "company": "Schroders",
        "price": 2,
        "change": 17,
        "changeRel": 0.69,
        "volume": 249
    },
    {
        "symbol": "SVT",
        "company": "Severn Trent",
        "price": 1,
        "change": 20,
        "changeRel": 1.03,
        "volume": 512
    },
    {
        "symbol": "SHP",
        "company": "Shire Plc",
        "price": 5,
        "change": 15,
        "changeRel": 0.28,
        "volume": 1
    },
    {
        "symbol": "SN",
        "company": "Smith & Nephew",
        "price": 1,
        "change": 5,
        "changeRel": 0.47,
        "volume": 1
    },
    {
        "symbol": "SMIN",
        "company": "Smiths Group",
        "price": 1,
        "change": 7,
        "changeRel": 0.52,
        "volume": 855
    },
    {
        "symbol": "SPD",
        "company": "Sports Direct International",
        "price": 690,
        "change": 22.5,
        "changeRel": 3.16,
        "volume": 1
    },
    {
        "symbol": "SSE",
        "company": "SSE",
        "price": 1,
        "change": 5,
        "changeRel": 0.34,
        "volume": 2
    },
    {
        "symbol": "STJ",
        "company": "St James's Place",
        "price": 694.5,
        "change": 5.5,
        "changeRel": 0.79,
        "volume": 1
    },
    {
        "symbol": "STAN",
        "company": "Standard Chartered",
        "price": 1,
        "change": 7.5,
        "changeRel": 0.6,
        "volume": 4
    },
    {
        "symbol": "SL",
        "company": "Standard Life",
        "price": 412.1,
        "change": 1.5,
        "changeRel": 0.37,
        "volume": 3
    },
    {
        "symbol": "TSCO",
        "company": "Tesco",
        "price": 228.5,
        "change": 0.15,
        "changeRel": 0.07,
        "volume": 19
    },
    {
        "symbol": "TPK",
        "company": "Travis Perkins",
        "price": 1,
        "change": 16,
        "changeRel": 0.95,
        "volume": 682
    },
    {
        "symbol": "TT",
        "company": "TUI Travel",
        "price": 365.7,
        "change": 5.6,
        "changeRel": 1.56,
        "volume": 9
    },
    {
        "symbol": "TLW",
        "company": "Tullow Oil",
        "price": 700.5,
        "change": 6,
        "changeRel": 0.85,
        "volume": 1
    },
    {
        "symbol": "ULVR",
        "company": "Unilever",
        "price": 2,
        "change": 4,
        "changeRel": 0.15,
        "volume": 2
    },
    {
        "symbol": "UU",
        "company": "United Utilities Group",
        "price": 857.5,
        "change": 8.5,
        "changeRel": 1,
        "volume": 1
    },
    {
        "symbol": "VOD",
        "company": "Vodafone Group",
        "price": 201.5,
        "change": 2.15,
        "changeRel": 1.06,
        "volume": 39
    },
    {
        "symbol": "WEIR",
        "company": "Weir Group",
        "price": 2,
        "change": 31,
        "changeRel": 1.15,
        "volume": 581
    },
    {
        "symbol": "WTB",
        "company": "Whitbread",
        "price": 4,
        "change": 44,
        "changeRel": 1.04,
        "volume": 430
    },
    {
        "symbol": "WOS",
        "company": "Wolseley",
        "price": 3,
        "change": 22,
        "changeRel": 0.67,
        "volume": 395
    },
    {
        "symbol": "WPP",
        "company": "WPP",
        "price": 1,
        "change": 12,
        "changeRel": 0.94,
        "volume": 2
    }
];

var StockGridComponent = function( container, state ) {
  this._container = container;
  this._state = state;
  this._grid = null;
  this._stockDataProvider = new StockDataProvider();
  this._columns = [
    {id: "symbol", name: "Symbol", field: "symbol"},
    {id: "company", name: "Company", field: "company"},
    {id: "price", name: "Price", field: "price"},
    {id: "change", name: "Change", field: "change"},
    {id: "changeRel", name: "Change %", field: "changeRel"},
    {id: "volume", name: "Volume", field: "volume"}
  ];
  this._options = {
    editable: false,
    enableAddRow: false,
    enableCellNavigation: true
  };

  container.on( 'open', this._scheduleGridCreation, this );
};


StockGridComponent.prototype._scheduleGridCreation = function() {
  var interval = setInterval(function(){
    var stylesheetNodes = $('link[rel=stylesheet]'), i;
    
    for( i = 0; i < stylesheetNodes.length; i++ ) {
      if( stylesheetNodes[ i ].sheet === null ){
        return;
      }
    }
    
    clearInterval( interval );
    this._createGrid();
    
  }.bind( this ), 10 );
};

StockGridComponent.prototype._createGrid = function() {
  this._grid = new Slick.Grid( 
    this._container.getElement(),
    this._stockDataProvider.getStocksBySymbol( this._state.symbols ), 
    this._columns,
    this._options
  );

  this._container.on( 'resize', this._resize, this );
  this._container.on( 'destroy', this._destroy, this );
  this._resize();
};

StockGridComponent.prototype._resize = function() {
  this._grid.resizeCanvas();
  this._grid.autosizeColumns();
};

StockGridComponent.prototype._destroy = function() {
  this._grid.destroy();
};

// Function StockGrid End

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
                title: 'Fnts 100',
                type: 'component',
                componentName: 'hey',
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
        title:'FTSE 100 (1-50)',
      componentName: 'hey',
      componentState: { 
        symbols: [
          "III","ADN","ADM","AGK","AAL","ANTO",
          "ARM","AHT","ABF","AZN","AV","BAB",
          "BA","BARC","BDEV","BG","BLT","BP",
          "BATS","BLND","BSY","BT.A","BNZL",
          "BRBY","CPI","CCL","CNA","CCH",
          "CPG","CRH","DGE","EZJ","EXPN",
          "FRES","FLG","GFS","GKN","GSK",
          "GLEN","HMSO","HL","HSBA","IMI","IMT",
          "IHG","IAG","ITRK","INTU","ITV","JMAT"
        ]
      }
    },
                  {
                    
                    type: 'component',
                    title: 'LexCorp plc.',
                    componentName: 'hey',
                    componentState: {
                      companyName: 'Stock Y'
                    }
                  },
                  {
                    type: 'component',
                    title: 'Springshield plc.',
                    componentName: 'hey',
                    componentState: {
                      companyName: 'Stock Z'
                    }
                  }
                ]
              },
                  {
                    title: 'Layout',
                    type: 'component',
                    componentName: 'testComponent',
                    componentState: { bg: 'golden_layout_text.png' }
                  }
                ]
              
              },
              {
                type: 'row',
                content:[
                  {
                    type: 'component',
                    title: 'Golden',
                    componentName: 'hey',
                    width: 50,
                    componentState: { bg: 'golden_layout_spiral.png' }
                  },
                  {
                    title: 'Layout',
                    type: 'component',
                    componentName: 'hey',
                    componentState: { bg: 'golden_layout_text.png' }
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  };



/*
var config = {
    content: [{
        type: 'row',
        content:[{
            type: 'component',
            componentName: 'testComponent',
            componentState: { label: 'A' }
        },{
            type: 'column',
            content:[{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'B' }
            },{
                type: 'component',
                componentName: 'testComponent',
                componentState: { label: 'C' }
            }]
        }]
    }]
};
*/

  window.myLayout = new GoldenLayout( config );

  myLayout.registerComponent( 'hey', function( container, state ) {
    if( state.bg ) {
      container
        .getElement()
        .text( 'hey');
    }
  });
  
  //myLayout.registerComponent( 'stockGrid', StockGridComponent );

myLayout.registerComponent( 'testComponent', function( container, componentState ){
	
	
    //container.getElement().html( '<paper-card><h2> Hello World !!</h2></paper-card>' );
    container.getElement().html( '<greeting-card></greeting-card>' );
});

  myLayout.init();
});
