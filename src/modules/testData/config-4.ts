import { IChartConfiguration, IDataModel, DataTypeEnum } from "../interfaces/charts";

export const data_4 = [
    { name: "Ruslan", efficiency: 35 },
    { name: "Anton", efficiency: 45 },
    { name: "Ihor", efficiency: 55 },
    { name: "Roman", efficiency: 65 },
    { name: "Igor", efficiency: 75 },
    { name: "Ira", efficiency: 45 },
    { name: "Lena", efficiency: 24 },
    { name: "Olga", efficiency: 13 },
    { name: "Elena", efficiency: 5 },
    { name: "Nikita", efficiency: 28 },
    { name: "Andrey", efficiency: 38 },
    { name: "Nikolay", efficiency: 41 },
    { name: "Josh", efficiency: 41 },
];

export const chartConfigBar_4: IChartConfiguration = {
    type: "bar",
    x: "name",
    y: "efficiency",
};
export const chartConfigLine_4: IChartConfiguration = {
    type: "line",
    x: "efficiency",
    y: "name",
};
export const chartConfigDonut_4: IChartConfiguration = {
    type: "donut",
    x: "name",
    y: "efficiency",
};

export const dataModel_4: IDataModel = {
    columns: {
        name: {
            columnName: "name",
            description: "users",
            dataType: DataTypeEnum.string,
        },
        efficiency: {
            columnName: "efficiency",
            description: "values of confirmed people",
            dataType: DataTypeEnum.number,
        },
    },
};
