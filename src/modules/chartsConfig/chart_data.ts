import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: string | number;
}

export const chartDataConfiguration = (
    data: any[],
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel
): any[] => {
    if (dataModel.columns[chartConfiguration.x].columnName !== chartConfiguration.x) {
        new Error(
            `${dataModel.columns[chartConfiguration.x].columnName}
            is not defined in ${chartConfiguration.x}`
        );
        return;
    }

    const columnType: string = dataModel.columns[chartConfiguration.x].dataType;

    if (columnType === DataTypeEnum.date) {
        return data.map((el: IElement) => {
            if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
                const d = {
                    date: new Date(el[chartConfiguration.x]),
                    value: el[chartConfiguration.y],
                };
                return d;
            }
        });
    } else {
        return data.map((el: IElement) => {
            if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
                const d = {
                    date: el[chartConfiguration.x],
                    value: el[chartConfiguration.y],
                };
                return d;
            }
        });
    }
};
