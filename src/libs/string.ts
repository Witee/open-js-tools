import _ from 'lodash';

/**
 * @api {function} string.randomStr() 生成不重复的 id
 * @apiName randomString
 * @apiGroup string
 *
 * @apiDescription unix时间戳 + 随机数据
 *
 * @apiExample {ts} 样例:
 *
 * const s = string.randomStr();
 *
 * console.log(s) // 1544852620609z611098
 *
 * @author Witee <github.com/Witee>
 * @date 2020-05-21
 */
const randomStr = () => `${_.now()}z${_.random(0, 1000000)}`;

/**
 * 随机生成颜色值
 *
 *
 * @author Witee <github.com/Witee>
 * @date 2020-05-21
 */
const randomColor = () => `#${Math.floor(Math.random() * (256 * 256 * 256 - 1)).toString(16)}`;

export default {
  randomStr,
  randomColor,
};
