import { IChartConfiguration, IDataModel, SvgD3Selection, IChart } from "../interfaces/charts";

export const bar: IChart = (
    nodeElement: SvgD3Selection,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel,
    data: any[]
): void => {
    const message = "здесь будет бар чарт";
    nodeElement.append("text").text(message);
};
