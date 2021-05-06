export default (context, inject) => {
  /**
   * Helper to sort an array of object based on the given property
   * @param {property} - property where the array will sort
   */
  const arraySort = (property) => {
    var sortOrder = 1
    if (property[0] === '-') {
      sortOrder = -1
      property = property.substr(1)
    }
    return function (a, b) {
      /* next line works with strings and numbers,
       * and you may want to customize it to your needs
       */
      var result =
        a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
      return result * sortOrder
    }
  }

  inject('arraySort', arraySort)
}
