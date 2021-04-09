import { ChartCreator } from "./chartsConfig/chart_creator";

import { data_1, chartConfigBar_1, chartConfigLine_1, chartConfigDonut_1, dataModel_1 } from "./testConfigData/config_1";
import { data_2, chartConfigBar_2, chartConfigLine_2, chartConfigDonut_2, dataModel_2 } from "./testConfigData/config_2";
import { data_3, chartConfigBar_3, chartConfigLine_3, chartConfigDonut_3, dataModel_3 } from "./testConfigData/config_3";
import { data_4, chartConfigBar_4, chartConfigLine_4, chartConfigDonut_4, dataModel_4 } from "./testConfigData/config_4";

// Bars
ChartCreator("main_one", data_1, chartConfigBar_1, dataModel_1);
ChartCreator("main_one", data_2, chartConfigBar_2, dataModel_2);
ChartCreator("main_one", data_3, chartConfigBar_3, dataModel_3);
ChartCreator("main_one", data_4, chartConfigBar_4, dataModel_4);

// Lines
ChartCreator("main_two", data_1, chartConfigLine_1, dataModel_1);
ChartCreator("main_two", data_2, chartConfigLine_2, dataModel_2);
ChartCreator("main_two", data_3, chartConfigLine_3, dataModel_3);
ChartCreator("main_two", data_4, chartConfigLine_4, dataModel_4);

// Donuts
ChartCreator("main_three", data_1, chartConfigDonut_1, dataModel_1);
ChartCreator("main_three", data_2, chartConfigDonut_2, dataModel_2);
ChartCreator("main_three", data_3, chartConfigDonut_3, dataModel_3);
ChartCreator("main_three", data_4, chartConfigDonut_4, dataModel_4);
