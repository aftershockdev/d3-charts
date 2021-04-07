import * as d3 from "d3";

import { IValue, IDate } from "../interfaces/charts";
import { IChartConfiguration, IDataModel } from "../interfaces/charts";

interface IDefaults {
  [key: string]: any;
}

export const createXscale = (
  data: object[],
  defaults: IDefaults,
  chartConfiguration: IChartConfiguration,
  dataModel: IDataModel
): d3.ScaleTime<number, number, never> | d3.ScaleBand<any> => {
  let x: d3.ScaleBand<any> | d3.ScaleTime<number, number, never>;
  let columnType: string;

  dataModel.columns[chartConfiguration.x].columnName === chartConfiguration.x
    ? (columnType = dataModel.columns[chartConfiguration.x].dataType)
    : console.error(
        `${
          dataModel.columns[chartConfiguration.x].columnName
        } is not (chartConfiguration.x)`
      );

  if (columnType === "date") {
    x = d3
      .scaleTime()
      .domain(<any>d3.extent(data, (d: IDate) => d.date))
      .range([defaults.margin.left, defaults.width]);
  } else if (columnType === "string") {
    x = d3
      .scaleBand()
      .domain(<any>data.map((d: IDate) => d.date))
      .range([defaults.margin.left, defaults.width]);
  } else {
    x = d3
      .scaleBand()
      .domain(<any>d3.range(data.length))
      .range([defaults.margin.left, defaults.width]);
  }
  return x;
};

export const createYscale = (
  data: object[],
  defaults: IDefaults
): d3.ScaleLinear<number, number, never> => {
  const y = d3
    .scaleLinear()
    .domain(<any>[0, d3.max(data, (d: IValue) => d.value)])
    .nice()
    .range([defaults.height - defaults.margin.bottom, defaults.margin.top]);

  return y;
};
