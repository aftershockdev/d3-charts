import { IChart } from "../interfaces/charts";
interface IRegistry {
    [key: string]: IChart;
}

const registry: IRegistry = {};

export const registerChart = (type: string, chart: IChart) => {
    return (registry[type] = chart);
};

export const getChart = (type: string) => registry[type];
