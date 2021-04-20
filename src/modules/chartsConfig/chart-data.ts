import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";
interface IElement {
    [key: string]: any;
}

interface IValue {
    x: any;
    y: any;
}

export const chartDataConfiguration = (data: IElement[], config: IChartConfiguration, model: IDataModel): IValue[] => {
    const { columns } = model;

    const xCol  = config.x;
    const yCol  = config.y;

    const xLength = config.x.length;
    const yLength = config.y.length;

    const allColumnsName: string[] = [...xCol, ...yCol];
    const numberColumns: string[] = [];

    const columnTypeX = columns[xCol[0]].dataType;
    const columnTypeY = columns[yCol[0]].dataType;

    if (xLength > 1 && yLength > 1)
        throw new Error("One of the axes must be with one column");

    for(const key of allColumnsName){
        columns[key].dataType === DataTypeEnum.number ? numberColumns.push(key) : null;
    }

    if(!numberColumns.length)
        throw new Error("One of the columns must be of type number");

    const filteredData = data.filter(el => {
        for (const k in allColumnsName) {
            if (!el[allColumnsName[k]]) {
                return;
            }
        }
        return el;
    });

    return filteredData.map(el => {
        if (yLength > 1) {
            const y = {};
            let x: any;

            yCol.forEach((name, i) => {
                if (columnTypeX === DataTypeEnum.date) {
                    x = new Date (el[xCol[0]]);
                } else {
                    x = el[xCol[0]];
                }

                if (columns[yCol[i]].dataType === DataTypeEnum.date) {
                    Object.assign(y,{
                        [name]: new Date(el[name])
                    });
                } else {
                    Object.assign(y,{
                        [name]: el[name]
                    });
                }
            });

            return x && y ?  { x, y } : null;
        }
        if (xLength > 1) {
            const x = {};
            let y: any;

            xCol.forEach((name, i) => {
                if (columnTypeY === DataTypeEnum.date) {
                    y = new Date (el[yCol[0]]);
                } else {
                    y = el[yCol[0]];
                }

                if(columns[xCol[i]].dataType === DataTypeEnum.date) {
                    Object.assign(x,{
                        [name]: new Date(el[name])
                    });
                } else {
                    Object.assign(x,{
                        [name]: el[name]
                    });
                }
            });

            return x && y ?  { x, y } : null;
        }

        const x = el[xCol[0]];
        const y = el[yCol[0]];

        if (columnTypeX === DataTypeEnum.date){
            return  x && y ? {x: new Date(x), y} : null;
        }
        if (columnTypeY === DataTypeEnum.date){
            return  x && y ? {y: new Date(y), x} : null;
        }
        return  x && y ? { x, y } : null;
    });
};
