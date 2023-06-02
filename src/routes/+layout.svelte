<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import List, { Graphic, Item, Separator, Subheader, Text } from '@smui/list';
	import Drawer, { AppContent, Content, Header, Scrim, Subtitle } from '@smui/drawer';
	import { browser } from '$app/environment';
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';
	import type { LayoutData } from './$types'
	import { startAuthentication, startRegistration } from "@simplewebauthn/browser";
	import Snackbar, {
		Label as SnackbarLabel,
		Actions
	} from '@smui/snackbar';
	import LinearProgress from '@smui/linear-progress';
	import Textfield from "@smui/textfield";

	let snackbarError: Snackbar;

	export let data: LayoutData;

	console.log('layout data', data);


	const allowed_name_list = [
		"Fox_white", "Calsonlyn", "DUuOOO",
		"Wang Tong", "Starscreamy", "superjamesgit"
	]

	let open = false;
	let active = 'Inbox';
	let error = ''
	let closed = true;
	let username = '';

	let dark_mode =
		browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	function setActive(value: string) {
		active = value;
		open = false;
	}

	function logError(e: string) {
		error = e;
		snackbarError.open();
		closed = true;
	}

	async function login() {
		closed = false;
		let response;
		try {
			const resp = await fetch('/api/auth/' + username + '/generate-auth-options');
			// Throw if status is not 200 OK
			response = await resp.json();
			if (resp.status !== 200) {
				throw new Error(response.error)
			};
		} catch (error) {
			logError(error)
			closed = true;
			return;
		}

		let attResp;
		try {
			// Pass the options to the authenticator and wait for a response
			attResp = await startAuthentication(response);
		} catch (error) {
			// Some basic error handling
			logError(error)
			closed = true;
			return;
		}

		const verificationResp = await fetch('/api/auth/' + username + '/verify-authentication', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(attResp),
		});

		const verificationJSON = await verificationResp.json();

		if (verificationJSON && verificationJSON.verified) {
			// Refresh the page to sign in
			window.location.reload();
		} else {
			logError(verificationJSON.error)
		}
	}

	async function register() {
		closed = false;
		let response;
		try {
			const resp = await fetch('/api/auth/' + username + '/generate-registration-options');
			// Throw if status is not 200 OK
			response = await resp.json();
			if (resp.status !== 200) {
				throw new Error(response.error)
			};
		} catch (error) {
			logError(error)
			closed = true;
			return;
		}

		let attResp;
		try {
			// Pass the options to the authenticator and wait for a response
			attResp = await startRegistration(response);
		} catch (error) {
			// Some basic error handling
			logError(error)
			closed = true;
			return;
		}

		const verificationResp = await fetch('/api/auth/' + username + '/verify-registration', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(attResp),
		});

		const verificationJSON = await verificationResp.json();

		if (verificationJSON && verificationJSON.verified) {
			// Refresh the page to sign in
			window.location.reload();
		} else {
			logError(verificationJSON.error)
		}
	}

	function signOut() {
		fetch('/api/auth/logout').then(() => {
			window.location.reload();
		});
	}
</script>

<svelte:head>
	<link href={dark_mode ? '/smui-dark.css' : '/smui.css'} rel="stylesheet" />
</svelte:head>

<Snackbar bind:this={snackbarError} class="demo-error">
	<SnackbarLabel>{error}</SnackbarLabel>
	<Actions>
		<IconButton class="material-icons" title="Dismiss">close</IconButton>
	</Actions>
