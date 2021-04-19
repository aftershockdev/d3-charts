import * as d3 from "d3";
import { ChartVisualizer } from "../interfaces/charts";
import { createScaleX, createScaleY } from "../chartsConfig/chart-scales";
import options  from "../chartsConfig/chart-options";

const drawBars: ChartVisualizer = (node, config, model, data, size): void => {

    const palette = options.defaultColors;

    const x = createScaleX(data, size, config, model);
    const y = createScaleY(data, size, config, model);

    const yCol = config.y;
    const xCol = config.x;

    const xLength = xCol.length;
    const yLength = yCol.length;

    if (yLength > 1) {
        for (const i in yCol) {
            const name = yCol[i];
            node
                .append("g")
                .attr("transform", "translate(0,-5)")
                .selectAll("rect")
                .data(data)
                .join("rect")
                .attr("fill", palette[i])
                .attr("class", name)
                .attr("x", (d: any) => x(d.x))
                .attr("y", (d: any) => y(d.y[name]))
                .attr("height", (d: any) => y(0) - y(d.y[name]))
                .attr("width",(size.width - size.margin.right) / data.length / 2);
        }
        return;
    }
    if (xLength > 1) {
        for (const i in xCol) {
            const name = xCol[i];
            node
                .append("g")
                .attr("transform", "translate(0,-5)")
                .selectAll("rect")
                .data(data)
                .join("rect")
                .attr("fill", palette[i])
                .attr("class", name)
                .attr("x", (d: any) => x(d.x[name]))
                .attr("y", (d: any) => y(d.y))
                .attr("height", (d: any) => y(0) - y(d.y))
                .attr("width",(size.width - size.margin.right) / data.length);
        }
        return;
    }

    node
        .append("g")
        .attr("transform", "translate(0,-5)")
        .style("mix-blend-mode", "multiply")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("fill", palette[0])
        .attr("x", (d: any) => x(d.x))
        .attr("y", (d: any) => y(d.y))
        .attr("height", (d: any) => y(0) - y(d.y))
        .attr("width",(size.width - size.margin.right) / data.length);

};

export default drawBars;
