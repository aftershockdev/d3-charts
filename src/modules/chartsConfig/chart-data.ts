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

    const xLength = xCol.length;
    const yLength = yCol.length;

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
                x = columnTypeX === DataTypeEnum.date
                    ? new Date (el[xCol[0]])
                    : el[xCol[0]];

                const elV =el[name];
                const v = columns[yCol[i]].dataType === DataTypeEnum.date
                    ? new Date(elV)
                    : elV;

                Object.assign(y, {
                    [name]: v
                });
            });

            return x && y ?  { x, y } : null;
        }

        if (xLength > 1) {
            const x = {};
            let y: any;

            xCol.forEach((name, i) => {
                y = columnTypeY === DataTypeEnum.date
                    ? new Date (el[yCol[0]])
                    : el[yCol[0]];

                const elV =el[name];
                const v = columns[xCol[i]].dataType === DataTypeEnum.date
                    ? new Date(elV)
                    : elV;

                Object.assign(x, {
                    [name]: v
                });
            });

            return x && y ?  { x, y } : null;
        }

        const x = el[xCol[0]];
        const y = el[yCol[0]];

        if (!(x && y))
            return null;

        if (columnTypeX === DataTypeEnum.date)
            return  { x: new Date(x), y };

        if (columnTypeY === DataTypeEnum.date)
            return  { y: new Date(y), x };

        return  { x, y };
    });
};
