import { IChartConfiguration, IDataModel, SvgD3Selection, IChart } from "../interfaces/charts";

export const donut: IChart = (
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: any[]
): void => {
    const message = "здесь будет донат";
    nodeElement.append("text").text(message);
};
