/*
* Some standard functions to work with
* 1) Filter an object with a 'tags' array with a given filter string
*/

// 1) Filter an object with tags:
export function filterObjectTags(object, filter) {
  let filtArr = [];

  for(let i = 0; i < object.length; i++) {
    if (obj[i].tags.indexOf(filter) > -1) {
      filtArr.push(obj[i])
    }
  }
  return filtArr;
}
