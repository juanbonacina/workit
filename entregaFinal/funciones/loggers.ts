// deno-lint-ignore-file
import type { Context } from "../deps.ts";

export const logger = async (ctx: Context, next: ()=> void) =>{
    await next();
    const body = await ctx.request.body().value;
    const params = body ? `with paramas ${JSON.stringify(body)}` : "";   
}