import _ from 'lodash';

/**
 * @api {function} table.filterAndSorter(dataSource,filters,sorter) 对表格数据过滤、排序
 * @apiName filterAndSorter
 * @apiGroup table
 *
 * @apiDescription 处理 antd Table 中排序与过滤
 *
 * @apiExample {typescript} 示例:
 *
 * import { table } from 'open-js-tools';
 *
 * const dataSource = [
 *    ['日期', '平台', '声量'],
 *    ['2018-07-20', '微博', 52872],
 *    ['2018-07-20', '微信', 8510],
 *  ];
 * const filters = { 日期: null, 平台: ['微博'], 声量: null };
 * const sorter = { field: '声量', order: 'descend' };
 *
 * const ds = table.filterAndSorter(dataSource, filters, sorter);
 *
 */
const filterAndSorter = (dataSource: DataSource, filters: Filters | null = null, sorter: Sorter | null = null) => {
  const header = _.get(dataSource, 0, []);
  let body = _.slice(dataSource, 1);
  const sortField = _.get(sorter, 'field', null);
  const sortOrder = _.get(sorter, 'order', null);

  if (!_.isEmpty(filters)) {
    _.forEach(filters, (value, key) => {
      // 获取过滤的字段在表头中的位置，以确定对应数据的位置
      const index = _.indexOf(header, key);
      if (!_.isNull(value) && _.get(value, 'length', 0) > 0) {
        _.remove(body, (d) => !_.includes(value, _.toString(_.get(d, index, null))));
      }
    });
  }

  if (!_.isEmpty(sorter) && sortField && sortOrder) {
    // 计算排序的字段在表头中的位置，以确定在数据中的位置，_.orderBy 中使用此位置的数据排序
    const index = _.indexOf(header, sortField);
    if (sortOrder === 'descend') {
      body = _.orderBy(body, index, 'desc');
    } else {
      body = _.orderBy(body, index, 'asc');
    }
  }

  body.unshift(header);
  return body;
};

/**
 * @api {function} table.fixData(dataSource) 整理数据
 * @apiName fixData
 * @apiGroup table
 *
 * @apiDescription 整理原则，将第一行作为表头，其它行只保留与第一行相应的部分，去掉无用的数据，将 null、undefined 等无效数据修改为 '-'
 *
 * @apiExample {typescript} 示例:
 *
 * import { table } from 'open-js-tools';
 *
 * const dataSource = [
 *    ['日期', '平台', '声量'],
 *    ['2018-07-20', '微博', undefined],
 *    ['2018-07-20', '微信'],
 *    ['2018-07-20', '微信', 8510],
 *  ];
 *
 * const ds = table.fixData(dataSource);
 * // ds: [
 *    ['日期', '平台', '声量'],
 *    ['2018-07-20', '微博', '-'],
 *    ['2018-07-20', '微信', '-'],
 *    ['2018-07-20', '微信', 8510],
 *  ];
 *
 */
const fixData = (dataSource: DataSource) => {
  if (_.get(dataSource, 'length', 0) <= 1) {
    return dataSource;
  }
  const header = _.get(dataSource, 0, []) as Header;
  const rows = _.slice(dataSource, 1);
  let newRows = [];

  newRows = _.map(rows, (row) =>
    _.times(header.length, (index) => {
      // 合法的只有字符串和数字，其它的情况全部转换为 '-'
      const item = _.get(row, index, '-');
      if (_.isNumber(item) || _.isString(item)) {
        return item;
      }
      return '-';
    }),
  );
  newRows.unshift(header);
  return newRows;
};

/**
 * @api {function} table.dataSource2Dataset() antd Table 数据源转换为 EChart dataset 格式
 * @apiName dataSource2Dataset
 * @apiGroup table
 *
 * @apiDescription
 *  功能: 将 antd table 格式的 dataSource 转换为 echarts dataset.source 格式
 *
 *  方法: dataSource2Dataset(dataSource, categoryColumn, valueColumn, legendColumn)
 *
 *  注意: 参数是有顺序的，需要根据 x/y 轴类型传递参数，如，第二个参数需要类目型(categoryColumn)
 *
 *  参考: http://www.echartsjs.com/option.html#xAxis
 *
 * @apiParam {Array} dataSource 二维表格式
 * @apiParam {String} categoryColumn 类目型列名称
 * @apiParam {String} valueColumn 数值型列名称
 * @apiParam {String} legendColumn 系列对应的列名称
 *
 * @apiExample {javascript} 样例:
 *  import { table } from 'open-js-tools';
 *
 *  const dataSource = [
 *    ['日期', '平台', '声量'],
 *    ['2018-7-1', '微博', 1024],
 *    ['2018-7-1', '微信', 2048],
 *  ]
 *
 *  // echarts 4.x 中，选择 x 轴为 category 类型，y 轴为 value 类型, 系列使用 "平台" 所在的列
 *  // 本例中: categoryColumn = '日期'; valueColumn = '声量'; legendColumn = '平台'
 *  const result = table.dataSource2Dataset(dataSource, '日期', '声量', '平台')
 *
 *  console.log(result)
 *
 *  [
 *    ['日期', '微博', '微信'],
 *    ['2018-7-1', 1024, 2048],
 *  ]
 */
const dataSource2Dataset = (
  dataSource: DataSource,
  categoryColumn: CategoryColumn,
  valueColumn: ValueColumn,
  legendColumn: LegendColumn,
) => {
  if (_.get(dataSource, 'length', 0) <= 1) {
    return dataSource;
  }

  const dataset: Dataset = { source: [] };
  const header = _.get(dataSource, 0, []) as Header;
  const body = _.slice(dataSource, 1);

  const categoryIndex = _.indexOf(header, categoryColumn);
  const valueIndex = _.indexOf(header, valueColumn);
  const legendIndex = _.indexOf(header, legendColumn);

  const legendData = _.keys(_.groupBy(body, legendIndex)); // 如 ['微博', '微信']

  let newHeader = [categoryColumn];
  newHeader = _.concat(newHeader, legendData);

  const tmpData = {};
  _.forEach(body, (b) => {
    // 找到 legend 的 index，即 微博、微信 在 legendData ([微博, 微信])中的位置，以此顺序保存数据
    const lIndex = _.findIndex(legendData, (l) => l === b[legendIndex]);
    // 保存数据，格式: {'2017-7-1': [1024, 2048], ...}
    _.set(tmpData, [b[categoryIndex] as string | number, lIndex], _.get(b, valueIndex, null));
  });

  _.forEach(tmpData, (value: (number | string)[], key) => {
    dataset.source.push([key, ...value]);
  });

  dataset.source.unshift(newHeader);

  return dataset;
};

export default {
  filterAndSorter,
  fixData,
  dataSource2Dataset,
};
