import { expect, test } from "vitest";
import { HealthResponse } from "./index";

test("HealthResponse accepts ok and rejects anything else", () => {
  expect(HealthResponse.parse({ status: "ok" })).toEqual({ status: "ok" });
  expect(HealthResponse.safeParse({ status: "down" }).success).toBe(false);
});
