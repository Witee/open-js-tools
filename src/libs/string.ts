import _ from 'lodash';

/**
 * @api {function} string.randomStr() 生成不重复的 id
 * @apiName randomString
 * @apiGroup string
 *
 * @apiDescription unix时间戳 + 随机数据
 *
 * @apiExample {typescript} 示例:
 *
 * import jsTools from 'open-js-tools';
 *
 * const s = jsTools.string.randomStr();
 *
 * console.log(s) // 1544852620609z611098
 *
 */
const randomStr = () => `${_.now()}z${_.random(0, 1000000)}`;

/**
 * @api {function} string.randomColor() 随机生成颜色值
 * @apiName randomColor
 * @apiGroup string
 *
 * @apiDescription 随机生成颜色值
 *
 * @apiExample {typescript} 示例:
 *
 * import jsTools from 'open-js-tools';
 *
 * const s = jsTools.string.randomColor();
 *
 * console.log(s) // #891cc1
 *
 */
const randomColor = () => `#${Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)}`;

export default {
  randomStr,
  randomColor,
};
