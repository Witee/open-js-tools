import table from '../table';

const { filterAndSorter, fixData, dataSource2Dataset } = table;

describe('table.filterAndSorter', () => {
  test('手工对表格数据过滤、排序', () => {
    const dataSource: DataSource = [
      ['日期', '平台', '声量'],
      ['2019-01-01', '微博', 1],
      ['2019-01-01', '微信', 2],
      ['2019-01-02', '微博', 3],
      ['2019-01-02', '微信', 4],
      ['2019-01-03', '微博', 5],
      ['2019-01-03', '微信', 6],
    ];
    const expected = [
      ['日期', '平台', '声量'],
      ['2019-01-03', '微博', 5],
      ['2019-01-02', '微博', 3],
      ['2019-01-01', '微博', 1],
    ];

    const filters: Filters = { 平台: ['微博'] };
    const sorter: Sorter = { field: '声量', order: 'descend' };

    const received = filterAndSorter(dataSource, filters, sorter);

    expect(received).toEqual(expected);
  });
});

describe('table.fixData', () => {
  test('将无效数据显示为 -', () => {
    const dataSource: DataSource = [
      ['日期', '平台', '声量'],
      ['2019-01-01', '微博', undefined],
      ['2019-01-01', '微信', null],
      ['2019-01-02', '微博'],
      ['2019-01-02', '微信', 4],
    ];

    const expected = [
      ['日期', '平台', '声量'],
      ['2019-01-01', '微博', '-'],
      ['2019-01-01', '微信', '-'],
      ['2019-01-02', '微博', '-'],
      ['2019-01-02', '微信', 4],
    ];

    const received = fixData(dataSource);

    expect(received).toEqual(expected);
  });
});

describe('table.dataSource2Dataset', () => {
  test('将 dataSource 转换为 dataset 格式', () => {
    const dataSource = [
      ['日期', '平台', '声量'],
      ['2019-01-01', '微博', 1],
      ['2019-01-01', '微信', 2],
    ];

    const expected = {
      source: [
        ['日期', '微博', '微信'],
        ['2019-01-01', 1, 2],
      ],
    };

    const received = dataSource2Dataset(dataSource, '日期', '声量', '平台');

    expect(received).toEqual(expected);
  });
});
