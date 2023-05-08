export default function orderByProps(obje, array) {
  const result = [];
  const copyObj = { ...obje };

  array.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
    delete copyObj[elem];
  });

  const temp = [];
  for (const key of Object.keys(copyObj)) {
    temp.push({ key, value: copyObj[key] });
  }

  temp.sort((a, b) => {
    if (a.key > b.key) return 1;
    return 0;
  });

  const arrKeys = Object.keys(copyObj).sort();
  arrKeys.forEach((elem) => {
    result.push({ key: elem, value: copyObj[elem] });
  });

  return result;
}
