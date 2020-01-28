import React from 'react';
import Async from './asyncComponent';

const LineSeries = props => (
  <Async
    load={import(/* webpackChunkName: "react-vis-lineSeries" */ './LineSeries')}
    componentProps={props}
  />
);
const LineMark = props => (
  <Async
    load={import(/* webpackChunkName: "react-vis-lineMark" */ './LineMark')}
    componentProps={props}
  />
);
const AreaChartElevated = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-stackedHorizontalBarChart" */ './AreaChartElevated'
    )}
    componentProps={props}
  />
);
const StackedHorizontalBarChart = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-stackedHorizontalBarChart" */ './StackedHorizontalBarChart'
    )}
    componentProps={props}
  />
);
const ClusteredStackedBarChart = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-clusteredStackedBarChart" */ './ClusteredStackedBarChart'
    )}
    componentProps={props}
  />
);
const CustomScales = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-customScales" */ './CustomScales'
    )}
    componentProps={props}
  />
);
const CircularGridLines = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-circularGridLines" */ './CircularGridLines'
    )}
    componentProps={props}
  />
);
const DynamicProgrammaticRightedgehints = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-dynamicProgrammaticRightedgehints" */ './DynamicProgrammaticRightedgehints'
    )}
    componentProps={props}
  />
);
const DynamicCrosshairScatterplot = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-dynamicCrosshairScatterplot" */ './DynamicCrosshairScatterplot'
    )}
    componentProps={props}
  />
);
const SimpleRadialChart = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-simpleRadialChart" */ './SimpleRadialChart'
    )}
    componentProps={props}
  />
);
const SimpleDonutChart = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-simpleDonutChart" */ './SimpleDonutChart'
    )}
    componentProps={props}
  />
);
const CustomRadius = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-customRadius" */ './CustomRadius'
    )}
    componentProps={props}
  />
);
const SimpleTreeMap = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-simpleTreeMap" */ './SimpleTreeMap'
    )}
    componentProps={props}
  />
);
const DynamicTreeMap = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-dynamicTreeMap" */ './DynamicTreeMap'
    )}
    componentProps={props}
  />
);
const BasicSunburst = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-basicSunburst" */ './BasicSunburst'
    )}
    componentProps={props}
  />
);
const AnimatedSunburst = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-animatedSunburst" */ './AnimatedSunburst'
    )}
    componentProps={props}
  />
);
const CandleStick = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-candleStick" */ './CandleStick'
    )}
    componentProps={props}
  />
);
const ComplexChart = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-complexChart" */ './ComplexChart'
    )}
    componentProps={props}
  />
);
const StreamGraph = props => (
  <Async
    load={import(
      /* webpackChunkName: "react-vis-streamGraph" */ './StreamGraph'
    )}
    componentProps={props}
  />
);

export {
  LineSeries,
  LineMark,
  AreaChartElevated,
  StackedHorizontalBarChart,
  ClusteredStackedBarChart,
  CustomScales,
  CircularGridLines,
  DynamicProgrammaticRightedgehints,
  DynamicCrosshairScatterplot,
  SimpleRadialChart,
  SimpleDonutChart,
  CustomRadius,
  SimpleTreeMap,
  DynamicTreeMap,
  BasicSunburst,
  AnimatedSunburst,
  CandleStick,
  ComplexChart,
  StreamGraph,
};
