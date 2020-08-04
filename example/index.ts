


//  I M P O R T

import ping from "../dist";



//  P R O G R A M

const runExample = async() => {
  // Test this by changing the domain url
  const theLink: any = await ping("https://example.com");

  if (theLink.exists)
    console.log("Yep, this link exists.");
  else
    console.log("Nope, this link does not exist.");
};

runExample();
