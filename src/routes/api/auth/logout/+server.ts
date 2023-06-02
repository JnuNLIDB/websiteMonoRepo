import type { RequestEvent, RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import prisma from "$lib/prisma";

export const GET: RequestHandler = async ({ cookies }: RequestEvent) => {
  const session_id = cookies.get('session_id');
  if (!session_id) {
    return new Response(JSON.stringify({ error: 'Invalid session' }), { status: 400 });
  }

  // Remove Session
  await prisma.session.delete({
    where: {
      id: session_id
    }
  });

  cookies.delete('session_id', {
    path: '/',
    httpOnly: true,
    sameSite: 'strict',
  })

  return json({ success: true });
}