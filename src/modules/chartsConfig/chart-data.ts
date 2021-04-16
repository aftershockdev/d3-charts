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

    const columnTypeX = columns[xCol[0]].dataType;
    const columnTypeY = columns[yCol[0]].dataType;

    return data.map(el => {
        if (yLength > 1) {
            const y = {};
            let x: any;
            for(const key in yCol) {
                const name = yCol[key];

                if (columnTypeX === DataTypeEnum.date) {
                    x = new Date (el[xCol[0]]);
                } else {
                    x = el[xCol[0]];
                }

                if (columns[yCol[key]].dataType === DataTypeEnum.date) {
                    Object.assign(y,{
                        [name]: new Date(el[name])
                    });
                } else {
                    Object.assign(y,{
                        [name]: el[name]
                    });
                }
            }
            return { x, y };
        }
        if (xLength > 1) {
            const x = {};
            let y: any;
            for(const key in xCol) {
                const name = xCol[key];

                if (columnTypeY === DataTypeEnum.date) {
                    y = new Date (el[yCol[0]]);
                } else {
                    y = el[yCol[0]];
                }

                if(columns[xCol[key]].dataType === DataTypeEnum.date) {
                    Object.assign(x,{
                        [name]: new Date(el[name])
                    });
                } else {
                    Object.assign(x,{
                        [name]: el[name]
                    });
                }
            }
            return { x, y };
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
