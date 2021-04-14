import { ChartVisualizer } from "../interfaces/charts";
import { createScaleX, createScaleY } from "../chartsConfig/chart-scales"
import { options } from "../chartsConfig/default-options"

const drawBars: ChartVisualizer = (node, config, model, data, size): void => {
    const { fill, horizontal } = options(config)

    const x = createScaleX(data, size,config, model)
    const y = createScaleY(data, size,config, model)

    const bars = node
        .append("g")
        .attr("transform", "translate(0,-5)")
        .style("mix-blend-mode", "multiply")
        .append("g")
        .selectAll("rect")
        .data(data)
        .join("rect")
        .attr("fill", fill)


    if(horizontal){
        bars
            .attr("x", size.margin.left )
            .attr("y", (d: any) => y(d.y))
            .attr("width", (d: any) => x(d.x) - size.margin.left)
            .attr("height", (size.height - size.margin.bottom) / data.length )
        return;
    }
    bars
        .attr("x", (d: any) => x(d.x))
        .attr("y", (d: any) => y(d.y))
        .attr("height", (d: any) => y(0) - y(d.y))
        .attr("width",(size.width - size.margin.right) / data.length)

};

export default drawBars;
