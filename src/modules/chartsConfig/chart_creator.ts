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
    width?: number,
    height?: number
): void => {
    const nodeElement = d3.select(node);

    if (!nodeElement)
        throw new Error("Node element is not defined.");

    const columnNameX = dataModel.columns[chartConfiguration.x].columnName;
    const columnNameY = dataModel.columns[chartConfiguration.y].columnName;

    if (columnNameX !== chartConfiguration.x)
        throw new Error(`${columnNameX} is not defined in ${chartConfiguration.x}`);

    if (columnNameY !== chartConfiguration.y)
        throw new Error(`${columnNameY}is not defined in ${chartConfiguration.y}`);

    const configData = chartDataConfiguration(data, chartConfiguration, dataModel);

    const settings: IChartSettings = {
        width: width ? width : 1300,
        height: height ? height : 600,
        margin: {
            top: 15,
            right: 0,
            bottom: 35,
            left: 60,
        },
    };

    const svg = nodeElement.append("svg")
        .attr("width", settings.width)
        .attr("height", settings.height)
        .attr("overflow", "visible");

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

    const chart = getChart(chartConfiguration.type);

    if (!chart)
        throw new Error(`Type: ${chartConfiguration.type} is not supported`);

    chart(svg, chartConfiguration, dataModel, configData);
};
