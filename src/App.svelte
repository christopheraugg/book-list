<script>
  import { popupIsOpen, listIsOpen } from "./stores.js";
  import AllBooks from "./AllBooks.svelte";
  import Modal from "./Modal.svelte";
  import MyList from "./MyList.svelte";
  export let booksData;

  function toggleList() {
    listIsOpen.update(n => !n);
  }
</script>

<style>
  #approot {
    filter: none;
    transition: filter 0.9s ease-in-out;
  }

  #approot.popupOpen {
    filter: blur(25px);
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .open-list {
    position: fixed;
    top: 0;
    right: 0;
    background: black;
    padding: 20px;
    font-size: 3rem;
    color: white;
    cursor: pointer;
  }

  .open-list.open {
    display: none;
  }
</style>

<div id="approot" class={$popupIsOpen ? 'popupOpen' : ''}>
  <div class="container">
    <div class="open-list" on:click={toggleList}>
      <i class="fas fa-bars" />
    </div>
    <AllBooks books={booksData} />
  </div>
  <MyList />
</div>
<div id="modalroot">
  <Modal />
</div>
