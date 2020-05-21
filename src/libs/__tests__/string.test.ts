import string from '../string';

// string.randomStr
test('判断随机生成的 [字符串] 是否合法', () => {
  // eg: 1544852620609z611098
  const reg = /^\d{13}z\d{6}$/;
  const str = string.randomStr();

  const received = reg.test(str);

  expect(received).toBeTruthy();
});

// string.randomColor
test('判断随机生成的 [颜色值字符串] 是否合法', () => {
  // eg: #3e0f4c
  const reg = /^#[a-z0-9]{6}$/;

  const received = reg.test(string.randomColor());

  expect(received).toBeTruthy();
});
