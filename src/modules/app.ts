import { ChartCreator } from "./chartsConfig/chart_creator";
import { IChartSettings } from "./interfaces/charts";

import { data_1, chartConfigBar_1, chartConfigLine_1, chartConfigDonut_1, dataModel_1 } from "./testConfigData/config_1";
import { data_2, chartConfigBar_2, chartConfigLine_2, chartConfigDonut_2, dataModel_2 } from "./testConfigData/config_2";
import { data_3, chartConfigBar_3, chartConfigLine_3, chartConfigDonut_3, dataModel_3 } from "./testConfigData/config_3";
import { data_4, chartConfigBar_4, chartConfigLine_4, chartConfigDonut_4, dataModel_4 } from "./testConfigData/config_4";

// Chart Settings
const chartSettings: IChartSettings = {
    width: 400,
    height: 400,
    margin: {
        top: 15,
        right: 0,
        bottom: 35,
        left: 60,
    },
};
// DOM Elements
const main_one: HTMLElement = document.querySelector(".chart.main_one");
const main_two: HTMLElement = document.querySelector(".chart.main_two");
const main_three: HTMLElement = document.querySelector(".chart.main_three");

// Bars
ChartCreator(main_one, data_1, chartConfigBar_1, dataModel_1, chartSettings);
ChartCreator(main_one, data_2, chartConfigBar_2, dataModel_2, chartSettings);
ChartCreator(main_one, data_3, chartConfigBar_3, dataModel_3, chartSettings);
ChartCreator(main_one, data_4, chartConfigBar_4, dataModel_4, chartSettings);

// Lines
ChartCreator(main_two, data_1, chartConfigLine_1, dataModel_1, chartSettings);
ChartCreator(main_two, data_2, chartConfigLine_2, dataModel_2, chartSettings);
ChartCreator(main_two, data_3, chartConfigLine_3, dataModel_3, chartSettings);
ChartCreator(main_two, data_4, chartConfigLine_4, dataModel_4, chartSettings);

// Donuts
ChartCreator(main_three, data_1, chartConfigDonut_1, dataModel_1, chartSettings);
ChartCreator(main_three, data_2, chartConfigDonut_2, dataModel_2, chartSettings);
ChartCreator(main_three, data_3, chartConfigDonut_3, dataModel_3, chartSettings);
ChartCreator(main_three, data_4, chartConfigDonut_4, dataModel_4, chartSettings);
