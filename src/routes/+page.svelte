<script lang="ts">
	import { Input } from '@smui/textfield';
	import Paper from '@smui/paper';
	import Fab from '@smui/fab';
	import { Icon } from '@smui/common';
	import Dialog, { Actions, Content, InitialFocus, Title } from '@smui/dialog';
	import Button, { Label } from '@smui/button';
	import CircularProgress from '@smui/circular-progress';
	import { sha256 } from "js-sha256";
	import { page } from '$app/stores';

	type QAPair = {
		question: string;
		answer: string;
	};

	let open = false;
	let model = 'openai';
	let processing = false;
	let qas: QAPair[] = [];
	qas.push({
		question: 'What is the meaning of life?',
		answer: '42'
	});

	let value = '';

	function doSearch() {
		processing = true;
		qas.push({
			question: value,
			answer: ''
		});
		value = '';
		qas[qas.length - 1].answer = '';

		if (model === 'glm') {
			setTimeout(() => {
				qas[qas.length - 1].answer =
					"Sorry, I don't know. This model might be too dumb for this task.";
				processing = false;
			}, 16000);
			return;
		}
		// GET http://127.0.0.1:8000/v1/nlidb
		// Accept: application/json
		// Content-Type: application/json
		//
		// {
		//   "question": "Who have the most amount of quotes?",
		//   "llm": "openai"
		// }
		const time = new Date().getTime();
		const api_key = $page.data.session.user.name
		fetch('/api/nlidb', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				question: qas[qas.length - 1].question,
				llm: model,
				now: time,
				hash: sha256(api_key + time.toString())
			})
		})
			.then((r) => r.json().then((data) => ({ status: r.status, body: data })))
			.then((data) => {
				if (data.status !== 200) {
					throw new Error(data.body.detail);
				}
				qas[qas.length - 1].answer = data.body.detail;
				processing = false;
			})
			.catch((error) => {
				console.error(error);
				qas[qas.length - 1].answer = "Sorry, I don't know.";
				processing = false;
			});
	}

	function handleKeyDown(event: CustomEvent | KeyboardEvent) {
		event = event as KeyboardEvent;
		if (event.key === 'Enter') {
			doSearch();
		}
	}
</script>

<Dialog aria-describedby="default-focus-content" aria-labelledby="default-focus-title" bind:open>
	<Title id="default-focus-title">模型选择</Title>
	<Content id="default-focus-content">选择你要使用的模型</Content>
	<Actions>
		<Button defaultAction on:click={() => (model = 'openai')} use={[InitialFocus]}>
			<Label>GPT-3.5</Label>
		</Button>
		<Button on:click={() => (model = 'glm')}>
			<Label>GLM</Label>
		</Button>
	</Actions>
</Dialog>

<div class="chat-container">
	<div class="display-container">
		<div>
			{#each qas as { question, answer }}
				<div class="chat-log">
					<Paper class="solo-paper" elevation={6}>
						<Icon class="material-icons">person</Icon>
						<div class="solo-input">{question}</div>
					</Paper>
				</div>
				<div class="chat-log">
					<Paper class="solo-paper" elevation={6}>
						<Icon class="material-icons">smart_toy</Icon>
						{#if answer === ''}
							<CircularProgress style="height: 19px; width: 19px;" indeterminate />
						{:else}
							<div class="solo-input">{answer}</div>
						{/if}
					</Paper>
				</div>
			{/each}
		</div>
	</div>
	<div class="solo-container">
		<Paper class="solo-paper" elevation={6}>
			<Icon class="material-icons">person</Icon>
			<Input
				bind:value
				class="solo-input"
				disabled={processing}
				on:keydown={handleKeyDown}
				placeholder="Ask The Database"
			/>
		</Paper>
		<Fab class="solo-fab" color="primary" mini on:click={() => (open = true)}>
			<Icon class="material-icons">settings</Icon>
		</Fab>
		<Fab
			class="solo-fab"
			color="primary"
			disabled={value === '' || processing}
			mini
			on:click={doSearch}
		>
			<Icon class="material-icons">arrow_forward</Icon>
		</Fab>
	</div>
</div>

<style>
	.chat-container {
		display: flex;
		flex: 1 1 auto;
		min-width: 0;
		min-height: 0;
		flex-direction: column;
		height: 99%;
	}

	.display-container {
		display: flex;
		flex: 1 1 auto;
		flex-direction: column;
		justify-content: flex-start;
		min-width: 0;
		min-height: 0;
		z-index: 0;
		outline: 0;
		overflow: scroll;
		overflow-x: hidden;
	}

	.solo-container {
		padding-top: 24px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.chat-log {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 12px 0;
	}

	* :global(.solo-paper) {
		display: flex;
		align-items: center;
		flex-grow: 1;
		max-width: 600px;
		margin: 0 12px;
		padding: 12px 12px;
	}

	* :global(.solo-paper > *) {
		display: inline-block;
		margin: 0 12px;
	}

	.solo-input {
		flex-grow: 1;
		color: var(--mdc-theme-on-surface, #fff);
		white-space: pre-line;
	}

	.solo-input::placeholder {
		color: var(--mdc-theme-on-surface, #fff);
		opacity: 0.6;
	}

	.solo-fab {
		margin-right: 4px;
		flex-shrink: 0;
	}
</style>
