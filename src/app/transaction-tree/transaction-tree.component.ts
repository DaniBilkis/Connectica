import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  HostListener
} from '@angular/core';

import * as _ from 'underscore';
// import { D3Service, D3, Selection }      from 'd3-ng2-service';

import {
  D3Service,
  D3,
  Axis,
  BrushBehavior,
  BrushSelection,
  D3BrushEvent,
  ScaleLinear,
  ScaleOrdinal,
  Selection,
  Transition
} from 'd3-ng2-service';

import * as $ from 'jquery';

import panZoom from 'jquery.panzoom';



import { SUBWAYMAP_DATA }       from '../_shared/subwayMapData';
import { SUBWAY_CONFIGURATION } from '../_shared/subwayMapConfiguration';
import { SubwayMapHelper }      from './helper';
import Helper                   from '../_shared/helper';
import Station                  from '../_shared/stations';


@Component({
  selector: 'app-transaction-tree',
  templateUrl: './transaction-tree.component.html',
  styleUrls: ['./transaction-tree.component.scss']
})
export class TransactionTreeComponent implements OnInit {


  private d3: D3; // <-- Define the private member which will hold the d3 reference
  private parentNativeElement: any;
  d3ParentElement;
  svg;
  container;

  // $.panZoom = panZoom;

  // const tube = new Tube();
  helper = new Helper();

  subwayMapHelper = new SubwayMapHelper();

  config = SUBWAY_CONFIGURATION;
  // config.transit = SUBWAYMAP_DATA;
  // config.transit.labels = 1;
  // config.transit.legend = 1;



