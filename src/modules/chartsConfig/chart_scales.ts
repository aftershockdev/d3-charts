import * as d3 from "d3";

import {
    IScaleFunc,
    IChartConfiguration,
    IDataModel,
    IChartSettings,
    DataTypeEnum,
} from "../interfaces/charts";

export const createScaleX = (
    data: any[],
    settings: IChartSettings,
    chartConfiguration: IChartConfiguration,
    dataModel: IDataModel
): d3.ScaleTime<number, number, never> | d3.ScaleBand<any> => {
    let x: d3.ScaleBand<any> | d3.ScaleTime<number, number, never>;

    if (dataModel.columns[chartConfiguration.x].columnName !== chartConfiguration.x) {
        new Error(
            `${dataModel.columns[chartConfiguration.x].columnName}
            is not defined in ${chartConfiguration.x}`
        );
        return;
    }

    const columnType: string = dataModel.columns[chartConfiguration.x].dataType;

    if (columnType === DataTypeEnum.date) {
        x = d3
            .scaleTime()
            .domain(<any>d3.extent(data, (d: IScaleFunc) => d.date))
            .range([settings.margin.left, settings.width]);
    } else if (columnType === DataTypeEnum.string) {
        x = d3
            .scaleBand()
            .domain(<any>data.map((d: IScaleFunc) => d.date))
            .range([settings.margin.left, settings.width]);
    } else {
        x = d3
            .scaleBand()
            .domain(<any>d3.range(data.length))
            .range([settings.margin.left, settings.width]);
    }
    return x;
};

export const createScaleY = (
    data: any[],
    settings: IChartSettings
): d3.ScaleLinear<number, number, never> => {
    const y = d3
        .scaleLinear()
        .domain(<any>[0, d3.max(data, (d: IScaleFunc) => d.value)])
        .nice()
        .range([settings.height - settings.margin.bottom, settings.margin.top]);

    return y;
};
