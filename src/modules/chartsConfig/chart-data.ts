import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

interface IValue {
    x: any;
    y: any;
}

export const chartDataConfiguration = (data: IElement[], chartConfiguration: IChartConfiguration, dataModel: IDataModel): IValue[] => {
    const xCol  = chartConfiguration.x;
    const yCol  = chartConfiguration.y;
    const columnTypeX = dataModel.columns[xCol].dataType;
    const columnTypeY = dataModel.columns[yCol].dataType;

    if (columnTypeX === DataTypeEnum.date) {
        return data.map(el => {
            const elementX = el[xCol];
            const elementY = el[yCol];

            if (elementX && elementY) {
                const d = {
                    x: new Date(elementX),
                    y: elementY,
                };
                return d;
            }
        });
    }
    if (columnTypeY === DataTypeEnum.date) {
        return data.map(el => {
            const elementX = el[xCol];
            const elementY = el[yCol];

            if (elementX && elementY) {
                const d = {
                    x: elementX,
                    y: new Date(elementY),
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
                x: elementX,
                y: elementY,
            };
            return d;
        }
    });


};
