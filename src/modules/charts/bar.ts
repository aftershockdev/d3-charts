import { ChartVisualizer, DataTypeEnum } from "../interfaces/charts";
import options  from "../chartsConfig/chart-options";

const drawBars: ChartVisualizer = (node, config, model, data, size, xScale, yScale): void => {
    const {columns} = model;
    const palette = options.defaultColors;

    const yCol = config.y;
    const xCol = config.x;

    const xLength = xCol.length;
    const yLength = yCol.length;

    const distance = data.length;

    const bar = (i: number) => {
        return node
            .append("g")
            .attr("transform", "translate(0,-5)")
            .selectAll("rect")
            .data(data)
            .join("rect")
            .attr("fill", palette[i]);
    };

    const barsY = (key: string, i: number) => {
        return bar(i)
            .attr("x", (d: any) => xScale(d.x))
            .attr("y", (d: any) => yScale(d.y[key] ? d.y[key] : d.y))
            .attr("height", (d: any) => yScale(0) - yScale(d.y[key] ? d.y[key] : d.y))
            .attr("width",(size.width - size.margin.right) / distance / 1.5);
    };

    const barsX = (key: string, i: number) => {
        return bar(i)
            .attr("x", size.margin.left )
            .attr("y", (d: any) => yScale(d.y))
            .attr("width", (d: any) => xScale(d.x[key] ? d.x[key] : d.x ) - size.margin.left)
            .attr("height", (size.height - size.margin.bottom) / distance / 1.5);
    };

    if (yLength > 1) {
        yCol.forEach((key, i) => {
            barsY(key, i);
        });
        return;
    }
    if (xLength > 1) {
        xCol.forEach((key, i) => {
            barsX(key, i);
        });
        return;
    }
    if (xLength == 1 && yLength == 1) {
        const xType = columns[xCol[0]].dataType;
        const yType = columns[yCol[0]].dataType;

        if (xType === DataTypeEnum.number && yType !== DataTypeEnum.number) {
            barsX("", 1);
            return;
        }
        if (yType === DataTypeEnum.number && xType !== DataTypeEnum.number) {
            barsY("", 1);
            return;
        }
    }
};

export default drawBars;
