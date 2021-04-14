import { IChartConfiguration, ChartTypesEnum } from "../interfaces/charts";



export const options = (config: IChartConfiguration) => {
    const fill = "#cccccc"
    const horizontal = false

    if(config.options){

        if(config.options[ChartTypesEnum.bar]) {
            const options = config.options.bar
            return {
                fill : options.fill ? options.fill : fill,
                horizontal: options.horizontal ? options.horizontal : horizontal
            }
        }

        if(config.options[ChartTypesEnum.line]) {
            const options = config.options.line
            return {
                fill : options.fill ? options.fill : fill,
                horizontal: options.horizontal ? options.horizontal : horizontal
            }
        }

        if(config.options[ChartTypesEnum.donut]) {
            const options = config.options.donut
            return {
                fill : options.fill ? options.fill : fill,
                horizontal: options.horizontal ? options.horizontal : horizontal
            }
        }
    }

    // Default Options by Chart Type
    switch (config.type) {
        case ChartTypesEnum.bar:
            return {
                fill: fill,
                horizontal:  horizontal
            }
        case ChartTypesEnum.line:
            return {
                fill: fill,
                horizontal:  horizontal
            }
        case ChartTypesEnum.donut:
            return {
                fill: fill,
                horizontal:  horizontal
            }
    }
}