import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

export const chartDataConfiguration = (data: any[], chartConfiguration: IChartConfiguration, dataModel: IDataModel): any[] => {
    const xCol  = chartConfiguration.x;
    const yCol  = chartConfiguration.y;
    const columnTypeX: string = dataModel.columns[xCol].dataType;

    if (columnTypeX === DataTypeEnum.date) {
        return data.map((el: IElement) => {
            const elementX = el[xCol];
            const elementY = el[yCol];

            if (elementX && elementY) {
                const d = {
                    date: new Date(elementX),
                    value: elementY,
                };
                return d;
            }
        });
    }
    return data.map((el: IElement) => {
        const elementX = el[xCol];
        const elementY = el[yCol];

        if (elementX && elementY) {
            const d = {
                date: elementX,
                value: elementY,
            };
            return d;
        }
    });
};
