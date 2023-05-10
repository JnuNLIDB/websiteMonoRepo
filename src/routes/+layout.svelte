<script lang="ts">
	import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
	import IconButton from '@smui/icon-button';
	import List, { Graphic, Item, Separator, Subheader, Text } from '@smui/list';
	import { AppContent, Content, Header, Scrim, Subtitle } from '@smui/drawer';
	import Drawer from '@smui/drawer';
	import { browser } from '$app/environment';
	import { page } from '$app/stores';

	let open = false;
	let active = 'Inbox';

	let dark_mode =
		browser && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

	console.log($page.url.pathname)

	function setActive(value: string) {
		active = value;
		open = false;
	}
</script>

<svelte:head>
	<link rel="stylesheet" href={dark_mode ? '/smui-dark.css' : '/smui.css'} />
</svelte:head>

<Drawer variant="modal" fixed={false} bind:open>
	<Header>
		<div class="drawer-container">
			<Title>Super Mail</Title>
		</div>
		<Subtitle>It's the best fake mail app drawer.</Subtitle>
	</Header>
	<Content>
		<List>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Inbox')}
				activated={active === 'Inbox'}
			>
				<Graphic class="material-icons" aria-hidden="true">inbox</Graphic>
				<Text>Inbox</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Star')}
				activated={active === 'Star'}
			>
				<Graphic class="material-icons" aria-hidden="true">star</Graphic>
				<Text>Star</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Sent Mail')}
				activated={active === 'Sent Mail'}
			>
				<Graphic class="material-icons" aria-hidden="true">send</Graphic>
				<Text>Sent Mail</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Drafts')}
				activated={active === 'Drafts'}
			>
				<Graphic class="material-icons" aria-hidden="true">drafts</Graphic>
				<Text>Drafts</Text>
			</Item>

			<Separator />
			<Subheader tag="h6">Labels</Subheader>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Family')}
				activated={active === 'Family'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Family</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Friends')}
				activated={active === 'Friends'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
				<Text>Friends</Text>
			</Item>
			<Item
				href="javascript:void(0)"
				on:click={() => setActive('Work')}
				activated={active === 'Work'}
			>
				<Graphic class="material-icons" aria-hidden="true">bookmark</Graphic>
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
				<TopAppBar variant="static" dense color="primary">
					<Row>
						<Section>
							<IconButton class="material-icons" on:click={() => (open = !open)}>menu</IconButton>
							<Title>Flex Static</Title>
						</Section>
						<Section align="end" toolbar>
							<IconButton
								class="material-icons"
								aria-label="Toggle Light And Dark Mode"
								on:click={() => (dark_mode = !dark_mode)}
								>{dark_mode ? 'dark' : 'light'}_mode</IconButton
							>
							<IconButton class="material-icons" aria-label="Account">person</IconButton>
						</Section>
					</Row>
				</TopAppBar>
				<div class="flexor-content">
					<slot />
				</div>
			</div>
		</div>
	</main>
</AppContent>

<style>
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
