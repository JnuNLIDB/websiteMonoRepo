import prisma from '$lib/prisma';
import type { LayoutServerLoad } from './$types';

export const load = (async ({ cookies}) => {
	const session_id = cookies.get('session_id');
	if (!session_id) {
		return {
			user: null,
		};
	}
	const session = await prisma.session.findFirst({
		where: {
			id: session_id,
			expiresAt: {
				gte: new Date()
			}
		}
	});
	if (!session) {
		return {
			user: null,
		};
	}

	const user = await prisma.user.findFirst({
		where: {
			id: session.userID
		}
	});

	if (!user) {
		return {
			user: null,
		};
	}
	return {
		user: user,
	}
}) satisfies LayoutServerLoad;
