import { json } from "@sveltejs/kit";
import { arr } from "../../lib/arr";
import type { RequestEvent } from "./$types";

export  function GET(RequestEvent : RequestEvent) {
    const {rate } = RequestEvent.params
    const cc = arr.find((c) => c.rate === parseInt(rate))
    return json(cc)
}
export async function PATCH(RequestEvent : RequestEvent) {
    const {params , request} = RequestEvent
    const {rate} = params
    const {title} = await request.json()
    const c = arr.find(c => c.rate == parseInt(rate))
    if (c && title) {
        c.title = title;
      }
      console.log(c)
      return json(c);
}
export async function DELETE(RequestEvent : RequestEvent) {
    const {params } = RequestEvent
    const {rate} = params

    const c = arr.find(c => c.rate == parseInt(rate))
    const i = arr.findIndex(c => c.rate === parseInt(rate))
   arr.splice(i , 1)
    return json(c)
}