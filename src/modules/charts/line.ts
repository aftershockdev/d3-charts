import { ChartVisualizer } from "../interfaces/charts";


const drawLines: ChartVisualizer = (node, config, model, data): void => {
    const message = "line chart will created here";
    node.append("text").text(message);
};

export default drawLines;
