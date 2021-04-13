import * as d3 from "d3";

import { IScaleFunc, IChartConfiguration, IDataModel, IChartSettings, DataTypeEnum } from "../interfaces/charts";

export const createScaleX = (
    data: any[],
    settings: IChartSettings,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel
): d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any> => {
    const columnTypeX = dataModel.columns[chartConfiguration.x].dataType;

    switch (columnTypeX) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, (d: IScaleFunc) => d.date))
                .range([settings.margin.left, settings.width]);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(<any>data.map((d: IScaleFunc) => d.date))
                .range([settings.margin.left, settings.width]);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain(<any>[0, d3.max(data, (d: IScaleFunc) => d.value)])
                .nice()
                .range([settings.height - settings.margin.bottom, settings.margin.top]);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range([settings.margin.left, settings.width]);
    }
};

export const createScaleY = (
    data: any[],
    settings: IChartSettings,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel
): d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any> => {
    const columnTypeY = dataModel.columns[chartConfiguration.y].dataType;

    switch (columnTypeY) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, (d: IScaleFunc) => d.date))
                .range([settings.margin.left, settings.width]);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(<any>data.map((d: IScaleFunc) => d.date))
                .range([settings.margin.left, settings.width]);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain(<any>[0, d3.max(data, (d: IScaleFunc) => d.value)])
                .nice()
                .range([settings.height - settings.margin.bottom, settings.margin.top]);
        default:
            return d3
                .scaleBand()
                .domain(<any>d3.range(data.length))
                .range([settings.margin.left, settings.width]);
    }
};
