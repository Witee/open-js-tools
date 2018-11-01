
/**
  unix时间戳 + 随机数据 生成不重复的 id
*/
const randomStr = () => `${_.now()}z${_.random(0, 1000000)}`;

/**
  时间字符串变量，将指定字符串中的"变量字符"替换成对应的字符串(传递 moment 支持的参数实现)

  参数为四部分：[基准时间字符串，模版字符串，时间偏移，起始时间]

    模版字符串[必选]    : string, 模版字符串，根据 moment 支持的格式设置，如将 YYYY 替换为当前年
    基准时间字符串[可选] : string, 表示从哪个时间开始计算，格式必须为: YYYY-MM-DD HH:mm:ss
    时间偏移[可选]     :  array, [‘add/subtract’, NUM, 单位]，以当前时间为基准，增加或减少指定单位的时间
    起始时间[可选]    :  array, ['startOf/endOf', 'year/month/week/day/hour/minute/second']

    第二、三、四 部分为空或未设置，表示当前时间

  YYYY : 年
  MM   : 月
  DD   : 日
  HH   : 时
  mm   : 分
  ss   : 秒

  参数格式举例:
    模版: ['模版字符串', '基准时间字符串', ['add/subtract', NUM, 'years/months/weeks/days/hours/minutes/seconds/milliseconds'], ['startOf/endOf', 'year/month/week/day/hour/minute/second']]
    今天当前时间: ['YYYY-MM-DD HH:mm:ss']
    今天结束时间: ['YYYY-MM-DD HH:mm:ss', '', [], ['endOf', 'day']]
    明天开始时间: ['YYYY-MM-DD HH:mm:ss', '', ['add', 1, 'days'], ['startOf', 'day']]
    昨天开始时间: ['YYYY-MM-DD HH:mm:ss', '', ['subtract', 1, 'days'], ['startOf', 'day']]
    2018-01-01 00:00:00 的昨天: ['YYYY-MM-DD', '2018-01-01 00:00:00', ['subtract', 1, 'days'], ['startOf', 'day']]
*/

const dateTemplate = (textArr) => {
  /**
    如果不是列表则直接返回，目的是处理字符串的情况
  */
  if (!_.isArray(textArr)) {
    return textArr;
  }

  const template = _.get(textArr, 0, null);
  const baseTime = _.get(textArr, 1, '');
  const offset = _.get(textArr, 2, []);
  const startEnd = _.get(textArr, 3, []);
  let now = moment();

  if (template) {
    /**
      计算基准时间，默认为当前时间
    */
    if (_.get(baseTime, 'length') > 0) {
      now = moment(baseTime, 'YYYY-MM-DD HH:mm:ss');
    }
    /**
      处理时间偏移，只支持 加 或减
    */
    const operate = _.get(offset, 0, null);
    if (operate === 'add') {
      const num = _.get(offset, 1, null);
      const unit = _.get(offset, 2, null);
      if (num) { now = now.add(num, unit); }
    } else if (operate === 'subtract') {
      const num = _.get(offset, 1, null);
      const unit = _.get(offset, 2, null);
      if (num) { now = now.subtract(num, unit); }
    }
    /**
      处理起始时间
    */
    const displayAt = _.get(startEnd, 0, null);
    if (displayAt === 'startOf') {
      const unit = _.get(startEnd, 1, null);
      if (unit) { now = now.startOf(unit); }
    } else if (displayAt === 'endOf') {
      const unit = _.get(startEnd, 1, null);
      if (unit) { now = now.endOf(unit); }
    }

    /**
      处理显示样式
    */
    return now.format(template);
  }

  return '';
};

export default {
  randomStr,
  dateTemplate,
};
