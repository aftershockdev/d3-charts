import * as d3 from "d3";
import { IChartConfiguration, IDataModel, ISizeSettings, ScaleResult, SvgD3Selection, axisTypeEnum } from "../interfaces/charts";
import { createScale } from "./chart-scales";

export const createAxis = (
    svg: SvgD3Selection,
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
):{ [key: string]: ScaleResult } => {

    const xScale = createScale(axisTypeEnum.x, data, size, config, model);
    const yScale = createScale(axisTypeEnum.y, data, size, config, model);

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

    return { xScale, yScale };
};
