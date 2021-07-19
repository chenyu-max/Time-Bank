function test(cityList) {
  return cityList.map((item) => {
    const temp = item;
    if (typeof (temp) !== 'string') {
      temp.label = temp.name;
      temp.value = temp.name;
    } else {
      const str = item;
      return {
        value: str,
        label: str,
      };
    }
    if (item.area) {
      temp.children = test(temp.area);
    }
    if (temp.city) {
      temp.children = test(temp.city);
    }
    return temp;
  });
}

export default function (cityList) {
  return test(cityList);
}
