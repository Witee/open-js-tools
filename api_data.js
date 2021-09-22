define({ "api": [
  {
    "type": "regular",
    "url": "regular.all",
    "title": "匹配所有",
    "name": "all",
    "group": "regular",
    "description": "<p>/[\\s\\S]*/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.all.test('any string');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.cnEnNumSpaceUnderlineLine",
    "title": "匹配中英文数字下划线空格",
    "name": "cnEnNumSpaceUnderlineLine",
    "group": "regular",
    "description": "<p>/^[\\u4e00-\\u9fa5a-zA-Z0-9-_\\s]+$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.cnEnNumSpaceUnderlineLine.test('中英文en1234567890 - _');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.cnEnNumUnderlineLine",
    "title": "匹配中英文数字下划线",
    "name": "cnEnNumUnderlineLine",
    "group": "regular",
    "description": "<p>/^[\\u4e00-\\u9fa5a-zA-Z0-9-_]+$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.cnEnNumUnderlineLine.test('中英文en1234567890-_');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.cnSpace",
    "title": "匹配中文和空格",
    "name": "cnSpace",
    "group": "regular",
    "description": "<p>/^[\\u4e00-\\u9fa5\\s]+$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.cnSpace.test('中 文');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.date",
    "title": "匹配日期格式 YYYY-MM-DD",
    "name": "date",
    "group": "regular",
    "description": "<p>/^\\d{4}-\\d{2}-\\d{2}$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.date.test('2021-01-01');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.dateTime",
    "title": "匹配时间格式 YYYY-MM-DD HH:mm:ss",
    "name": "dateTime",
    "group": "regular",
    "description": "<p>/^\\d{4}-\\d{2}-\\d{2} \\d{2}:\\d{2}:\\d{2}$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.dateTime.test('2021-01-01 00:00:00');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "regular",
    "url": "regular.varname",
    "title": "匹配合法变量名",
    "name": "varname",
    "group": "regular",
    "description": "<p>/^[a-zA-Z_]\\w+$/</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { regular } from 'open-js-tools';\n\nregular.varname.test('_varName123');  // true",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/regular.ts",
    "groupTitle": "regular"
  },
  {
    "type": "function",
    "url": "string.randomColor()",
    "title": "随机生成颜色值",
    "name": "randomColor",
    "group": "string",
    "description": "<p>随机生成颜色值</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { string } from 'open-js-tools';\n\nconst s = string.randomColor();\n\nconsole.log(s) // #891cc1",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/string.ts",
    "groupTitle": "string"
  },
  {
    "type": "function",
    "url": "string.randomStr()",
    "title": "生成不重复的 id",
    "name": "randomString",
    "group": "string",
    "description": "<p>unix时间戳 + 随机数据</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { string } from 'open-js-tools';\n\nconst s = string.randomStr();\n\nconsole.log(s) // 1544852620609z611098",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/string.ts",
    "groupTitle": "string"
  },
  {
    "type": "function",
    "url": "table.dataSource2Dataset()",
    "title": "antd Table 数据源转换为 EChart dataset 格式",
    "name": "dataSource2Dataset",
    "group": "table",
    "description": "<p>功能: 将 antd table 格式的 dataSource 转换为 echarts dataset.source 格式</p> <p>方法: dataSource2Dataset(dataSource, categoryColumn, valueColumn, legendColumn)</p> <p>注意: 参数是有顺序的，需要根据 x/y 轴类型传递参数，如，第二个参数需要类目型(categoryColumn)</p> <p>参考: http://www.echartsjs.com/option.html#xAxis</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Array",
            "optional": false,
            "field": "dataSource",
            "description": "<p>二维表格式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "categoryColumn",
            "description": "<p>类目型列名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "valueColumn",
            "description": "<p>数值型列名称</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "legendColumn",
            "description": "<p>系列对应的列名称</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "样例:",
        "content": "import { table } from 'open-js-tools';\n\nconst dataSource = [\n  ['日期', '平台', '声量'],\n  ['2018-7-1', '微博', 1024],\n  ['2018-7-1', '微信', 2048],\n]\n\n// echarts 4.x 中，选择 x 轴为 category 类型，y 轴为 value 类型, 系列使用 \"平台\" 所在的列\n// 本例中: categoryColumn = '日期'; valueColumn = '声量'; legendColumn = '平台'\nconst result = table.dataSource2Dataset(dataSource, '日期', '声量', '平台')\n\nconsole.log(result)\n\n[\n  ['日期', '微博', '微信'],\n  ['2018-7-1', 1024, 2048],\n]",
        "type": "javascript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/table.ts",
    "groupTitle": "table"
  },
  {
    "type": "function",
    "url": "table.filterAndSorter(dataSource,filters,sorter)",
    "title": "对表格数据过滤、排序",
    "name": "filterAndSorter",
    "group": "table",
    "description": "<p>处理 antd Table 中排序与过滤</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { table } from 'open-js-tools';\n\nconst dataSource = [\n   ['日期', '平台', '声量'],\n   ['2018-07-20', '微博', 52872],\n   ['2018-07-20', '微信', 8510],\n ];\nconst filters = { 日期: null, 平台: ['微博'], 声量: null };\nconst sorter = { field: '声量', order: 'descend' };\n\nconst ds = table.filterAndSorter(dataSource, filters, sorter);",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/table.ts",
    "groupTitle": "table"
  },
  {
    "type": "function",
    "url": "table.fixData(dataSource)",
    "title": "整理数据",
    "name": "fixData",
    "group": "table",
    "description": "<p>整理原则，将第一行作为表头，其它行只保留与第一行相应的部分，去掉无用的数据，将 null、undefined 等无效数据修改为 '-'</p>",
    "examples": [
      {
        "title": "示例:",
        "content": "\nimport { table } from 'open-js-tools';\n\nconst dataSource = [\n   ['日期', '平台', '声量'],\n   ['2018-07-20', '微博', undefined],\n   ['2018-07-20', '微信'],\n   ['2018-07-20', '微信', 8510],\n ];\n\nconst ds = table.fixData(dataSource);\n// ds: [\n   ['日期', '平台', '声量'],\n   ['2018-07-20', '微博', '-'],\n   ['2018-07-20', '微信', '-'],\n   ['2018-07-20', '微信', 8510],\n ];",
        "type": "typescript"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/table.ts",
    "groupTitle": "table"
  }
] });
