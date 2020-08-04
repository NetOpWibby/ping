


//  I M P O R T

import got from "got";



//  E X P O R T

export default async(url: string) => {
  return new Promise(resolve => {
    got.head(url)
      // TODO: `any` is weak, find the type
      .then((response: any) => {
        resolve({
          exists: /4\d\d/.test(response.statusCode) === false,
          headers: response
        });
      })
      .catch(() => {
        resolve({ exists: false });
      });
  });
};
