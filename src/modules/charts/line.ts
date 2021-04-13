import { ChartVisualizer } from "../interfaces/charts";

const drawLines: ChartVisualizer = (node, config, model, data): void => {
    const message = "здесь будет линейный график";
    node.append("text").text(message);
};

export default drawLines;
