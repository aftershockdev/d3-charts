import { registerChart } from "./chart_register";

import { bar } from "../charts/bar";
import { line } from "../charts/line";
import { donut } from "../charts/donut";

registerChart("bar", bar);
registerChart("line", line);
registerChart("donut", donut);
