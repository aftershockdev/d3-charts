import { IChartConfiguration, IDataModel, SvgD3Selection } from "../interfaces/charts";

export default class Line {
    public draw(
        nodeElement: SvgD3Selection,
        chartConfiguration: IChartConfiguration, // eslint-disable-line
        dataModel: IDataModel, // eslint-disable-line
        data: any[] // eslint-disable-line
    ): void {
        const message = "здесь будет линейный график";
        nodeElement.append("text").text(message);
    }
}
