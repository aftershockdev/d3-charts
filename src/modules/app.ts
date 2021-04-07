import { ChartCreator } from "./chartsConfig/chart_creator";

import { data_1, chartConfig_1, dataModel_1 } from "./testConfigData/config_1";
import { data_2, chartConfig_2, dataModel_2 } from "./testConfigData/config_2";
import { data_3, chartConfig_3, dataModel_3 } from "./testConfigData/config_3";
import { data_4, chartConfig_4, dataModel_4 } from "./testConfigData/config_4";

ChartCreator("main_one", data_1, chartConfig_1, dataModel_1);
ChartCreator("main_two", data_2, chartConfig_2, dataModel_2);
ChartCreator("main_three", data_3, chartConfig_3, dataModel_3);
ChartCreator("main_four", data_4, chartConfig_4, dataModel_4);
