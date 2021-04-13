import { Selection } from "d3-selection";

export interface IDataModel {
    columns: { [key: string]: IColumnModel };
}

export enum DataTypeEnum {
    string = "string",
    number = "number",
    date = "date",
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
    x: string;
    y: string;
}

export type SvgD3Selection = Selection<SVGElement, any, Element, any>;

export type ChartVisualizer = <T = any>( node: SvgD3Selection, config: IChartConfiguration, dataModel: IDataModel, data: T[] ) => void;

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
