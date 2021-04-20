import { Selection } from "d3-selection";

export interface IDataModel {
    columns: { [key: string]: IColumnModel };
}

export enum DataTypeEnum {
    string = "string",
    number = "number",
    date = "date",
}

export enum axisTypeEnum {
  x = "x",
  y = "y"
}

export interface IColumnModel {
    columnName: string;
    description: string;
    dataType: DataTypeEnum;
    length?: number;
    formatString?: string;
}


export interface IChartConfiguration {
    type: string;
    x: string[];
    y: string[];
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

export type ScaleResult = d3.ScaleLinear<number, number, never> | d3.ScaleTime<number, number, never> | d3.ScaleBand<any>;

export type ScaleCreator =
(
  axis: axisTypeEnum,
  data: any[],
  size: ISizeSettings,
  config: IChartConfiguration,
  model: IDataModel
) => ScaleResult;
