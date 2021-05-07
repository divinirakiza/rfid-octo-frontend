<script lang="ts">
    import { onMount } from 'svelte';

	export let name: string;
	const array: any = [
        1, 2, 3
    ]
    
    const openModal = () => {
        const modal: HTMLElement = document.getElementById('modal-background');
        modal.style.display = 'block';
    }

    const closeModal = () => {
        const modal: HTMLElement = document.getElementById('modal-background');
        modal.style.display = 'none';
        modal.classList.remove('hidden')
    }


    fetch('')
        .then((response) => console.log(response.json()));



    let characterName;

    onMount(async () => {
        const response = await fetch('http://localhost:3000/api/v1/cards');
        const character = await response.json();
        console.log(character)
        characterName = character.name;
    })

    

</script>

<section>
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
                <td>
                    <span on:click={openModal}>view</span>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>

    <div id="modal-background" class="hidden">
        <div id="modal">
          <span id="close-btn" on:click={closeModal}>&times;</span>
          <h3>Card details</h3>
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
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 1.5rem;
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