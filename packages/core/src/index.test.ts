import fc from "fast-check";
import { expect, test } from "vitest";
import { clamp } from "./index";

test("clamp always lands in [min, max]", () => {
  fc.assert(
    fc.property(
      fc.double({ noNaN: true }),
      fc.double({ noNaN: true }),
      fc.double({ noNaN: true }),
      (n, a, b) => {
        const [min, max] = a <= b ? [a, b] : [b, a];
        const result = clamp(n, min, max);
        expect(result).toBeGreaterThanOrEqual(min);
        expect(result).toBeLessThanOrEqual(max);
      },
    ),
  );
});
