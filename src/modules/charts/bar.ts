import { ChartVisualizer, DataTypeEnum } from "../interfaces/charts";
import options  from "../chartsConfig/chart-options";

const drawBars: ChartVisualizer = (node, config, model, data, size, xScale, yScale): void => {
    const {columns} = model;
    const palette = options.defaultColors;

    const yCol = config.y;
    const xCol = config.x;

    const xLength = xCol.length;
    const yLength = yCol.length;

    const xType = columns[xCol[0]].dataType;
    const yType = columns[yCol[0]].dataType;

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
                .attr("x", (d: any) => xScale(d.x))
                .attr("y", (d: any) => yScale(d.y[name]))
                .attr("height", (d: any) => yScale(0) - yScale(d.y[name]))
                .attr("width",(size.width - size.margin.right) / data.length / 2);
        }
        return;
    }
    if (xLength > 1) {
        for (const i in xCol) {
            const name = xCol[i];
            node
                .append("g")
                .attr("transform", "translate(0, -5)")
                .selectAll("rect")
                .data(data)
                .join("rect")
                .attr("fill", palette[i])
                .attr("class", name)
                .attr("x", size.margin.left )
                .attr("y", (d: any) => yScale(d.y))
                .attr("width", (d: any) => xScale(d.x[name]) - size.margin.left)
                .attr("height", (size.height - size.margin.bottom) / data.length / 2);
        }
        return;
    }

    const defaultBars = node
        .append("g")
        .attr("transform", "translate(0,-5)")
        .style("mix-blend-mode", "multiply")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("fill", palette[0]);



    if (xType === DataTypeEnum.number && yType !== DataTypeEnum.number) {
        defaultBars
            .attr("x", size.margin.left )
            .attr("y", (d: any) => yScale(d.y))
            .attr("width", (d: any) => xScale(d.x) - size.margin.left)
            .attr("height", (size.height - size.margin.bottom) / data.length / 2);
        return;
    }

    if (yType === DataTypeEnum.number && xType !== DataTypeEnum.number) {
        defaultBars
            .attr("x", (d: any) => xScale(d.x))
            .attr("y", (d: any) => yScale(d.y))
            .attr("height", (d: any) => yScale(0) - yScale(d.y))
            .attr("width",(size.width - size.margin.right) / data.length / 2);
        return;
    }

    defaultBars
        .attr("x", (d: any) => xScale(d.x))
        .attr("y", (d: any) => yScale(d.y))
        .attr("height", (d: any) => yScale(0) - yScale(d.y))
        .attr("width",(size.width - size.margin.right) / data.length / 2);
};

export default drawBars;
