import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";

export const data_2: any[] = [
    { date: "2014-11-01", value: 12 },
    { date: "2014-11-02", value: 14 },
    { date: "2014-11-03", value: 151 },
    { date: "2014-11-04", value: 35 },
    { date: "2014-11-05", value: 267 },
    { date: "2014-11-06", value: 151 },
    { date: "2014-11-07", value: 35 },
    { date: "2014-11-08", value: 267 },
    { date: "2014-11-09", value: 444 },
    { date: "2014-11-10", value: 35 },
    { date: "2014-11-11", value: 267 },
    { date: "2014-11-12", value: 145 },
    { date: "2014-11-13", value: 33 },
    { date: "2014-11-14", value: 258 },
    { date: "2014-11-15", value: 343 },
    { date: "2014-11-16", value: 55 },
    { date: "2014-11-17", value: 313 },
    { date: "2014-11-18", value: 412 },
    { date: "2014-11-19", value: 235 },
    { date: "2014-11-20", value: 431 },
    { date: "2014-11-21", value: 531 },
    { date: "2014-11-22", value: 631 },
    { date: "2014-11-23", value: 731 },
    { date: "2014-11-24", value: 331 },
    { date: "2014-11-25", value: 531 },
    { date: "2014-11-26", value: 631 },
    { date: "2014-11-27", value: 231 },
];

export const chartConfigBar_2: IChartConfiguration = {
    type: "bar",
    x: "date",
    y: "value",
};
export const chartConfigLine_2: IChartConfiguration = {
    type: "line",
    x: "date",
    y: "value",
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
    },
};
