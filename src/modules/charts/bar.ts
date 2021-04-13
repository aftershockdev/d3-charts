import { ChartVisualizer } from "../interfaces/charts";
import { createScaleX, createScaleY } from "../chartsConfig/chart-scales"

const drawBars: ChartVisualizer = (node, config, model, data, size): void => {

    const x = createScaleX(data, size,config, model)
    const y = createScaleY(data, size,config, model)

    const bars = node.append("g").attr("transform", "translate(0,-5)");

    bars
        .append("g")
        .attr("fill", "blue")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .style("mix-blend-mode", "multiply")
        .attr("x", (d: any) => x(d.x))
        .attr("y", (d: any) => y(d.y))
        .attr("height", (d: any) => y(0) - y(d.y))
        .attr("width",(size.width - size.margin.right) / data.length);


    // bars
    //     .append("g")
    //     .attr("fill", "blue")
    //     .selectAll("rect")
    //     .data(data)
    //     .join("rect")
    //     .attr("x", x(0) )
    //     .attr("y", (d: any) => y(d.y))
    //     .attr("width", (d: any) => x(d.x))
    //     .attr("height", 33 )
    //     .attr("fill", "#69b3a2")
};

export default drawBars;
