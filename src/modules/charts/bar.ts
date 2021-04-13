import { ChartVisualizer } from "../interfaces/charts";

const drawBars: ChartVisualizer = (node, config, model, data): void => {
    const message = "здесь будет бар чарт";
    node.append("text").text(message);
};

export default drawBars;
