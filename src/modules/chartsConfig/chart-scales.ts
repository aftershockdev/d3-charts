import * as d3 from "d3";

import { IChartConfiguration, IDataModel, ISizeSettings, DataTypeEnum } from "../interfaces/charts";

export interface IScaleFunc {
  [key: string]: any;
}

type ScaleResult = d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any> ;

export const createScaleX = (
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
): ScaleResult => {
    const { columns } = model;
    const rangeX = [size.margin.left, size.width];
    const x = config.x;
    let col: any;

    for(const key in x){
        const colName = x[key];
        const colType = columns[colName].dataType;
        const colWithMaxValue = data.reduce((prev, current) => (prev.x[colName] > current.x[colName]) ? prev : current);
        const colValue = { n: colWithMaxValue.x[colName], v: colName };

        if (colType === DataTypeEnum.number) {
            col = !col ? colValue :
                colValue.n > col.n ?
                    colValue : col;
        } else {
            col = colValue;
        }
    }

    const getAttX = (d: IScaleFunc) => d.x[col.v] ? d.x[col.v] : d.x;
    const columnTypeX = columns[col.v].dataType;

    switch (columnTypeX) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data,getAttX))
                .range(rangeX);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(data.map(getAttX))
                .range(rangeX);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain([0, d3.max(data, getAttX)])
                .nice()
                .range(rangeX);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range(rangeX);
    }
};

export const createScaleY = (
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
): ScaleResult => {
    const { columns } = model;
    const rangeY = [size.height - size.margin.bottom, size.margin.top];
    const y = config.y;
    let col: any;

    for (const key in y) {
        const colName = y[key];
        const colType = columns[colName].dataType;
        const colWithMaxValue = data.reduce((prev, current) => (prev.y[colName] > current.y[colName]) ? prev : current);
        const colValue = {
            n: colWithMaxValue.y[colName],
            v: colName
        };

        if (colType === DataTypeEnum.number) {
            col = !col ? colValue :
                colValue.n > col.n ?
                    colValue : col;
        } else {
            col = colValue;
        }
    }

    const getAttY = (d: IScaleFunc) => d.y[col.v] ? d.y[col.v] : d.y;
    const columnTypeY = columns[col.v].dataType;

    switch (columnTypeY) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, getAttY))
                .range(rangeY);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(data.map(getAttY))
                .range(rangeY);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain([0, d3.max(data, getAttY)])
                .nice()
                .range(rangeY);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range(rangeY);
    }
};
