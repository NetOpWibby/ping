


//  N A T I V E

import assert from "assert";

//  I M P O R T

import Test from "@webb/test";

//  U T I L

import ping from "../dist";



//  T E S T S

const test = Test("@webb/ping");

test("probing a live site should result in success", async() => {
  // TODO: `any` is weak, find the type
  const currentTest: any = await ping("https://example.com");
  assert.strictEqual(currentTest.exists, true);
});

test("probing a non-existent site should result in failure", async() => {
  // TODO: `any` is weak, find the type
  const currentTest: any = await ping("https://woohoo.example.com");
  assert.strictEqual(currentTest.exists, false);
});



test.run();