  constructor( element: ElementRef, d3Service: D3Service ) { // <-- pass the D3 Service into the constructor
     this.d3 = d3Service.getD3(); // <-- obtain the d3 object from the D3 Service
     this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {

    const d3 = this.d3; // <-- for convenience use a block scope variable
    // let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

    if (this.parentNativeElement !== null) {

      this.d3ParentElement = d3.select( this.parentNativeElement ); // <-- use the D3 select method

      // Do more D3 things
      this.buildSVG();

      // this.addListeners();
      /*
      this.container = d3.select('#tube-map');
      this.container
        .attr( 'width', '1600')
        .attr( 'height', '1000')
        */

      // this.render( this.config );
    }


  }

  buildSVG(): void {

    let lineData = [
      { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
      { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
      { "x": 80,  "y": 5},  { "x": 100, "y": 60}
      ];



    this.d3ParentElement.html('');
    this.svg = this.d3ParentElement.append( 'svg' )
      .attr('width', '1600' )
      .attr('height', '800' );
      //.style('background-color', 'blue' );



    this.svg.append("path")
      .attr('d', 'M100,100L500,100' )
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(165, 157, 144)')
      .style( 'stroke-width', 8)
      .style( 'stroke-opacity', 0.9)
      .style( 'fill', 'none');



    this.svg.append("path")
      .attr('d', 'M300,100L500,200' )
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(246, 128, 44)')
      .style( 'stroke-width', 8)
      .style( 'stroke-opacity', 0.9)
      .style( 'fill', 'none');

    this.svg.append("circle")
      .attr('r', '4' )
      .attr( 'cx', 100)
      .attr('cy', 100)
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(68, 68, 68)')
      .style( 'stroke-width', 2)
      //.style( 'stroke-opacity', 0.9)
      .style( 'fill', 'rgb(255, 255, 255)')
      .on('click', function(d,i) {
        // handle events here
        // d - datum
        // i - identifier or index
        // this - the `<rect>` that was clicked
        console.log('Clicked Circle!!!');
      });

    this.svg.append("circle")
      .attr('r', '4' )
      .attr( 'cx', 300)
      .attr('cy', 100)
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(68, 68, 68)')
      .style( 'stroke-width', 2)
      //.style( 'stroke-opacity', 0.9)
      .style( 'fill', 'rgb(255, 255, 255)');

    this.svg.append("circle")
      .attr('r', '4' )
      .attr( 'cx', 500)
      .attr('cy', 100)
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(68, 68, 68)')
      .style( 'stroke-width', 2)
      .style( 'fill', 'rgb(255, 255, 255)');

    this.svg.append("circle")
      .attr('r', '4' )
      .attr( 'cx', 500)
      .attr('cy', 200)
      .attr('class', 'line-michelle-s primary')
      .style( 'stroke', 'rgb(68, 68, 68)')
      .style( 'stroke-width', 2)
      .style( 'fill', 'rgb(255, 255, 255)');

    this.svg.append("text")
      .attr('x', 100)
      .attr('y', 90)
      .attr('test-anchor', 'end')
      .attr('alignment-baseline', 'middle')
      .attr('font-size', '13')
      .style( 'font-family', 'OpenSans, sans-serif')
      .style( 'font-weight', 'normal')
      .attr('transform', 'rotate(45 -10 10)')
      .text('Document created');

    //<text class="point-dani station primary" x="190" y="100" text-anchor="end" alignment-baseline="middle" dominant-baseline="middle" font-size="13" style="font-family: OpenSans, sans-serif; font-weight: normal; fill: rgb(0, 0, 0);">Vacation</text>


 // class="line-michelle-s primary" style="stroke: rgb(165, 157, 144); stroke-width: 8; stroke-opacity: 0.9; fill: none;" stroke-dasharray="3821.39013671875 3821.39013671875" stroke-dashoffset="0"
  }
/*
  var lineData = [ { "x": 1,   "y": 5},  { "x": 20,  "y": 20},
                     { "x": 40,  "y": 10}, { "x": 60,  "y": 40},
                     { "x": 80,  "y": 5},  { "x": 100, "y": 60}];

  //This is the accessor function we talked about above
  var lineFunction = d3.svg.line()
                           .x(function(d) { return d.x; })
                           .y(function(d) { return d.y; })
                           .interpolate("linear");

  //The SVG Container
  var svgContainer = d3.select("body").append("svg")
                                      .attr("width", 200)
                                      .attr("height", 200);

  //The line SVG Path we draw
  var lineGraph = svgContainer.append("path")
                              .attr("d", lineFunction(lineData))
                              .attr("stroke", "blue")
                              .attr("stroke-width", 2)
                              .attr("fill", "none");
*/
  @ViewChild('#map-svg') panZoom: ElementRef;
  // get all the other element references using elementref and use it in function below
  ngAfterViewInit(): void {
    if (this.panZoom) {
      $(this.panZoom.nativeElement).panzoom(
        {
          $zoomIn: $('.svg-zoom-in'),
          $zoomOut: $('.svg-zoom-out'),
          $zoomRange: $('#reference'),
          $reset: $('#reference')
        });
/*
      $panzoom.parent().on('mousewheel.focal', function( e ) {
        e.preventDefault();
        var delta = e.delta || e.originalEvent.wheelDelta;
        var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
        $panzoom.panzoom('zoom', zoomOut, {
          increment: 0.1,
          animate: false,
          focal: e
        });
      });
*/
    }

  }

/*
  panZoom: function($selector){
    if ($selector.panzoom("instance")) {
      $selector.panzoom("reset");
      $selector.panzoom("destroy");
    }
    var $panzoom = $selector.panzoom({
      $zoomIn: $('.svg-zoom-in'),
      $zoomOut: $('.svg-zoom-out')
    });
    $panzoom.parent().on('mousewheel.focal', function( e ) {
      e.preventDefault();
      var delta = e.delta || e.originalEvent.wheelDelta;
      var zoomOut = delta ? delta < 0 : e.originalEvent.deltaY > 0;
      $panzoom.panzoom('zoom', zoomOut, {
        increment: 0.1,
        animate: false,
        focal: e
      });
    });
  }
*/


/*
  render( options ): void {
    // reset halton sequence index
    this.helper.hRandomIndex = 0;

    // render the map
    this.renderMap( options );

    // activate pan-zoom
    // this.panZoom($('#map-svg'));
  }



  renderMap( options ) {
    let stations = SUBWAYMAP_DATA.stations;
    let width = options.width;
    let height = options.height;
    let pathInterpolation = options.pathInterpolation;
    let lines;
    let endLines;
    let legend;

    options.title = SUBWAYMAP_DATA.title;
    stations = this.processStations( stations );
    height = this.adjustHeight( height, stations.length, options );
    width = this.adjustWidth(width, stations.length, options);

    // generate lines with points
    lines = this.makeLines( stations, width, height, options );
    legend = this.makeLegend(width, lines, options);
    endLines = this.makeEndLines(lines, options);
    lines = _.union(lines, endLines);

    // draw the svg map
    this.drawMap(lines, legend, width, height, options);
  }

  processStations( stations: Station[] ): Station[] {

    let lineLabels = _.uniq( _.flatten( _.pluck(stations, 'lines') ) ); // get unique lines

    // loop through each point
    _.each( stations, function(station, i) {
      // sort all the lines consistently
      station.lines = _.sortBy( station.lines, function(lineLabel) { return lineLabels.indexOf(lineLabel); });
    });

    return stations;
  }

  adjustHeight (height: number, stationCount: number, options ): number {
    let yUnit = options.yUnit;
    let paddingY = options.padding[1];
    let activeH = height - paddingY * 2;

    // make height shorter if not enough stations
    if ( Math.floor(height / stationCount) > yUnit ) {
      activeH = yUnit * stationCount;
      height = activeH + paddingY * 2;
    }

    return height;
  }

  adjustWidth (width: number, stationCount: number, options) {
    let xUnit = options.xUnit;
    let paddingX = options.padding[0];
    let activeW = width - paddingX * 2;

    // make height shorter if not enough stations
    if ( Math.floor(width / stationCount ) > xUnit ) {
      activeW = xUnit * stationCount;
      width = activeW + paddingX * 2;
    }

    width = _.max([options.minWidth, width] );

    return width;
  }

  makeLines (stations: Station[], width: number, height: number, options) {
    // var that = this,
      // options
    let paddingX = options.padding[0];
    let paddingY = options.padding[1];
    let colors = options.colors;
    let pathTypes = options.pathTypes;
    let offsetWidth = options.offsetWidth;
    let cornerRadius = options.cornerRadius;
    let minXDiff = options.minXDiff;
    let pointRadius = options.pointRadius;
    let hubSize = options.hubSize;
      // calculations
    let activeW = width - paddingX * 2;
    let activeH = height - paddingY * 2;
    let boundaries = { minX: paddingX, minY: paddingY, maxX: width - paddingX, maxY: height - paddingY };
    let stationCount = stations.length;
    let yUnit = Math.floor(activeH / stationCount );
      // initializers
    let lines;
    let prevLines;

    // ensure y-unit is 2 or more
    if ( yUnit < 2 ) {
      yUnit = 2;
    }
    options.yUnit = yUnit;

    // loop through stations
    _.each( stations, function(station, i) {
      let nextY = paddingY + i * yUnit; // next available yUnit
      let nextX = this.getNextX( boundaries, i, stationCount, activeW, minXDiff ); // random x
      let lineCount = station.lines.length;
      let firstX = nextX;

      // loop through station's lines
      _.each( station.lines, function( lineLabel, j ) {
        // if line already exists
        let foundLine = _.findWhere( lines, {label: lineLabel} );
        let prevPoint = false;
        let lineClassName = this.subwayMapHelper.parameterize('line-' + lineLabel ) + ' primary';
        let pointClassName = this.subwayMapHelper.parameterize('point-' + lineLabel );
        let newPoint;

        // retieve previous point
        if ( foundLine ) {
          prevPoint = _.last( foundLine.points );
        }

        // if line is in previous lines, it will be straight
        if ( prevLines.indexOf(lineLabel) >= 0 && prevPoint ) {
          nextX = prevPoint.x;

          // if line already exists, make sure X is within 20% of previous X
        } else if (prevPoint) {
          nextX = this.getNextX( boundaries, i, stationCount, activeW, minXDiff, prevPoint );
        }

        // init new point
        newPoint = {
          id: _.uniqueId('p'),
          x: nextX,
          y: nextY,
          lineLabel: lineLabel,
          pointRadius: pointRadius,
          className: pointClassName + ' station'
        };

        // for first line, just add target point
        if ( j === 0 ) {
          firstX = newPoint.x;
          newPoint.label = station.label; // only the target point of the first line gets label
          newPoint.className += ' primary';
          if ( lineCount >= hubSize ) {
            newPoint.hubSize = lineCount;
            newPoint.className += ' hub';
          }

          // for additional new lines, place first point next to the first line's target point plus offset
        } else {
          newPoint.x = firstX + j * offsetWidth;
          newPoint.className += ' secondary';
        }

        // line already exists
        if ( foundLine ) {
          let transitionPoints;
          let lastPoint;

          // retrieve transition points
          transitionPoints = this.getPointsBetween( prevPoint, newPoint, pathTypes, cornerRadius, options );

          // add direction2 to previous point
          if ( transitionPoints.length > 0 && foundLine.points.length > 0 ) {
            lastPoint = _.last( foundLine.points );
            lastPoint.direction2 = transitionPoints[0].direction1;
          }

          // add transition points
          _.each( transitionPoints, function(tp) {
            tp.className = pointClassName;
            foundLine.points.push( tp );
          });

          // update last point with meta data
          lastPoint = _.last( foundLine.points );
          lastPoint = _.extend( lastPoint, newPoint );

          // line does not exist, add a new one
        } else {
          let color = this.getColor( lines, colors );
          let newLine = {
              label: lineLabel,
              color: color.hex,
              symbol: this.getSymbol( lineLabel, lines ),
              className: lineClassName,
              points: []
            };
          // add point to line, add line to lines
          newLine.points.push( newPoint );
          lines.push( newLine );
        }

      });

      prevLines = station.lines;
    });

    return lines;
  }

  getNextX( boundaries, iterator, totalPoints, width, minXDiff, prevPoint ): number {
    let x = 0;
    let prevPadding = 0.25;
    let trendPadding = 0.4;
    let percentComplete = parseFloat(iterator / totalPoints );
      // absolute min/max based on boundaries
    let absMinX = boundaries.minX;
    let absMaxX = boundaries.maxX;
      // min/max based on general trend from left to right
    let trendMinX = Math.round(percentComplete * width ) - Math.round(width * trendPadding );
    let trendMaxX = Math.round(percentComplete * width ) + Math.round(width * trendPadding );
      // create arrays
    let mins = [absMinX, trendMinX];
    let maxs = [absMaxX, trendMaxX];
    let xDiff = 0;

    // make sure point is within x% of previous point
    if ( prevPoint ) {
      mins.push(prevPoint.x - Math.round(width * prevPadding ));
      maxs.push(prevPoint.x + Math.round(width * prevPadding ));
    }

    // determine the min/max
    let minX = _.max( mins );
    let maxX = _.min( maxs );

    do {
      // ensure no logic error
      if ( minX < maxX ) {
        x =  this.subwayMapHelper.hRandom( minX, maxX );
      } else {
        x =  this.subwayMapHelper.hRandom( maxX, minX );
      }
      if ( prevPoint ) {
        xDiff = Math.abs(Math.floor(x - prevPoint.x ));
      }
    } while ( prevPoint && xDiff < minXDiff ); // ensure xDiff is above min

    return x;
  }

  getPointsBetween( p1, p2, pathTypes, cornerRadius, options ): any[] {

    let points;
    let x1 = p1.x;
    let y1 = p1.y;
    let x2 = p2.x;
    let y2 = p2.y;
    let yDiff = y2 - y1;
    let xDiff = x2 - x1;
    let xDirection = false;
    let pathType = false;

    // determine x direction
    if ( xDiff > 0 ) {
      xDirection = 'e';
    } else if ( xDiff < 0 ) {
      xDirection = 'w';
    }

    // filter and choose random path type
    pathTypes = _.filter( pathTypes, function(pt) {
      return pt.xDirection === xDirection;
    });
    pathType = _.sample( pathTypes );

    // get points if path type exists
    if ( pathType && xDirection ) {

      // retrieve directions
      let directions = pathType.directions;

      // retrieve lengths
      let x = x1;
      let y = y1;
      let lengths = this.getLengths( xDiff, yDiff, directions, y, options );

      // generate points
      _.each( directions, function( direction, i ) {
        let length = lengths[ i ];
        let point = this.translateCoordinates( x, y, direction, length );
        let pointR1 = false;
        let pointR2 = false;

        x = point.x;
        y = point.y;
        point.id = _.uniqueId('p' );
        point.direction1 = direction;

        // add transition points if corner radius
        if ( cornerRadius > 0 && cornerRadius < length / 2 ) {
          if ( direction === 's' ) {
            pointR1 = { x: x, y: y - length + cornerRadius };
            pointR2 = { x: x, y: y - cornerRadius };
          } else if ( direction === 'e' ) {
            pointR1 = { x: x - length + cornerRadius, y: y };
            pointR2 = { x: x - cornerRadius, y: y };
          } else {
            pointR1 = { x: x + length - cornerRadius, y: y };
            pointR2 = { x: x + cornerRadius, y: y };
          }
        }

        // add points
        if ( pointR1 ) { points.push(pointR1); }
        if ( pointR2 ) { points.push(pointR2); }
        points.push( point );

        // add direction out
        if ( i > 0 ) {
          points[ i - 1 ].direction2 = direction;
        }
      });

      // ensure the last point matches target
      if ( points.length > 0 ) {
        points[ points.length - 1 ].x = x2;
        points[ points.length - 1 ].y = y2;
      }

      // otherwise, just return target point
    } else {
      points.push({
        id: _.uniqueId('p'),
        direction1: 's',
        x: x2,
        y: y2
      });
    }

    return points;
  }

  getColor( lines, colors ): any {
    let i = lines.length;
    if ( i >= colors.length ) {
      i = i % lines.length;
    }
    return colors[ i ];
  }

  getSymbol( lineLabel: string, lines ) {
    // prioritize characters: uppercase label, numbers, lowercase label
    let str = lineLabel.toUpperCase() + '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ' + lineLabel.toLowerCase() + 'abcdefghijklmnopqrstuvwxyz';
    const symbols = _.pluck( lines, 'symbol');
    let symbol = str.charAt( 0 );

    // strip spaces
    str = str.replace(' ','' );

    // loop through string's characters
    for ( i = 0; i < str.length; i++ ) {
      // get next character
      chr = str.charAt(i);
      // if character not already taken, use as symbol
      if ( symbols.indexOf( chr ) < 0 ) {
        symbol = chr;
        break;
      }
    }

    return symbol;
  }

  getLengths( xDiff, yDiff, directions, y, options ) {
    let lengths;
    let rand = this.subwayMapHelper.hRandom( 20, 80 ) / 100;
    let yUnit = options.yUnit;
    let paddingY = options.padding[1];
    let i = 0;
    let timeout = 10;
    let firstY;

    // don't let in-between points overlap with yUnit
    while ( ( y + Math.round(yDiff * rand ) - paddingY ) % yUnit === 0 && i < timeout ) {
      rand = this.subwayMapHelper.hRandom( 20, 80 ) / 100;
      i++;
    }

    xDiff = Math.abs( xDiff );

    _.each( directions, function(d, i) {
      // assuming only 1 east or west
      if ( d === 'e' || d === 'w' ) {
        lengths.push( xDiff );
        // assuming only 2 souths
      } else {
        if ( i === 0 ) {
          firstY = Math.round(yDiff * rand );
          lengths.push( firstY );
        } else {
          lengths.push( yDiff - firstY );
        }
      }
    });

    return lengths;

  }

  translateCoordinates ( x, y, direction, length ) {
    let x_direction = 0;
    let y_direction = 0;

    switch( direction ) {
      case 'e':
        x_direction = 1;
        break;
      case 's':
        y_direction = 1;
        break;
      case 'w':
        x_direction = -1;
        break;
    }
    return {
      x: x + length * x_direction,
      y: y + length * y_direction
    };
  }

  makeLegend( width, lines, options ) {
    // var // options
    let canvasWidth = width;
    let canvasPaddingX = options.padding[ 0 ];
    let canvasPaddingY = options.padding[ 1 ];
    let title = options.title;
    let pointRadius = options.pointRadius;
    let pointRadiusLarge = options.pointRadiusLarge;
    let borderWidth = options.borderWidth;
    let columns = lines.length > options.legend.columnThreshold ? options.legend.columns : 1;
    let legendWidth = options.legend.columnWidth * columns;
    let padding = options.legend.padding;
    let bgColor = options.legend.bgColor;
    let titleFontSize = options.legend.titleFontSize;
    let titleMaxLineChars = options.legend.titleMaxLineChars;
    let titleLineHeight = options.legend.titleLineHeight;
    let fontSize = options.legend.fontSize;
    let lineHeight = options.legend.lineHeight;
    let gridUnit = options.legend.gridUnit;
      // calculations
    let columnWidth = Math.floor(( legendWidth - padding * 2 ) / columns );
    let titleLines = this.getTitleLines( title, titleMaxLineChars );
    let x1 = legendWidth >= canvasWidth / 2 ? canvasWidth - legendWidth - padding - borderWidth * 2 : canvasWidth / 2;
    let y1 = canvasPaddingY;
    let lineCount = lines.length;
    let height = padding * 2 + lineHeight * Math.ceil(lineCount / columns ) + titleLineHeight * titleLines.length;
      // initializers
    let legend = { dots: [], labels: [], lines: [], rects: [] };

    // break up lines into columns
    let columnLines;
    let perColumn = Math.floor(lineCount / columns );
    let remainder = lineCount % columns;
    let lineIndex = 0;

    _.times(columns, function( i ) {
      let start = lineIndex;
      let end = lineIndex + perColumn;
      // add remainder to first column
      if ( i === 0 )  { end += remainder; }
      columnLines.push(
        lines.slice( start, end )
      );
      lineIndex = end;
    });

    // create rectangle
    legend.rects.push({
      width: legendWidth,
      height: height,
      rectX: x1,
      rectY: y1,
      pointColor: bgColor,
      type: 'legend'
    });

    // add legend padding
    x1 += padding;
    y1 += padding;

    // add title
    _.each( titleLines, function(titleLine, i) {
      legend.labels.push({
        text: titleLine,
        anchor: 'start',
        labelX: x1,
        labelY: y1,
        fontSize: titleFontSize,
        type: 'legendTitle'
      });
      y1 += titleLineHeight;
    });

    // add a space
    y1 += gridUnit;

    // loop through columns
    _.each(columnLines, function(columnLine, c) {

      let colOffset = columnWidth * c;
      let y2 = y1;

      // loop through lines
      _.each(columnLine, function(line, i){

        let lineClassName = this.subwayMapHelper.parameterize('line-' + line.label ) + ' legend';
        let pointClassName = this.subwayMapHelper.parameterize('point-' + line.label ) + ' legend';

        // add symbol dot
        legend.dots.push({
          x: colOffset + x1 + pointRadiusLarge, y: y2,
          pointColor: line.color,
          symbol: line.symbol,
          pointRadius: pointRadiusLarge,
          className: pointClassName
        });
        // add symbol label
        legend.labels.push({
          text: line.symbol,
          labelX: colOffset + x1 + pointRadiusLarge,
          labelY: y2 + 1,
          symbol: line.symbol,
          className: pointClassName
        });

        // add line
        legend.lines.push({
          color: line.color,
          type: 'legend',
          className: lineClassName,
          points: [
            {x: colOffset + x1 + pointRadiusLarge * 2, y: y2, className: pointClassName},
            {x: colOffset + x1 + pointRadiusLarge * 2 + gridUnit * 4, y: y2, className: pointClassName}
          ]
        });
        // add line dot
        legend.dots.push({
          x: colOffset + x1 + pointRadiusLarge * 2 + gridUnit * 2, y: y2,
          pointRadius: pointRadius,
          className: pointClassName
        });
        // add line label
        legend.labels.push({
          text: line.label + ' Line',
          labelX: colOffset + x1 + pointRadiusLarge * 2 + gridUnit * 5,
          labelY: y2,
          fontSize: fontSize,
          anchor: 'start',
          type: 'legend',
          className: pointClassName
        });

        y2 += lineHeight;
      });


    });

    return legend;

  }

  getTitleLines( title, titleMaxLineChars ): any {
    let lines;
    let titleLength = title.length;
    let words = title.split(' ');
    let currentLine = '';

    _.each(words, function( word ) {
      // if new word goes over max, start new line
      if ( word.length + currentLine.length + 1 > titleMaxLineChars ) {
        lines.push( currentLine );
        currentLine = word;
      } else {
        currentLine += ' ' + word;
      }
    });

    if ( currentLine.length ) { lines.push(currentLine); }

    return lines;
  }

  makeEndLines (lines, options) {
    let pointRadiusLarge = options.pointRadiusLarge;
    let lineLength = pointRadiusLarge * 2 + 10;
    let endLines;
    let yHash;

    _.each( lines, function( line, i ) {
      let firstPoint = line.points[0];
      let lastPoint = line.points[ line.points.length - 1 ];
      let lineClassName = this.subwayMapHelper.parameterize('line-' + line.label ) + ' end-line';
      let pointClassName = this.subwayMapHelper.parameterize('point-' + line.label ) + ' end-line';
      let lineStart = { className: lineClassName + ' start-line', type: 'symbol', points: [] };
      let lineEnd = { className: lineClassName, type: 'symbol', points: [] };

      let fpId = 'p' + firstPoint.y;
      let lpId = 'p' + lastPoint.y;

      // keep track of existing y points
      if ( yHash[fpId] !== undefined ) {
        yHash[fpId]++;
      } else {
        yHash[fpId] = 0;
      }
      if (yHash[lpId] !== undefined ) {
        yHash[lpId]++;
      } else {
        yHash[lpId] = 0;
      }

      // add start line
      lineStart.points.push({
        x: firstPoint.x,
        y: firstPoint.y - lineLength - yHash[ fpId ] % 2 * lineLength, // stagger y's that are next to each other
        symbol: line.symbol,
        pointColor: line.color,
        pointRadius: pointRadiusLarge,
        className: pointClassName + ' symbol'
      });
      lineStart.points.push({
        x: firstPoint.x,
        y: firstPoint.y,
        className: pointClassName
      });

      // make end line
      lineEnd.points.push({
        x: lastPoint.x,
        y: lastPoint.y,
        className: pointClassName
      });
      lineEnd.points.push({
        x: lastPoint.x,
        y: lastPoint.y + lineLength + yHash[ lpId ] % 2 * lineLength, // stagger y's that are next to each other
        symbol: line.symbol,
        pointColor: line.color,
        pointRadius: pointRadiusLarge,
        className: pointClassName + ' symbol'
      });

      // add end lines
      endLines.push(lineStart, lineEnd);

    });

    return endLines;
  }

  drawMap(lines, legend, width, height, options) {
    let bgColor = options.bgColor;
    let svg;
    let points;
    let dots;
    let labels;
    let rects;
    let showLegend = SUBWAYMAP_DATA.legend;
    let showLabels = SUBWAYMAP_DATA.labels;

    // reset if already there
    if ($('#map-svg').length > 0) {
      $("#map-svg").remove();
    }

    // init svg and add to DOM
    this.d3ParentElement.html('');
    svg = this.d3ParentElement.append( 'svg' )
      .attr('id', 'map-svg')
      .attr('width', width)
      .attr('height', height);
      */
    /*
      svg = d3.select("#svg-wrapper")
      .append("svg")
      .attr("id", "map-svg")
      .attr("width", width)
      .attr("height", height);
*/
    /*
    // extract points, dots, labels from lines
    points = _.flatten( _.pluck(lines, 'points') );
    dots = _.filter(points, function(p) { return p.pointRadius && p.pointRadius > 0; });
    if (showLabels) { labels = _.filter(points, function(p){ return p.label !== undefined || p.symbol !== undefined; }); }
    rects = _.filter(points, function(p) { return p.hubSize; });

    // add legend items
    if (showLegend) {
      lines = _.union(lines, legend.lines);
      dots = _.union(dots, legend.dots);
      labels = _.union(labels, legend.labels);
    }

    // add styles
    lines = this.addLineStyles(lines, options);
    dots = this.addDotStyles(dots, options);
    labels = this.addLabelStyles(labels, options);
    rects = this.addRectStyles(rects, options);
    legend.rects = this.addRectStyles(legend.rects, options);

    // draw lines, dots, labels, rects
    if ( showLegend ) {
      this.drawRects(svg, legend.rects);
    }
    this.drawLines(svg, lines, options);
    this.drawDots(svg, dots, options);
    this.drawRects(svg, rects, options);
    this.drawLabels(svg, labels, options);
  }

  addLineStyles (lines, options): any[] {
    let strokeOpacity = options.strokeOpacity;
    let strokeWidth = options.strokeWidth;

    _.each(lines, function( line ){
      line.className = line.className || '';
      line.strokeOpacity = strokeOpacity;
      // symbol
      if ( line.type === 'symbol' ) {
        line.color = '#aaaaaa';
        line.strokeWidth = 2;
        line.strokeDash = '2,2';

        // normal line
      } else {
        line.strokeWidth = strokeWidth;
        line.strokeDash = 'none';
      }
    });

    return lines;
  }

  addDotStyles (dots, options): any[] {
    let pointColor = options.pointColor;
    let borderColor = options.borderColor;
    let borderWidth = options.borderWidth;

    _.each(dots, function(dot) {
      dot.className = dot.className || '';
      // train symbol
      if ( dot.symbol ) {
        dot.borderColor = dot.pointColor;
        dot.borderWidth = borderWidth;
        // point/station
      } else {
        dot.pointColor = pointColor;
        dot.borderColor = borderColor;
        dot.borderWidth = borderWidth;
      }
    });

    return dots;
  }

  addLabelStyles (labels, options) {
    let fontFamily = options.fontFamily;
    let textColor = options.textColor;
    let fontSize = options.fontSize;
    let fontWeight = options.fontWeight;

    _.each(labels, function(label) {
      label.className = label.className || '';
      label.fontFamily = fontFamily;
      label.alignment = 'middle';
      // symbol
      if (label.symbol) {
        label.textColor = '#ffffff';
        label.fontSize = 14;
        label.fontWeight = 'normal';
        label.anchor = 'middle';
        label.text = label.symbol;
        label.labelX = label.labelX !== undefined ? label.labelX : label.x;
        label.labelY = label.labelY !== undefined ? label.labelY : label.y + 1;
        // label
      } else {
        label.textColor = textColor;
        label.fontSize = label.fontSize || fontSize;
        label.fontWeight = fontWeight;
        label.anchor = label.anchor || 'end';
        label.text = label.text || label.label;
        label.labelX = label.labelX !== undefined ? label.labelX : label.x - 10;
        label.labelY = label.labelY !== undefined ? label.labelY : label.y;
      }
    });

    return labels;
  }

  addRectStyles (rects, options): any[] {
    let pointColor = options.pointColor;
    let borderColor = options.borderColor;
    let borderWidth = options.borderWidth;
    let borderRadius = options.borderRadius;
    let pointRadius = options.pointRadius;
    let dotSize = pointRadius * 2;
    let offsetWidth = options.offsetWidth - dotSize;

    _.each(rects, function(rect) {
      rect.className = rect.className || '';
      // hub
      if (rect.hubSize) {
        rect.pointColor = pointColor;
        rect.borderColor = borderColor;
        rect.borderWidth = borderWidth;
        rect.borderRadius = borderRadius;
        rect.width = rect.hubSize * dotSize + offsetWidth * ( rect.hubSize - 1 );
        rect.height = dotSize;
        rect.rectX = rect.x - pointRadius;
        rect.rectY = rect.y - pointRadius;
        // legend
      } else if (rect.type === 'legend') {
        rect.borderColor = borderColor;
        rect.borderWidth = borderWidth;
        rect.borderRadius = 0;
      }
    });

    return rects;
  }

  drawDots (svg, dots): void {
    svg.selectAll("dot")
      .data(dots)
      .enter().append("circle")
      .attr("r", function(d) { return d.pointRadius; })
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; })
      .attr("class", function(d) { return d.className || ''; })
      .style("fill", function(d){ return d.pointColor; })
      .style("stroke", function(d){ return d.borderColor; })
      .style("stroke-width", function(d){ return d.borderWidth; });
  }

  drawRects (svg, rects): void {
    _.each(rects, function(r) {
      svg.append("rect")
        .attr("width", r.width)
        .attr("height", r.height)
        .attr("x", r.rectX)
        .attr("y", r.rectY)
        .attr("rx", r.borderRadius)
        .attr("ry", r.borderRadius)
        .attr("class", r.className)
        .style("fill", r.pointColor)
        .style("stroke", r.borderColor)
        .style("stroke-width", r.borderWidth);
    });
  }

  drawLabels (svg, labels, options): void {
    svg.selectAll("text")
      .data(labels)
      .enter().append("text")
      .text( function (d) { return d.text; })
      .attr("class", function(d) { return d.className || ''; })
      .attr("x", function(d) { return d.labelX; })
      .attr("y", function(d) { return d.labelY; })
      .attr("text-anchor",function(d){ return d.anchor; })
      .attr("alignment-baseline",function(d){ return d.alignment; })
      .attr("dominant-baseline",function(d){ return d.alignment; })
      .attr("font-size", function(d){ return d.fontSize; })
      .style("font-family", function(d){ return d.fontFamily; })
      .style("font-weight", function(d){ return d.fontWeight; })
      .style("fill", function(d) { return d.textColor; });
  }

  drawLines(svg, lines, options): void {

    let pathInterpolation = options.pathInterpolation;
    let animate = options.animate;
    let animationDuration = options.animationDuration;
    let svg_line;

    svg_line = this.d3ParentElement.svg.line()
      .interpolate(pathInterpolation)
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; });
*/
/*
    svg_line = d3.svg.line()
      .interpolate(pathInterpolation)
      .x(function(d) { return d.x; })
      .y(function(d) { return d.y; });
*/
/*
    _.each(lines, function(line){
      let points = line.points;
      let path = svg.append('path')
          .attr('d', svg_line( points ))
          .attr('class', line.className)
          .style('stroke', line.color)
          .style('stroke-width', line.strokeWidth)
          .style('stroke-opacity', line.strokeOpacity)
          .style('fill', 'none');

      // animate if it's a solid line
      if (path && animate && line.strokeDash === 'none' && line.className.indexOf('primary') >= 0) {
        let totalLength = path.node().getTotalLength();
        path
          .attr('stroke-dasharray', totalLength + ' ' + totalLength)
          .attr('stroke-dashoffset', totalLength)
          .transition()
          .duration(animationDuration)
          .ease('linear')
          .attr('stroke-dashoffset', 0)

        // otherwise, set the stroke dash
      } else {
        path.style('stroke-dasharray', line.strokeDash);
      }

    });
  }
*/
  /*
----------------------------------------------------------------------
KEYBOARD RELATED - START
----------------------------------------------------------------------
   */
  @HostListener('document:keydown', ['$event'])
  addListeners( ev: any ) {
    // do something meaningful with it
    switch ( ev.keyCode ) {
      // o - output to svg
      case 79:
        if ( ev.ctrlKey ) {
          this.exportSVG();
          console.log('Clicked Ctrl+P');
        }
        break;

      default:
        break;
    }
    console.log(`The user just pressed ${ev.key}!`);
  }

  exportSVG(): void {
    const dataUrl = this.getImageDataUrl();
    window.open(dataUrl, '_blank');
  }

  getImageDataUrl(): string {
    const svg_xml = this.d3ParentElement.html('');
    const b64 = btoa( svg_xml );

    return 'data:image/svg+xml;base64,\n' + b64;
  }
  /*
----------------------------------------------------------------------
KEYBOARD RELATED - END
----------------------------------------------------------------------
  */
/*
  var container = d3.select('#tube-map');
  var width = 1600;
  var height = 1000;

  var map = d3.tubeMap()
    .width(width)
    .height(height)
    .margin({
      top: 20,
      right: 20,
      bottom: 40,
      left: 100,
    })
    .on("click", function (name) {
      console.log(name);
    });

  d3.json("./stations.json", function (error, data) {
    container
      .datum(data).call(map);

    var svg = container.select('svg');

    zoom = d3
      .zoom()
      .scaleExtent([0.5, 6])
      .on('zoom', zoomed);

    var zoomContainer = svg.call(zoom);
    var initialScale = 2;
    var initialTranslate = [100, 200];

    zoom.scaleTo(zoomContainer, initialScale);
    zoom.translateTo(zoomContainer, initialTranslate[0], initialTranslate[1]);

    function zoomed() {
      svg.select('g').attr('transform', d3.event.transform.toString());
    }
  });
*/
}
