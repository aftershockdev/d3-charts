import {
  IChartConfiguration,
  IDataModel,
  SvgD3Selection,
} from "../interfaces/charts";
interface Chart {
  draw: (
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: object[]
  ) => void;
}
interface Registry {
  [key: string]: Chart;
}

const registry: Registry = {};

export const registerChart = (type: string, chart: Chart) => {
  return (registry[type] = chart);
};

export const getChart = (type: string) => registry[type];
