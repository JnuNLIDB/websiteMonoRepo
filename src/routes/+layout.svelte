<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import List, { Graphic, Item, Separator, Subheader, Text } from '@smui/list';
	import Drawer, { AppContent, Content, Header, Scrim, Subtitle } from '@smui/drawer';
	import { browser } from '$app/environment';
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import Paper from '@smui/paper';
	import Button, { Label } from '@smui/button';

	const allowed_name_list = [
		"Fox_white", "Calsonlyn", "DUuOOO",
		"Wang Tong", "Starscreamy", "superjamesgit"
	]

	let open = false;
	let active = 'Inbox';

	let dark_mode =
		browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	function setActive(value: string) {
		active = value;
		open = false;
	}
</script>

<svelte:head>
	<link href={dark_mode ? '/smui-dark.css' : '/smui.css'} rel="stylesheet" />
</svelte:head>

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
								on:click={() => ($page.data.session ? signOut() : signIn())}
								>person
							</IconButton>
						</Section>
					</Row>
				</TopAppBar>
				{#if $page.data.session}
					{#if allowed_name_list.includes($page.data.session.user.name)}
						<div class="flexor-content">
							<slot />
						</div>
					{:else}
						<div class="login-prompt">
							<Paper color="primary" variant="outlined">
								<Title>{$page.data.session.user.name} you don't have early access permission.</Title
								>
								<Content>Please check back later.</Content>
							</Paper>
						</div>
					{/if}
				{:else}
					<div class="login-prompt">
						<Paper color="primary" variant="outlined">
							<Title>You are not logged in, please log in to continue</Title>
							<Content>
								<Button on:click={() => signIn()}>
									<Label>Login</Label>
								</Button>
							</Content>
						</Paper>
					</div>
				{/if}
			</div>
		</div>
	</main>
</AppContent>

<style>
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
