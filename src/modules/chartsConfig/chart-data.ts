import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

interface IValue {
    x: any;
    y: any;
}

export const chartDataConfiguration = (data: IElement[], chartConfiguration: IChartConfiguration, dataModel: IDataModel): IValue[] => {
    const { columns } = dataModel;
    const xCol  = chartConfiguration.x;
    const yCol  = chartConfiguration.y;

    const columnTypeX = columns[xCol].dataType;
    const columnTypeY = columns[yCol].dataType;

    if (columnTypeX === DataTypeEnum.date) {
        return data.map(el => {
            const x = el[xCol];
            const y = el[yCol];

            return  x && y ? {x: new Date(x), y} : null;
        });
    }
    if (columnTypeY === DataTypeEnum.date) {
        return data.map(el => {
            const x = el[xCol];
            const y = el[yCol];

            return  x && y ? {x, y: new Date(y)} : null;
        });
    }

    return data.map(el => {
        const x = el[xCol];
        const y = el[yCol];

        return  x && y ? {x, y} : null;
    });


};
