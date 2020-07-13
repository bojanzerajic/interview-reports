

const getFullDate = (date) => {
    let a = new Date(date);
    let month = a.getMonth() + 1;
    let fullYear = a.getFullYear();
    let day = a.getDate();
    return `${day}-${month}-${fullYear}`;
  }
  export {getFullDate}