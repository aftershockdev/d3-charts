import { ChartVisualizer } from "../interfaces/charts";
import { options } from "../chartsConfig/default-options"


const drawLines: ChartVisualizer = (node, config, model, data): void => {
    const {fill, horizontal} = options(config)
};

export default drawLines;
