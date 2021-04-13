import { ChartVisualizer } from "../interfaces/charts";

const drawDonut: ChartVisualizer = (node, config, model, data): void => {
    const message = "здесь будет донат";
    node.append("text").text(message);
};

export default drawDonut;
