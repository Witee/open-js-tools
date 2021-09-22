// 常用 js 正则表达式

/**
 * @api {regular} regular.all 匹配所有
 * @apiName all
 * @apiGroup regular
 *
 * @apiDescription \/[\s\S]*\/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.all.test('any string');  // true
 *
 */
const all = /[\s\S]*/;

/**
 * @api {regular} regular.varname 匹配合法变量名
 * @apiName varname
 * @apiGroup regular
 *
 * @apiDescription /^[a-zA-Z_]\w+$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.varname.test('_varName123');  // true
 *
 */
const varname = /^[a-zA-Z_]\w+$/;

/**
 * @api {regular} regular.cnEnNumSpaceUnderlineLine 匹配中英文数字下划线空格
 * @apiName cnEnNumSpaceUnderlineLine
 * @apiGroup regular
 *
 * @apiDescription /^[\u4e00-\u9fa5a-zA-Z0-9-_\s]+$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.cnEnNumSpaceUnderlineLine.test('中英文en1234567890 - _');  // true
 *
 */
const cnEnNumSpaceUnderlineLine = /^[\u4e00-\u9fa5a-zA-Z0-9-_\s]+$/;

/**
 * @api {regular} regular.cnEnNumUnderlineLine 匹配中英文数字下划线
 * @apiName cnEnNumUnderlineLine
 * @apiGroup regular
 *
 * @apiDescription /^[\u4e00-\u9fa5a-zA-Z0-9-_]+$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.cnEnNumUnderlineLine.test('中英文en1234567890-_');  // true
 *
 */
const cnEnNumUnderlineLine = /^[\u4e00-\u9fa5a-zA-Z0-9-_]+$/;

/**
 * @api {regular} regular.cnSpace 匹配中文和空格
 * @apiName cnSpace
 * @apiGroup regular
 *
 * @apiDescription /^[\u4e00-\u9fa5\s]+$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.cnSpace.test('中 文');  // true
 *
 */
const cnSpace = /^[\u4e00-\u9fa5\s]+$/;

/**
 * @api {regular} regular.dateTime 匹配时间格式 YYYY-MM-DD HH:mm:ss
 * @apiName dateTime
 * @apiGroup regular
 *
 * @apiDescription /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.dateTime.test('2021-01-01 00:00:00');  // true
 *
 */
const dateTime = /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/;

/**
 * @api {regular} regular.date 匹配日期格式 YYYY-MM-DD
 * @apiName date
 * @apiGroup regular
 *
 * @apiDescription /^\d{4}-\d{2}-\d{2}$/
 *
 * @apiExample {typescript} 示例:
 *
 * import { regular } from 'open-js-tools';
 *
 * regular.date.test('2021-01-01');  // true
 *
 */
const date = /^\d{4}-\d{2}-\d{2}$/;

export default {
  all,
  varname,
  cnEnNumSpaceUnderlineLine,
  cnEnNumUnderlineLine,
  cnSpace,
  dateTime,
  date,
};
