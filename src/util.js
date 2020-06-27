export const getParams = function(param) {
  if (param) {
    let tag = param.split("?")
    tag = tag[1]
    tag = tag.split("=")
    tag = tag[1]
    if (tag.includes(",")) {
      tag = tag.split(",");
      tag = tag[1]
    }
    return tag
  }

  return null
}
