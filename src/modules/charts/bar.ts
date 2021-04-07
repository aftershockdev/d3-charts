import * as d3 from "d3";

import { SvgD3Selection } from "../interfaces/charts";
import { IChartConfiguration, IDataModel } from "../interfaces/charts";

export default class Bar {
  public draw(
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: object[]
  ): void {
    const message = "здесь будет бар чарт";
    nodeElement.append("text").text(message);
  }
}
