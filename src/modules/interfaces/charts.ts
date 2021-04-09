import { Selection } from "d3-selection";

export interface IDataModel {
    columns: { [key: string]: IColumnModel };
}

export interface IColumnModel {
    columnName: string;
    description: string;
    dataType: DataTypeEnum;
    length?: number;
    formatString?: string;
}

export interface IChart {
    (
        nodeElement: SvgD3Selection,
        chartConfiguration: IChartConfiguration,
        dataModel: IDataModel,
        data: any[]
    ): void;
}

export interface IChartSettings {
    width: number;
    height: number;
    margin: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
}
export interface IChartConfiguration {
    type: string;
    x: string;
    y: string;
}

export interface IScaleFunc {
    date: string;
    value: number;
}

export type SvgD3Selection = Selection<SVGElement, any, Element, any>;

export enum DataTypeEnum {
    string = "string",
    number = "number",
    date = "date",
}
