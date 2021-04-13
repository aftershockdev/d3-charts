import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

interface IValue {
    date: any;
    value: any;
}

export const chartDataConfiguration = (data: IElement[], chartConfiguration: IChartConfiguration, dataModel: IDataModel): IValue[] => {
    const xCol  = chartConfiguration.x;
    const yCol  = chartConfiguration.y;
    const columnTypeX = dataModel.columns[xCol].dataType;

    if (columnTypeX === DataTypeEnum.date) {
        return data.map(el => {
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
    return data.map(el => {
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
