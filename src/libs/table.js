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


export default {
  filterAndSorter,
  fixData,
};
