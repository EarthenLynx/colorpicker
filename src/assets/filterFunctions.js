/*
 * Some standard filter functions to work with
 * 1) Filter an object with a 'tags' array with a given filter string
 */

// 1) Filter an object with tags:
export function filterObjectTags(object, filter) {
  let filtArr = [];

  for (let i = 0; i < object.length; i++) {
    for (let j = 0; j < object[i].tags.length; j++) {
      if (object[i].tags[j].indexOf(filter) > -1 || object[i].name.indexOf(filter) > -1) {
        filtArr.push(object[i])
      }
    }
  }
  return filtArr.filter(function(elem, index, self) {
    return index === self.indexOf(elem);
  });
}
