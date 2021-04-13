import { registerChart } from "../chartsConfig";

import drawBars from "./bar";
import drawLines from "./line";
import drawDonut from "./donut";

registerChart("bar", drawBars);
registerChart("line", drawLines);
registerChart("donut", drawDonut);
