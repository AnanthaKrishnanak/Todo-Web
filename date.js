
module.exports = getDate;

function getDate(){
    let options = {
        weekday: "long",
        day: "numeric",
        month: "long",
      };
      
      let date = new Date();
      
      return date.toLocaleDateString("en-US", options);
    
}