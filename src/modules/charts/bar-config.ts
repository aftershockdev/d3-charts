
import { IDataModel, IElement, DataTypeEnum } from "../interfaces/charts";

export interface IBarConfig {
  chartData: IElement[],
  settings: any;
}

export const getBarConfig = (data: IElement[], model: IDataModel): IBarConfig => {
    const { columns } = model;
    const chartData: IElement[] = [];


    for(const col in columns){
        if(columns[col].dataType === DataTypeEnum.number){
            chartData.push([col, ...data.map(el => el[col] ? el[col] : null)]);
        }
    }

    const settings = {
        fill: "#ccccccc",
        horizontal: false,
    };
    return {chartData, settings};
};