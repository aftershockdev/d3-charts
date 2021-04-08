import { SvgD3Selection, IChartConfiguration, IDataModel } from "../interfaces/charts";

export default class Donut {
    public draw(
        nodeElement: SvgD3Selection,
        chartConfiguration: IChartConfiguration, // eslint-disable-line
        dataModel: IDataModel, // eslint-disable-line
        data: any[] // eslint-disable-line
    ): void {
        const message = "здесь будет донатик";
        nodeElement.append("text").text(message);
    }
}
