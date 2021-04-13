import * as d3 from "d3";

import { IDataModel, IChartConfiguration, IChartSettings } from "../interfaces/charts";
import { createScaleX, createScaleY } from "./chart_scales";
import { chartDataConfiguration } from "./chart_data";
import { getChart } from "./chart_register";
import "./registration";

export const ChartCreator = (
    node: HTMLElement,
    data: any[],
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    settings: IChartSettings
): void => {
    const nodeElement = d3.select(node);
    const chart = getChart(chartConfiguration.type);
    const xCol  = chartConfiguration.x;
    const yCol  = chartConfiguration.y;

    const xColName = dataModel.columns[xCol].columnName;
    const yColName = dataModel.columns[yCol].columnName;

    if (!nodeElement)
        throw new Error("Node element is not defined.");

    if (!chart)
        throw new Error(`Type: ${chartConfiguration.type} is not supported`);

    if (xColName !== chartConfiguration.x)
        throw new Error(`${xColName} is not defined in ${xCol}`);

    if (yColName !== chartConfiguration.y)
        throw new Error(`${yColName} is not defined in ${yCol}`);

    const configData = chartDataConfiguration(data, chartConfiguration, dataModel);

    const svg = nodeElement.append("svg").attr("width", settings.width).attr("height", settings.height).attr("overflow", "visible");

    const x = createScaleX(configData, settings, chartConfiguration, dataModel);
    const y = createScaleY(configData, settings, chartConfiguration, dataModel);

    const xAxis = d3.axisBottom(x);
    const yAxis = d3.axisLeft(y);

    const nodeAxis = svg.append("g").attr("class", "axis");

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

    chart(svg, chartConfiguration, dataModel, configData);
};
