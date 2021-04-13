import { ChartVisualizer } from "../interfaces/charts";
interface IRegistry {
    [key: string]: ChartVisualizer;
}

const registry: IRegistry = {};

export const registerChart = (type: string, chart: ChartVisualizer) =>
    (registry[type] = chart);

export const getChart = (type: string) => registry[type];
