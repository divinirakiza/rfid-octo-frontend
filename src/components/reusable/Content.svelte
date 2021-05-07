<script lang="ts">
    import FolderIcon from '../icons/FolderIcon.svelte';

</script>

<div class="content-area">
    <div class="title-area">
        <div class="title">
            <h4>  RFID MANAGEMENT &nbsp;
                <FolderIcon width={14} height={14} color={'red'}/>
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

    <div class="content">
        <section id="cards">
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
                    <tr>
                        <td>673488949054948494</td>
                        <td>5000 Frw</td>
                        <td>5</td>
                        <td>true</td>
                        <td>2013-30-2 12:23:32</td>
                        <td>Actions</td>
                    </tr>
                </tbody>
            </table>
        </section>
        <section id="transactions"></section>
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

    .content section table {
        width: 100%;
        border-spacing: 0 1rem;
    }



    .content section table thead tr th {
        padding-bottom: 0.3rem;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 10px;
        border-bottom: 1px solid #E7E7E7;
        color:#8DABC4;
        font-weight: normal;
        text-align: left;
    }


    .content section table tbody {
        margin-top: 2rem;
    }
    .content section table tbody tr{
        background-color: #F4F6FB;

    }

    .content section table tbody tr td {
        padding: 1rem 0;
        text-align: left;
        font-size: 11px;
        color: #395A76;
    }

    .content section table tbody tr td:first-child, .content section table tbody tr td:last-child {
        border-top-left-radius: 6px;
        border-bottom-left-radius: 6px;
        padding-left: 1rem;

    }



</style>