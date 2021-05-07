<script lang="ts">
	export let name: string;
	const array: any = [
        1, 2, 3
    ]
</script>

<table>
	<thead>
		<tr>
			<th>Transaction ID</th>
			<th>Card</th>
			<th>Transport Fare</th>
			<th>Done at</th>
		</tr>
	</thead>
	<tbody>
		{#each array as arr, i}
		<tr>
			<td class="bold">673488949054948494</td>
			<td>5000 Frw</td>
			<td>5</td>
			<td>2013-30-2 12:23:32</td>
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