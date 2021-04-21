import { IChartConfiguration, IDataModel, DataTypeEnum, IColumnModel } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

interface IValue {
    x: any;
    y: any;
}

function getColProperties(colArr: string[], el: IElement, columns: { [key: string]: IColumnModel }): IElement {
    const result: IElement = {};
    colArr.forEach(name => {
        const elV = el[name];
        const value = columns[name].dataType === DataTypeEnum.date
            ? new Date(elV)
            : elV;
        result[name] = value;
    });
    return result;
}

export const chartDataConfiguration = (data: IElement[], config: IChartConfiguration, model: IDataModel): IValue[] => {
    const { columns } = model;

    const xCol  = config.x;
    const yCol  = config.y;

    const firstNameX = xCol[0];
    const firstNameY = yCol[0];

    const xLength = xCol.length;
    const yLength = yCol.length;

    const allColumnsName = [...xCol, ...yCol];
    const numberColumns: string[] = [];

    if (xLength > 1 && yLength > 1)
        throw new Error("One of the axes must be with one column");

    allColumnsName.forEach(key => columns[key].dataType === DataTypeEnum.number ? numberColumns.push(key) : null);

    if(!numberColumns.length)
        throw new Error("One of the columns must be of type number");

    const dataWithoutEmptyProp = data.filter(el => {
        allColumnsName.forEach(name => {
            if (!el[name]) {
                const type = columns[name].dataType;
                switch (type) {
                    case DataTypeEnum.date:
                        return;
                    case DataTypeEnum.string:
                        return el[name] = "Empty";
                    case DataTypeEnum.number:
                        return el[name] = 1;
                }
            }
        });
        return el;
    });

    const columnTypeX = columns[firstNameX].dataType;
    const columnTypeY = columns[firstNameY].dataType;

    return dataWithoutEmptyProp.map(el => {
        let x = el[firstNameX];
        let y = el[firstNameY];

        if (yLength > 1) {
            x = columnTypeX === DataTypeEnum.date
                ? new Date (el[firstNameX])
                : el[firstNameX];
            y = getColProperties(yCol, el, columns);
        }

        if (xLength > 1) {
            y = columnTypeY === DataTypeEnum.date
                ? new Date (el[firstNameY])
                : el[firstNameY];
            x = getColProperties(xCol, el, columns);
        }

        if (!(x && y))
            return null;

        if (yLength === 1 && xLength === 1) {
            columnTypeX === DataTypeEnum.date ? x = new Date(x) : null;
            columnTypeY === DataTypeEnum.date ? y = new Date(y) : null;
        }

        return  { x, y };
    });
};
