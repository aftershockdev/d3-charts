import * as d3 from "d3";

import { IChartConfiguration, IDataModel, ISizeSettings, DataTypeEnum } from "../interfaces/charts";

export interface IScaleFunc {
    date: string;
    value: number;
}

type ScaleResult = d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any> ;

export const createScaleX = (
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
): ScaleResult => {
    const columnTypeX = model.columns[config.x].dataType;

    switch (columnTypeX) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, (d: IScaleFunc) => d.date))
                .range([size.margin.left, size.width]);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(<any>data.map((d: IScaleFunc) => d.date))
                .range([size.margin.left, size.width]);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain(<any>[0, d3.max(data, (d: IScaleFunc) => d.value)])
                .nice()
                .range([size.height - size.margin.bottom, size.margin.top]);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range([size.margin.left, size.width]);
    }
};

export const createScaleY = (
    data: any[],
    size: ISizeSettings,
    config: IChartConfiguration,
    model: IDataModel
): ScaleResult => {
    const columnTypeY = model.columns[config.y].dataType;

    switch (columnTypeY) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, (d: IScaleFunc) => d.date))
                .range([size.margin.left, size.width]);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(<any>data.map((d: IScaleFunc) => d.date))
                .range([size.margin.left, size.width]);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain(<any>[0, d3.max(data, (d: IScaleFunc) => d.value)])
                .nice()
                .range([size.height - size.margin.bottom, size.margin.top]);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range([size.margin.left, size.width]);
    }
};
