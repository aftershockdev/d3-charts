import * as d3 from "d3";

import { IDataModel, IChartConfiguration, ISizeSettings } from "../interfaces/charts";
import { createScaleX, createScaleY } from "./chart-scales";
import { chartDataConfiguration } from "./chart-data";
import { getChart } from "./chart-register";

export const showChart = (
    node: Element,
    data: any[],
    config: IChartConfiguration,
    dataModel: IDataModel,
    settings: ISizeSettings
): void => {
    const nodeElement = d3.select(node);
    if (!nodeElement)
        throw new Error("Node element is not defined.");

    const chart = getChart(config.type);
    if (!chart)
        throw new Error(`Type: ${config.type} is not supported`);

    const xCol  = config.x;
    const yCol  = config.y;

    const xColName = dataModel.columns[xCol].columnName;
    if (xColName !== config.x)
        throw new Error(`${xColName} is not defined in ${xCol}`);

    const yColName = dataModel.columns[yCol].columnName;
    if (yColName !== config.y)
        throw new Error(`${yColName} is not defined in ${yCol}`);

    const configData = chartDataConfiguration(data, config, dataModel);

    const svg = nodeElement.append("svg")
        .attr("width", settings.width)
        .attr("height", settings.height)
        .attr("overflow", "visible");

    const x = createScaleX(configData, settings, config, dataModel);
    const y = createScaleY(configData, settings, config, dataModel);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const nodeAxis = svg
        .append("g")
        .attr("class", "axis");

    nodeAxis
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${settings.height - settings.margin.bottom})`)
        .call(xAxis);

    nodeAxis
        .append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${settings.margin.left},0)`)
        .call(yAxis);

    chart(svg, config, dataModel, configData);
};
