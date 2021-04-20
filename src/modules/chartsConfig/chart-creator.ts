import * as d3 from "d3";

import { IDataModel, IChartConfiguration, ISizeSettings, axisTypeEnum } from "../interfaces/charts";
import { createScale } from "./chart-scales";
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

    const configData = chartDataConfiguration(data, config, dataModel);

    const svg = nodeElement.append("svg")
        .attr("width", size.width)
        .attr("height", size.height)
        .attr("overflow", "visible");

    const xScale = createScale(axisTypeEnum.x, configData, size, config, dataModel);
    const yScale = createScale(axisTypeEnum.y, configData, size, config, dataModel);

    const xAxis = d3.axisBottom(xScale);
    const yAxis = d3.axisLeft(yScale);

    const nodeAxis = svg
        .append("g")
        .attr("class", "axis");

    nodeAxis
        .append("g")
        .attr("class", "x-axis")
        .attr("transform", `translate(0,${size.height - size.margin.bottom})`)
        .call(xAxis)
        .selectAll("text")
        .attr("y", 0)
        .attr("x", 9)
        .attr("transform", "rotate(70)")
        .style("text-anchor", "start");

    nodeAxis
        .append("g")
        .attr("class", "y-axis")
        .attr("transform", `translate(${size.margin.left}, 0)`)
        .call(yAxis);


    chart(svg, config, dataModel, configData, size);
};
