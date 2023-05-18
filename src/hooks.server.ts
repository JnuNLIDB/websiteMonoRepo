import { SvelteKitAuth } from '@auth/sveltekit';
import GitHub from '@auth/core/providers/github';
import { GITHUB_ID, GITHUB_SECRET } from '$env/static/private';

export const handle = SvelteKitAuth({
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	providers: [GitHub({ clientId: GITHUB_ID, clientSecret: GITHUB_SECRET })]
});
