import {
  IChartConfiguration,
  IDataModel,
  DataTypeEnum,
} from "../interfaces/charts";
interface IElement {
  [key: string]: string | number;
}

export const chartDataConfiguration = (
  data: object[],
  chartConfiguration: IChartConfiguration,
  dataModel: IDataModel
): object[] => {
  const resultData: object[] = [];
  let columnType: string;

  dataModel.columns[chartConfiguration.x].columnName === chartConfiguration.x
    ? (columnType = dataModel.columns[chartConfiguration.x].dataType)
    : console.error(
        `${
          dataModel.columns[chartConfiguration.x].columnName
        } is not (chartConfiguration.x)`
      );

  if (columnType === DataTypeEnum.date) {
    const result = data.map((el: IElement) => {
      if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
        const d = {
          date: new Date(el[chartConfiguration.x]),
          value: el[chartConfiguration.y],
        };
        return d;
      }
    });

    resultData.push(...result);
  } else {
    const result = data.map((el: IElement) => {
      if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
        const d = {
          date: el[chartConfiguration.x],
          value: el[chartConfiguration.y],
        };
        return d;
      }
    });

    resultData.push(...result);
  }

  return resultData;
};
