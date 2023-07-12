import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { sha256 } from 'js-sha256';
import prisma from "$lib/prisma";

export const POST: RequestHandler = async ({ request, cookies }: RequestEvent) => {
	const body = await request.json();
	// const session_id = await cookies.get('session_id');

	if (!body) {
		return new Response(JSON.stringify({ error: 'No body' }), { status: 400 });
	}
	if (!body.now || body.now > new Date().getTime() + 1000 * 60) {
		return new Response(JSON.stringify({ error: 'Invalid time' }), { status: 400 });
	}
	// Find User From Session ID
	// const user = await prisma.user.findFirst({
	// 	where: {
	// 		Session: {
	// 			some: {
	// 				id: session_id
	// 			}
	// 		}
	// 	}
	// });
	//
	// if (!user) {
	// 	return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 400 });
	// }


	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	// const local_hash = sha256(user.username + body.now.toString());
	// if (local_hash != body.hash) {
	// 	return new Response(JSON.stringify({ error: 'Invalid hash' }), { status: 400 });
	// }
	try {
		const data = await fetch('http://127.0.0.1:8000/v1/embedding', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		const response = await data.json();
		const status = data.status;
		if (status != 200) {
			return new Response(JSON.stringify(response), { status: status });
		}
		return json(response);
	} catch (e: any) {
		return new Response(JSON.stringify({ error: 'Internal error', detail: e.toString() }), {
			status: 500
		});
	}
};
