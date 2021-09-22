import regular from '../regular';
import configs from './configs';

const { fackStrings } = configs;
const { all, varname, cnEnNumSpaceUnderlineLine, cnEnNumUnderlineLine, cnSpace, dateTime, date } = regular;

describe('测试 regular.all', () => {
  test('判断字符串是否为 true', () => {
    const str = 'any string';

    const actual = all.test(str);

    expect(actual).toBeTruthy();
  });

  test('合法字符，返回 true', () => {
    let actual;

    fackStrings.forEach((fs) => {
      actual = all.test(`${fs}`);
      expect(actual).toBeTruthy();
    });
  });
});

describe('测试 regular.varname', () => {
  test('合法字符, 返回 true', () => {
    let actual;
    const strs = ['_varName123', 'var', 'Var', 'VAR', 'var123', 'var_', '_var'];

    strs.forEach((str) => {
      actual = varname.test(str);
      expect(actual).toBeTruthy();
    });
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = ['123Var', 'en!', '123+', '!@#', '$%^', '&*(', '[]'];

    strs.forEach((str) => {
      actual = varname.test(str);
      expect(actual).toBeFalsy();
    });
  });
});

describe('测试 regular.cnEnNumSpaceUnderlineLine', () => {
  test('判断字符串是否为 true', () => {
    const str = '中英文en1234567890 - _';

    const actual = cnEnNumSpaceUnderlineLine.test(str);

    expect(actual).toBeTruthy();
  });

  test('合法字符, 返回 true', () => {
    let actual;
    const strs = ['中', 'en', '1', '-', '_', ' '];

    strs.forEach((str) => {
      actual = cnEnNumSpaceUnderlineLine.test(str);
      expect(actual).toBeTruthy();
    });
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = ['en!', '123+', '!@#', '$%^', '&*(', '[]'];

    strs.forEach((str) => {
      actual = cnEnNumSpaceUnderlineLine.test(str);
      expect(actual).toBeFalsy();
    });
  });
});

describe('测试 regular.cnEnNumUnderlineLine', () => {
  test('判断字符串是否为 true', () => {
    const str = '中英文en1234567890-_';

    const actual = cnEnNumUnderlineLine.test(str);

    expect(actual).toBeTruthy();
  });

  test('合法字符, 返回 true', () => {
    let actual;
    const strs = ['中', 'en', '1', '-', '_'];

    strs.forEach((str) => {
      actual = cnEnNumUnderlineLine.test(str);
      expect(actual).toBeTruthy();
    });

    expect(actual).toBeTruthy();
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = ['en!', '123+', '!@#', '$%^', '&*(', '[]'];

    strs.forEach((str) => {
      actual = cnEnNumUnderlineLine.test(str);
      expect(actual).toBeFalsy();
    });
  });
});

describe('测试 regular.cnSpace', () => {
  test('判断字符串是否为 true', () => {
    const str = '中 文';

    const actual = cnSpace.test(str);

    expect(actual).toBeTruthy();
  });

  test('合法字符, 返回 true', () => {
    let actual;
    const strs = ['中', ' '];

    strs.forEach((str) => {
      actual = cnSpace.test(str);
      expect(actual).toBeTruthy();
    });
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = ['en!', '123+', '!@#', '$%^', '&*(', '[]'];

    strs.forEach((str) => {
      actual = cnSpace.test(str);
      expect(actual).toBeFalsy();
    });
  });
});

describe('测试 regular.dateTime', () => {
  test('判断字符串是否为 true', () => {
    const str = '2021-01-01 00:00:00';

    const actual = dateTime.test(str);

    expect(actual).toBeTruthy();
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = [
      '2021-01-0100:00:00',
      '2021-01-01Z00:00:00',
      '2021-01-01-00:00:00',
      'en!',
      '123+',
      '!@#',
      '$%^',
      '&*(',
      '[]',
    ];

    strs.forEach((str) => {
      actual = dateTime.test(str);
      expect(actual).toBeFalsy();
    });
  });
});

describe('测试 regular.date', () => {
  test('判断字符串是否为 true', () => {
    const str = '2021-01-01';

    const actual = date.test(str);

    expect(actual).toBeTruthy();
  });

  test('非法字符，返回 false', () => {
    let actual;
    const strs = ['2021/01/01', '20210101', '2021-01-01 00:00:00', 'en!', '123+', '!@#', '$%^', '&*(', '[]'];

    strs.forEach((str) => {
      actual = date.test(str);
      expect(actual).toBeFalsy();
    });
  });
});
