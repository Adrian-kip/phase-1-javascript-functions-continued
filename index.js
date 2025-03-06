// Define saturdayFun function
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  // Define mondayWork function
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  // Define wrapAdjective function
  function wrapAdjective(wrapper = "*") {
    return function(adjective = "special") {
      return `You are ${wrapper}${adjective}${wrapper}!`;
    };
  }
  
  // Example usage
  console.log(saturdayFun()); // This Saturday, I want to roller-skate!
  console.log(saturdayFun("bathe my dog")); // This Saturday, I want to bathe my dog!
  
  console.log(mondayWork()); // This Monday, I will go to the office.
  console.log(mondayWork("work from home")); // This Monday, I will work from home.
  
  const wrapStar = wrapAdjective("*");
  console.log(wrapStar("a hard worker")); // You are *a hard worker*!
  
  const wrapBar = wrapAdjective("||");
  console.log(wrapBar("a dedicated person")); // You are ||a dedicated person||!
  