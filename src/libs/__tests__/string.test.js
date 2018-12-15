import string from '../string';

// string.randomStr
test('判断随机生成的 [字符串] 是否合法', () => {
  // eg: 1544852620609z611098
  const reg = /^\d{13}z\d{6}$/;

  const received = reg.test(string.randomStr());

  expect(received).toBeTruthy();
});

// string.customColor
test('判断随机生成的 [颜色值字符串] 是否合法', () => {
  // eg: #3e0f4c
  const reg = /^#[a-z0-9]{6}$/;

  const received = reg.test(string.customColor());

  expect(received).toBeTruthy();
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 当前时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime];
  const expectedToday = '2019-01-01 11:11:11';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 今天开始时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, [], ['startOf', 'day']];
  const expectedToday = '2019-01-01 00:00:00';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 今天结束时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, [], ['endOf', 'day']];
  const expectedToday = '2019-01-01 23:59:59';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 明天开始时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, ['add', 1, 'days'], ['startOf', 'day']];
  const expectedToday = '2019-01-02 00:00:00';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 明天结束时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, ['add', 1, 'days'], ['endOf', 'day']];
  const expectedToday = '2019-01-02 23:59:59';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 昨天开始时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, ['subtract', 1, 'days'], ['startOf', 'day']];
  const expectedToday = '2018-12-31 00:00:00';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});

// string.dateTemplate
test('返回指定格式的时间字符串 - 昨天结束时间', () => {
  /**
    假设基准时间是 2019-01-01 11:11:11 ，以此作为 string.dateTemplate 的第二个参数 [基准时间字符串]
  */
  const fakeBaseTime = '2019-01-01 11:11:11';

  const today = ['YYYY-MM-DD HH:mm:ss', fakeBaseTime, ['subtract', 1, 'days'], ['endOf', 'day']];
  const expectedToday = '2018-12-31 23:59:59';
  const receivedToday = string.dateTemplate(today);

  expect(receivedToday).toEqual(expectedToday);
});
