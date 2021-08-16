console.log('%j', {OS: 'windows', version: '10.0', lang: ['english', 'chinese']})

const v_json = {
  OS: 'windows',
  version: '10.0',
  lang: ['english', 'chinese']
}

console.log('%j', v_json); // {"OS":"windows","version":"10.0","lang":["english","chinese"]}

console.log('%s', v_json); // [object, Object]

console.log('%o', v_json); // 对象格式