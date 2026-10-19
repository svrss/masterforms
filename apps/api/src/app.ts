import type { HealthResponse } from "@masterforms/schema";
import { Hono } from "hono";

export const app = new Hono();

app.get("/health", (c) => c.json<HealthResponse>({ status: "ok" }));
