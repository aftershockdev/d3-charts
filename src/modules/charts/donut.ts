import * as d3 from "d3";

import { SvgD3Selection } from "../interfaces/charts";
import { IChartConfiguration, IDataModel } from "../interfaces/charts";

export default class Donut {
  public draw(
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: object[]
  ): void {
    const message = "здесь будет донатик";
    nodeElement.append("text").text(message);
  }
}
