import { registerChart } from "../chartsConfig";

import { bar } from "./bar";
import { line } from "./line";
import { donut } from "./donut";

registerChart("bar", bar);
registerChart("line", line);
registerChart("donut", donut);
