import { IChartConfiguration, IDataModel, SvgD3Selection, IChart } from "../interfaces/charts";

export const line: IChart = (
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: any[]
): void => {
    const message = "здесь будет линейный график";
    nodeElement.append("text").text(message);
};
