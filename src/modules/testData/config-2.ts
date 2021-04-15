import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";

export const data_2 = [
    { date: "2014-11-01", value: 12 , value2: 444 },
    { date: "2014-11-02", value: 14 , value2: 344 },
    { date: "2014-11-03", value: 151, value2: 254 },
    { date: "2014-11-04", value: 35 , value2: 654 },
    { date: "2014-11-05", value: 267, value2: 414 },
    { date: "2014-11-06", value: 151, value2: 144 },
    { date: "2014-11-07", value: 35 , value2: 344 },
    { date: "2014-11-08", value: 267, value2: 524 },
    { date: "2014-11-09", value: 444, value2: 154 },
    { date: "2014-11-10", value: 35 , value2: 425 },
    { date: "2014-11-11", value: 267, value2: 124 },
    { date: "2014-11-12", value: 145, value2: 321 },
    { date: "2014-11-13", value: 33 , value2: 432 },
    { date: "2014-11-14", value: 258, value2: 653 },
    { date: "2014-11-15", value: 343, value2: 612 },
    { date: "2014-11-16", value: 55 , value2: 412 },
    { date: "2014-11-17", value: 313, value2: 654 },
    { date: "2014-11-18", value: 412, value2: 988 },
    { date: "2014-11-19", value: 235, value2: 144 },
    { date: "2014-11-20", value: 431, value2: 354 },
    { date: "2014-11-21", value: 531, value2: 765 },
    { date: "2014-11-22", value: 631, value2: 111 },
    { date: "2014-11-23", value: 731, value2: 22 },
    { date: "2014-11-24", value: 331, value2: 333 },
    { date: "2014-11-25", value: 531, value2: 543 },
    { date: "2014-11-26", value: 631, value2: 676 },
    { date: "2014-11-27", value: 231, value2: 10 },
];

export const chartConfigBar_2: IChartConfiguration = {
    type: "bar",
    x: "date",
    y: "value",
};
export const chartConfigLine_2: IChartConfiguration = {
    type: "line",
    x: "value",
    y: "date",
};
export const chartConfigDonut_2: IChartConfiguration = {
    type: "donut",
    x: "date",
    y: "value",
};

export const dataModel_2: IDataModel = {
    columns: {
        date: {
            columnName: "date",
            description: "date",
            dataType: DataTypeEnum.date,
        },
        value: {
            columnName: "value",
            description: "sales",
            dataType: DataTypeEnum.number,
        },
        value2: {
            columnName: "value2",
            description: "efficiency",
            dataType: DataTypeEnum.number
        }
    },
};
