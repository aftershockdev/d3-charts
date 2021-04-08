import { IChartConfiguration, IDataModel, SvgD3Selection } from "../interfaces/charts";
interface IChart {
    draw: (
        nodeElement: SvgD3Selection,
        chartConfiguration: IChartConfiguration,
        dataModel: IDataModel,
        data: any[]
    ) => void;
}
interface IRegistry {
    [key: string]: IChart;
}

const registry: IRegistry = {};

export const registerChart = (type: string, chart: IChart) => {
    return (registry[type] = chart);
};

export const getChart = (type: string) => registry[type];
