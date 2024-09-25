import { Redis } from "@upstash/redis";

export const db = new Redis({
    url: process.env.UPSTASH_REDISH_REST_URL,
    token: process.env.UPSTASH_REDISH_REST_TOKEN,
});



