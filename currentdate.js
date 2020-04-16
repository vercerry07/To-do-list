let today = new Date();
      
let option = {
      weekday:"long",
      day:"numeric",
      month:"long"
}

let day = today.toLocaleDateString('en-US',option);


module.exports = day;