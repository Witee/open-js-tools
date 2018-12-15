import _ from 'lodash';

/**
  过滤表格中列的数据

  dataSource 格式 第一列为表头，其余为数据
    dataSource = [
      ['日期', '平台', '声量'],
      ['2018-07-20', '微博', 52872],
      ['2018-07-20', '微信', 8510],
    ]

  filters 是 antd Table 的过滤格式:
    filters = { 日期: null, 平台: ['微博'], 声量: null }

  sorter 是 antd Table 的排序格式:
    sorter = { field: '声量', order: 'descend' }
*/
const filterAndSorter = (dataSource, filters = null, sorter = null) => {
  const header = _.get(dataSource, 0, []);
  let body = _.slice(dataSource, 1);
  const sortField = _.get(sorter, 'field', null);
  const sortOrder = _.get(sorter, 'order', null);

  if (!_.isEmpty(filters)) {
    _.forEach(filters, (value, key) => {
      /**
        获取过滤的字段在表头中的位置，以确定对应数据的位置
      */
      const index = _.indexOf(header, key);
      if (!_.isNull(value) && _.get(value, 'length', 0) > 0) {
        _.remove(body, (d) => (!_.includes(value, _.toString(_.get(d, index, null)))));
      }
    });
  }

  if (!_.isEmpty(sorter) && sortField && sortOrder) {
    /**
      计算排序的字段在表头中的位置，以确定在数据中的位置，_.orderBy 中使用此位置的数据排序
    */
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
  整理数据，数据可能不合法，所以收到之后需要先整理

  整理原则，将第一行作为表头，其它行只保留与第一行相应的部分，去掉无用的数据，
  将 null、undefined 等无效数据修改为 '-'
*/
const fixData = (dataSource) => {
  if (_.get(dataSource, 'length', 0) <= 1) {
    return dataSource;
  }
  const header = _.get(dataSource, 0, []);
  const rows = _.slice(dataSource, 1);
  let newRows = [];

  newRows = _.map(rows, (row) => (_.times(header.length, (index) => {
    /**
      合法的只有字符串和数字，其它的情况全部转换为 '-'
    */
    const item = _.get(row, index, '-');
    if (_.isNumber(item) || _.isString(item)) {
      return item;
    }
    return '-';
  })));
  newRows.unshift(header);
  return newRows;
};

/**
  将 antd table 格式的 dataSource 转换为 echarts dataset.source 格式

  dataSource 格式为:
    [
      [日期, 平台, 声量],
      [2018-7-1, 微博, 1024],
      [2018-7-1, 微信,2048],
    ]
  转换为:
    [
      [日期, 微博, 微信],
      [2018-7-1, 1024, 2048],
    ]
  样例中
    categoryColumn = 日期
    valueColumn = 声量
    legendColumn = 平台


  注意: 需要根据类型传递参数，即，第二个参数需要类目型(categoryColumn)
*/
/**
 * @api {get} /user/:id Request User information
 * @apiName GetUser
 * @apiGroup User
 *
 * @apiParam {Number} id Users unique ID.
 *
 * @apiSuccess {String} firstname Firstname of the User.
 * @apiSuccess {String} lastname  Lastname of the User.
 */
const dataSource2Dataset = (dataSource, categoryColumn, valueColumn, legendColumn) => {
  if (_.get(dataSource, 'length', 0) <= 1) {
    return dataSource;
  }

  const dataset = { source: [] };
  const header = _.get(dataSource, 0, []);
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
    const lIndex = _.findIndex(legendData, (l) => (l === b[legendIndex]));
    // 保存数据，格式: {'2017-7-1': [1024, 2048], ...}
    _.set(tmpData, [b[categoryIndex], lIndex], _.get(b, valueIndex, null));
  });

  _.forEach(tmpData, (value, key) => {
    dataset.source.push([
      key,
      ...value,
    ]);
  });

  dataset.source.unshift(newHeader);

  return dataset;
};

export default {
  filterAndSorter,
  fixData,
  dataSource2Dataset,
};
