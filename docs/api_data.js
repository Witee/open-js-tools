define({ "api": [
  {
    "type": "function",
    "url": "string.randomStr()",
    "title": "生成不重复的 id",
    "name": "randomString",
    "group": "string",
    "description": "<p>unix时间戳 + 随机数据</p>",
    "examples": [
      {
        "title": "样例:",
        "content": "\nconst s = string.randomStr();\n\nconsole.log(s) // 1544852620609z611098",
        "type": "ts"
      }
    ],
    "version": "0.0.0",
    "filename": "src/libs/string.ts",
    "groupTitle": "string"
  }
] });
