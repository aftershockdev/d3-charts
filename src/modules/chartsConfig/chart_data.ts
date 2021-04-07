import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts"
interface IElement {
  [key: string]: string | number
}

export const chartDataConfiguration = (
  data: any[],
  chartConfiguration: IChartConfiguration,
  dataModel: IDataModel
): any[] => {
  let columnType: string

  dataModel.columns[chartConfiguration.x].columnName === chartConfiguration.x
    ? (columnType = dataModel.columns[chartConfiguration.x].dataType)
    : console.error(`${dataModel.columns[chartConfiguration.x].columnName}`)

  if (columnType === DataTypeEnum.date) {
    const result = data.map((el: IElement) => {
      if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
        const d = {
          date: new Date(el[chartConfiguration.x]),
          value: el[chartConfiguration.y],
        }
        return d
      }
    })

    return result
  } else {
    const result = data.map((el: IElement) => {
      if (el[chartConfiguration.x] && el[chartConfiguration.y]) {
        const d = {
          date: el[chartConfiguration.x],
          value: el[chartConfiguration.y],
        }
        return d
      }
    })

    return result
  }
}
