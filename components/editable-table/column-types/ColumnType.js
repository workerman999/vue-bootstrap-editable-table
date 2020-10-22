import tTypedCell from './t-text-cell';

export default class ColumnType {
  static type = '';
  static cell = tTypedCell;
  static aggregations = [];

  static getAggregationMethod(name) {
    return this.aggregations.find(method => method.name === name);
  }
}
