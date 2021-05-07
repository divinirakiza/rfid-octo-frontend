<script lang="ts">
    import FolderIcon from '../icons/FolderIcon.svelte';
    import CardPage from '../../pages/Card.svelte';
    import TransactionPage from '../../pages/Transaction.svelte';

    const array: any = [
        1, 2, 3
    ];

    const activateTab = (tab: string) => {
        const div: HTMLElement = document.getElementById(tab);
        if (div) {
            const parent: HTMLElement = div.parentElement;

            const siblings = parent.getElementsByClassName('show');

            for (const sibling of siblings) {
                sibling.classList.remove('show')
                sibling.classList.add('hidden')
            }

            div.classList.add('show');
        }


        const tabber: HTMLElement = document.getElementById(tab + '-tab');

        
        const parentTabber: HTMLElement = tabber.parentElement;
        
        const activeTabs = document.getElementsByClassName('tab active');

        for (const activeTab of activeTabs) {
                activeTab.classList.remove('active')
            }

        parentTabber.classList.add('active');

	}



</script>

<div class="content-area">
    <div class="title-area">
        <div class="title">
            <h4>  RFID MANAGEMENT &nbsp;
                <FolderIcon width={14} height={14} />
            </h4>
        </div>
    </div>

    <div class="tabs-area">
        <div class="tab active">
            <a href="#cards" id="cards-tab" on:click={() => activateTab('cards')}>RFID Cards</a>
        </div>
        <div class="tab">
            <a href="#transactions" id="transactions-tab" on:click={() => activateTab('transactions')}>Transactions</a>
        </div>
    </div>

    <div class="content">
        <div id="cards" class="show">
                <CardPage />
        </div>
        <div id="transactions" class="hidden">
                <TransactionPage />
        </div>
    </div>


</div>

<style>



    .title-area {
        margin-bottom: 1.5rem;
    }

    .tabs-area {
        border-bottom: 1px solid #E7E7E7;
        display: flex;
    }

    .tabs-area .tab {
        padding: 0.5rem 0;
        margin-right: 4rem;
    }

    .tabs-area .tab.active:before {
        width: 6rem;
        position: absolute;
        bottom: -4px;
        content: '';
        height: 0.2rem;
        background-color: #3648A5;
    }

    .tabs-area .tab a {
        color: #2C405A;
        font-size: 14px;
    }

    .content {
        margin-top: 1.8rem;
    }

    .content div.hidden {
        display: none !important;
    }

    
    .content div.show {
        display: initial !important;
    }


    #cards {
        height: 48vh !important;
        overflow-y: scroll;
        padding: 0 0.5rem;
        z-index: 0;
    }

    #cards::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f8f8f8;
    }
        
    #cards::-webkit-scrollbar{
        width: 4px;
        height: 6px;
        background-color: #f8f8f8;
    }

    #cards::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #3648A5;
    }


    

    #transactions {
        height: 48vh !important;
        overflow-y: scroll;
        padding: 0 0.5rem;
        z-index: 0;
    }

    #transactions::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: #f8f8f8;
    }
        
    #transactions::-webkit-scrollbar{
        width: 4px;
        height: 6px;
        background-color: #f8f8f8;
    }

    #transactions::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #3648A5;
    }



</style>