import * as d3 from "d3";

import { IChartConfiguration, IDataModel, ISizeSettings, DataTypeEnum } from "../interfaces/charts";

export interface IScaleFunc {
    x: any;
    y: any;
}

type ScaleResult = d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any> ;


const getAttX = (d: IScaleFunc) => d.x;
const getAttY = (d: IScaleFunc) => d.y;

export const createScaleX = (
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
): ScaleResult => {
    const columnTypeX = model.columns[config.x].dataType;
    const rangeX = [size.margin.left, size.width];

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
    const columnTypeY = model.columns[config.y].dataType;
    const rangeY = [size.height - size.margin.bottom, size.margin.top];


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
