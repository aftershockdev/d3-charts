import * as d3 from "d3";
import { IDataModel,  DataTypeEnum, axisTypeEnum, ScaleCreator, ScaleResult } from "../interfaces/charts";

export interface IScaleFunc {
  [key: string]: any;
}

interface columnWithMaxValue  {
  num: number,
  name: string
}

type getAtt = (d: IScaleFunc) => any;

function getColNameWithMaxValue (axis:string, model: IDataModel, axisNames: string[], data: any[]): string {
    const { columns } = model;
    let result: columnWithMaxValue;

    axisNames.forEach(key => {
        const colType = columns[key].dataType;
        const colValue = data.reduce((prev, current) => (prev[axis][key] > current[axis][key]) ? prev : current);
        const colWithMaxValue = { num: colValue[axis][key], name: key };

        if(colType === DataTypeEnum.number) {
            result = !result ? colWithMaxValue :
                colWithMaxValue.num > result.num ?
                    colWithMaxValue : result;
        } else  {
            result = colWithMaxValue;
        }
    });

    return result.name;
}

function getScaleType (type: DataTypeEnum, range: number[], att: getAtt, data: any[]): ScaleResult {
    switch (type) {
        case DataTypeEnum.date:
            return d3
                .scaleTime()
                .domain(<any>d3.extent(data, att))
                .range(range);
        case DataTypeEnum.string:
            return d3
                .scaleBand()
                .domain(data.map(att))
                .range(range);
        case DataTypeEnum.number:
            return d3
                .scaleLinear()
                .domain([0, d3.max(data, att)])
                .nice()
                .range(range);
    }
}

export const createScale: ScaleCreator = (axis, data, size, config, model): ScaleResult => {
    const { columns } = model;
    const axisName = config[axis];
    const name  = getColNameWithMaxValue(axis, model, axisName, data);
    const columnType = columns[name].dataType;

    const getAtt: getAtt = (d: IScaleFunc) => d[axis][name] ? d[axis][name]: d[axis];
    const range = axis === axisTypeEnum.x ? [size.margin.left, size.width] : [size.height - size.margin.bottom, size.margin.top];

    return getScaleType(columnType, range, getAtt, data);
};