</Snackbar>
<Drawer bind:open fixed={false} variant="modal">
	<Header>
		<div class="drawer-container">
			<Title>Lorem Ipsum</Title>
		</div>
		<Subtitle>It's the best placeholder drawer.</Subtitle>
	</Header>
	<Content>
		<List>
			<Item
				activated={active === 'Inbox'}
				href="javascript:void(0)"
				on:click={() => setActive('Inbox')}
			>
				<Graphic aria-hidden="true" class="material-icons">inbox</Graphic>
				<Text>Inbox</Text>
			</Item>
			<Item
				activated={active === 'Star'}
				href="javascript:void(0)"
				on:click={() => setActive('Star')}
			>
				<Graphic aria-hidden="true" class="material-icons">star</Graphic>
				<Text>Star</Text>
			</Item>
			<Item
				activated={active === 'Sent Mail'}
				href="javascript:void(0)"
				on:click={() => setActive('Sent Mail')}
			>
				<Graphic aria-hidden="true" class="material-icons">send</Graphic>
				<Text>Sent Mail</Text>
			</Item>
			<Item
				activated={active === 'Drafts'}
				href="javascript:void(0)"
				on:click={() => setActive('Drafts')}
			>
				<Graphic aria-hidden="true" class="material-icons">drafts</Graphic>
				<Text>Drafts</Text>
			</Item>

			<Separator />
			<Subheader tag="h6">Labels</Subheader>
			<Item
				activated={active === 'Family'}
				href="javascript:void(0)"
				on:click={() => setActive('Family')}
			>
				<Graphic aria-hidden="true" class="material-icons">bookmark</Graphic>
				<Text>Family</Text>
			</Item>
			<Item
				activated={active === 'Friends'}
				href="javascript:void(0)"
				on:click={() => setActive('Friends')}
			>
				<Graphic aria-hidden="true" class="material-icons">bookmark</Graphic>
				<Text>Friends</Text>
			</Item>
			<Item
				activated={active === 'Work'}
				href="javascript:void(0)"
				on:click={() => setActive('Work')}
			>
				<Graphic aria-hidden="true" class="material-icons">bookmark</Graphic>
				<Text>Work</Text>
			</Item>
		</List>
	</Content>
</Drawer>
<Scrim fixed={false} />
<AppContent class="app-content">
	<main class="main-content">
		<div class="flexy">
			<div class="top-app-bar-container flexor">
				<TopAppBar color="primary" dense variant="static">
					<Row>
						<Section>
							<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
							<Title>MingYu</Title>
						</Section>
						<Section align="end" toolbar>
							<IconButton
								aria-label="Toggle Light And Dark Mode"
								class="material-icons"
								on:click={() => (dark_mode = !dark_mode)}
								>{dark_mode ? 'dark' : 'light'}_mode
							</IconButton>
							<IconButton
								aria-label="Account"
								class="material-icons"
								on:click={() => (data.user ? signOut() : register())}
								>person
							</IconButton>
						</Section>
					</Row>
				</TopAppBar>
				<LinearProgress clasee="main-bar" indeterminate {closed}/>
				{#if data.user}
					{#if allowed_name_list.includes(data.user.username)}
						<div class="flexor-content">
							<slot />
						</div>
					{:else}
						<div class="login-prompt">
							<Paper color="primary" variant="outlined">
								<Title>No early access permission.</Title>
								<Content>{data.user.username} Please check back later.</Content>
							</Paper>
						</div>
					{/if}
				{:else}
					<div class="login-prompt">
						<Paper color="primary" variant="outlined">
							<Title>Login/Register to continue</Title>
							<Content>
								<div>
									<Textfield bind:value={username} label="Username">
									</Textfield>
								</div>
								<Button on:click={() => login()}>
									<Label>Login</Label>
								</Button>
								<Button on:click={() => register()}>
									<Label>Register</Label>
								</Button>
							</Content>
						</Paper>
					</div>
				{/if}
			</div>
		</div>
	</main>
	<Paper color="primary" square variant="unelevated">
		<Content>
			<div class="link">
				<a class="link" href="https://beian.miit.gov.cn/">粤ICP备 2023058875号</a>
			</div>
		</Content>
	</Paper>
</AppContent>

<style>
	.link {
		text-decoration: none;
		color: var(--mdc-theme-on-surface);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.login-prompt {
		margin: 16px;
	}

	.drawer-container {
		margin-top: 12px;
	}

	.top-app-bar-container {
		width: 100%;

		overflow: auto;
		display: inline-block;
	}

	@media (max-width: 480px) {
		.top-app-bar-container {
			margin-right: 0;
		}
	}

	.flexy {
		display: flex;
		flex-wrap: wrap;
		height: 100vh;
	}

	.flexor {
		display: inline-flex;
		flex-direction: column;
	}

	.flexor-content {
		flex-basis: 0;
		height: 0;
		flex-grow: 1;
		overflow: auto;
	}
</style>
