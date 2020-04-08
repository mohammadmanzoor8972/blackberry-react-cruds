/**
 * sortBy for sorting data
 *
 * @param  {array} b Data point
 * @param  {key} b Data point
 * @return {array}   sorted data
 * @public
 */
const sortBy = (array, key) =>{
    let sortData = array.sort( (a,b) => {
      const dataA = a[key.toLowerCase()].toLowerCase();
      const dataB = b[key.toLowerCase()].toLowerCase();
      
      let comparison = 0;
      if (dataA > dataB) {
        comparison = 1;
      } else if (dataA < dataB) {
        comparison = -1;
      }
      return comparison;
    });

    return sortData;
}

export default sortBy;
