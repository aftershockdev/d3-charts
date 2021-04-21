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
        result[name] = columns[name].dataType === DataTypeEnum.date
            ? new Date(el[name])
            : el[name];
    });
    return result;
}

export const chartDataConfiguration = (data: IElement[], config: IChartConfiguration, model: IDataModel): IValue[] => {
    const { columns } = model;

    const xCol  = config.x;
    const yCol  = config.y;

    const xLength = xCol.length;
    const yLength = yCol.length;

    const allColumnsName = [...xCol, ...yCol];

    if (xLength > 1 && yLength > 1)
        throw new Error("One of the axes must be with one column");

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

    const firstNameX = xCol[0];
    const firstNameY = yCol[0];

    const columnTypeX = columns[firstNameX].dataType;
    const columnTypeY = columns[firstNameY].dataType;

    return dataWithoutEmptyProp.map(el => {
        let x = columnTypeX === DataTypeEnum.date ? new Date(el[firstNameX]): el[firstNameX];
        let y = columnTypeY === DataTypeEnum.date ? new Date(el[firstNameY]): el[firstNameY];

        if (yLength > 1) {
            y = getColProperties(yCol, el, columns);
        }

        if (xLength > 1) {
            x = getColProperties(xCol, el, columns);
        }

        return  { x, y };
    });
};
