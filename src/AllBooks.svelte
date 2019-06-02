<script>
  import { popupIsOpen, openingInfoBook } from "./stores.js";

  export let books;

  function togglePopup(book) {
    popupIsOpen.update(n => !n);
    openingInfoBook.update(n => book);
  }
</script>

<style>
  .all-books {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px 40px;
    padding: 10px 0;
  }

  .book-container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .book-container .book {
    background: red;
    width: 250px;
    height: 300px;
    cursor: pointer;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>

<section class="all-books">
  {#each books as book}
    <div class="book-container">
      <div
        on:click={togglePopup.bind(null, book)}
        class="book"
        style="background-image: url('{book.coverURL}')" />

    </div>
  {/each}
</section>
