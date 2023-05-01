import { json, type RequestEvent } from "@sveltejs/kit"
import { arr } from "../lib/arr"


export function GET() {
    return json(arr)
}
export async function POST(RequestEvent : RequestEvent) {
const {request} = RequestEvent
const {text } = await request.json()
const newshit = {
    rate: arr.length + 1,
   title:text
}
arr.push(newshit)
console.log(newshit)
return json(newshit , {
    status:201
})
}