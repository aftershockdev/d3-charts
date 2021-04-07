import { NumberValue } from "d3-scale";
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

export interface IChartConfiguration {
  type: string;
  x: string;
  y: string;
}

export enum DataTypeEnum {
  string = "string",
  number = "number",
  date = "date",
}

export interface IValue {
  value: string;
}
export interface IDate {
  date: string;
}
export interface INumber {
  [key: string]: number | NumberValue;
}
export type SvgD3Selection = Selection<SVGElement, any, Element, any>;
