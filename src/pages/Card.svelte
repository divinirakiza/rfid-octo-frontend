<script lang="ts">
    import { onMount } from 'svelte';
	import {formatDate} from '../utils/common';




    $: cards = [];


    onMount(async () => {

    });
	

	async function getCards() {
		const response = await fetch('http://localhost:3000/api/v1/cards');
		const items = await response.json();

		for (const item of items) {
			const res = await fetch(`http://localhost:3000/api/v1/cards/${item.id}/transactions`);
			item.transactions = (await res.json()).length;
		}

		cards = items;
    }

    onMount(async () => {
        setInterval(() => getCards(), 100)
    });





</script>

<table>
	<thead>
		<tr>
			<th>UUID</th>
			<th>Balance</th>
			<th>Transactions</th>
			<th>Enabled</th>
			<th>Created At</th>
			<th>Actions</th>
		</tr>
	</thead>
	<tbody>
		{#each cards as card, i}
		<tr>
			<td class="bold">{card.uuid}</td>
			<td>{card.balance}Frw</td>
			<td>{card.transactions}</td>
			<td class="status">
				<span class={card.enabled}>
					<span>{card.enabled}</span>
				 </span>   
			</td>
			<td>{formatDate(card.created_at)}</td>
			<td>
				<span class="more">
					<svg id="Layer_1" stroke="#395a7629" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="14" height="14" fill="" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M25,14.39C11.32,14.39,1,19,1,25S11.32,35.61,25,35.61,49,31.05,49,25,38.68,14.39,25,14.39Zm0,18.22c-12.38,0-21-4-21-7.61s8.62-7.61,21-7.61,21,4,21,7.61S37.38,32.61,25,32.61Z" fill="#000000"></path><path d="M25,19.45A5.55,5.55,0,1,0,30.55,25,5.56,5.56,0,0,0,25,19.45Zm0,7.1A1.55,1.55,0,1,1,26.55,25,1.54,1.54,0,0,1,25,26.55Z" fill="#000000"></path></svg>
				</span>
			</td>
		</tr>
		{/each}
	</tbody>
</table>

<style>

	table {
        width: 100%;
        border-spacing: 0 1rem;
    }

    table thead tr th {
        padding-bottom: 0.3rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 10px;
        border-bottom: 1px solid #E7E7E7;
        color:#8DABC4;
        font-weight: normal;
        text-align: left;
    }

    table tbody {
        margin-top: 2rem;
    }
    table tbody tr{
        background-color: #F4F6FB;

    }

    table tbody tr td {
        padding: 0.7rem 0;
        text-align: left;
        font-size: 11px;
        color: #395A76;
    }

    table tbody tr td:first-child{
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding-left: 1rem;

    }
    table tbody tr td:last-child  {
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
        padding-left: 1rem;
    }

    table tbody tr td.bold {
        font-weight: bold;
        cursor: pointer;
    }
    table tbody tr td.bold:hover {
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }

    
    table tbody tr td.status > span {
        border-radius: 9999px;
        padding: 0.2rem 1.8em;
        color: white;
		text-transform: uppercase;
        background-color: rgba(63, 218, 92, 0.77);
        font-size: 9px;
        cursor: pointer
    }
    table tbody tr td.status > span.true {
        background-color: rgba(63, 218, 92, 0.77);
    }

    table tbody tr td.status > span.true:hover {
        background-color: rgba(48, 163, 69, 0.77);
    }

    table tbody tr td.status > span.false {
        background-color: rgba(233, 30, 30, 0.8);
    }

    table tbody tr td.status > span.false:hover {
        background-color: rgba(185, 33, 33, 0.8);
    }

    table tbody tr td.bold:hover {
        font-weight: bold;
        cursor: pointer;
        text-decoration: underline;
    }

    table tbody tr td .more {
        cursor: pointer;
    }
</style>