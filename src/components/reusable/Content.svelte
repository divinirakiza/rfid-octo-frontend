<script>
    import FolderIcon from '../icons/FolderIcon.svelte';


</script>

<div class="content-area">
    <div class="title-area">
        <div class="title">
            <h4>
                RFID MANAGEMENT
                
                
            </h4>
        </div>
    </div>

    <div class="tabs-area">
        <div class="tab active">
            <a href="#cards">RFID Cards</a>
        </div>
        <div class="tab">
            <a href="#transactions">Transactions</a>
        </div>
    </div>


</div>

<style>

    .title-area {
        margin-bottom: 1rem;
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

</style>