import { Selection } from "d3-selection";

export interface IDataModel {
    columns: { [key: string]: IColumnModel };
}

export enum DataTypeEnum {
    string = "string",
    number = "number",
    date = "date",
}
export enum ChartTypesEnum {
    bar = "bar",
    line = "line",
    donut = "donut"
}

export interface IColumnModel {
    columnName: string;
    description: string;
    dataType: DataTypeEnum;
    length?: number;
    formatString?: string;
}

export interface IBarOptions {
    fill?: string;
    horizontal?: boolean;
}

export interface ILineOptions {
    fill?: string;
    horizontal?: boolean;
}
export interface IDonutOptions {
    fill?: string;
    horizontal?: boolean;
}


export interface IChartOptions {
    bar?: IBarOptions
    line?: ILineOptions
    donut?: IDonutOptions
}

export interface IChartConfiguration {
    type: string;
    x: string;
    y: string;
    options?: IChartOptions
}

export interface ISizeSettings {
    width: number;
    height: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}

export type SvgD3Selection = Selection<SVGElement, any, Element, any>;

export type ChartVisualizer = <T = any>
(
    node: SvgD3Selection,
    config: IChartConfiguration,
    dataModel: IDataModel,
    data: T[],
    size: ISizeSettings
) => void;


