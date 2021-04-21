import * as d3 from "d3";

import { IDataModel, IChartConfiguration, ISizeSettings } from "../interfaces/charts";
import { chartDataConfiguration } from "./chart-data";
import { getChart } from "./chart-register";

export const showChart = (
    node: Element,
    data: any[],
    config: IChartConfiguration,
    dataModel: IDataModel,
    size: ISizeSettings
): void => {

    const nodeElement = d3.select(node);
    if (!nodeElement)
        throw new Error("Node element is not defined.");

    const chart = getChart(config.type);
    if (!chart)
        throw new Error(`Type: ${config.type} is not supported`);

    const svg = nodeElement.append("svg")
        .attr("width", size.width)
        .attr("height", size.height)
        .attr("overflow", "visible");

    const configData = chartDataConfiguration(data, config, dataModel);

    chart(svg, config, dataModel, configData, size);
};
