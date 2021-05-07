<script lang="ts">

    const openModal = () => {
        const modal: HTMLElement = document.getElementById('modal-background');
        modal.style.display = 'block';
    }

    const closeModal = () => {
        const modal: HTMLElement = document.getElementById('modal-background');
        modal.style.display = 'none';
        modal.classList.remove('hidden')
    }

    import { onMount } from 'svelte';
	import {formatDate} from '../utils/common';




    $: transactions = [];


    onMount(async () => {
        const response = await fetch('http://localhost:3000/api/v1/transactions');
        transactions = await response.json();
    });


</script>

<section>
    <table>
        <thead>
            <tr>
                <th>Transaction ID</th>
                <th>Card</th>
                <th>Transport Fare</th>
                <th>Done at</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each transactions as transaction, i}
            <tr>
                <td class="bold"># {transaction.id}</td>
                <td>{transaction.card.uuid}</td>
                <td>{transaction.fare} Frw</td>
                <td>{formatDate(transaction.created_at)}</td>
                <td>
                    <span class="more" on:click={openModal}>
                        <svg id="Layer_1" stroke="#395a7629" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="14" height="14" fill="" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M25,14.39C11.32,14.39,1,19,1,25S11.32,35.61,25,35.61,49,31.05,49,25,38.68,14.39,25,14.39Zm0,18.22c-12.38,0-21-4-21-7.61s8.62-7.61,21-7.61,21,4,21,7.61S37.38,32.61,25,32.61Z" fill="#000000"></path><path d="M25,19.45A5.55,5.55,0,1,0,30.55,25,5.56,5.56,0,0,0,25,19.45Zm0,7.1A1.55,1.55,0,1,1,26.55,25,1.54,1.54,0,0,1,25,26.55Z" fill="#000000"></path></svg>
                    </span>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>

    <div id="modal-background" class="hidden">
        <div id="modal">
            <div class="header">
                    <span id="close-btn" on:click={closeModal}>&times;</span>
                    <h3>Card details</h3>
            </div>
          <div class="details">
              <div class="detail">
                  <p class="key">id: </p>
                  <p class="value">3843894389894</p>
              </div>

              <div class="detail">
                <p class="key">uuid: </p>
                <p class="value">3843894389894</p>
            </div>

            <div class="detail">
                <p class="key">balance: </p>
                <p class="value">3843894389894</p>
            </div>

            <div class="detail">
                <p class="key">created at: </p>
                <p class="value">3843894389894</p>
            </div>

          </div>
        </div>
      </div>

</section>



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

    .hidden {
        display: none;
    }

    #modal-background {
        background-color: rgba(0, 0, 0, 0.2);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
    }

    #modal {
        background-color: #fff;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40rem;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1.5rem;
    }

    #modal .header {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #modal h3 {
        font-size: 13px;
        text-transform: uppercase;
        color: #395A76;
        text-decoration: underline
        
    }

    #close-btn {
    align-self: flex-end;
    }

    #close-btn:hover {
    cursor: pointer;
    color: #395A76;
    }

</style>