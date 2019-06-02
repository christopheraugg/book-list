<script>
  import {
    popupIsOpen,
    openingInfoBook,
    myList,
    listIsOpen
  } from "./stores.js";

  let popupOpen;
  let currentBook;

  const popup_unsubscribe = popupIsOpen.subscribe(value => {
    popupOpen = value;
  });
  const book_unsubscribe = openingInfoBook.subscribe(value => {
    currentBook = value;
  });

  function closeModal() {
    popupIsOpen.update(n => !n);
  }

  function addBook() {
    myList.update(n => [...n, currentBook.title]);
  }
</script>

<style>
  #modal {
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.75);
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s ease-in-out;
  }

  #modal.active {
    visibility: visible;
    background: rgba(0, 0, 0, 0.75);
    opacity: 1;
  }

  #modal .modal-container {
    max-width: 600px;
    background: white;
    padding: 20px;
    position: relative;
  }

  #modal .modal-container .close-modal {
    position: absolute;
    top: 0;
    right: 0;
    padding: 20px;
    color: white;
    background: red;
    cursor: pointer;
  }

  #modal .modal-container .add-btn {
    color: white;
    background: purple;
    cursor: pointer;
    padding: 20px 40px;
    display: inline-block;
  }

  #modal .modal-grid {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-gap: 20px;
  }

  #modal .modal-grid .images {
    width: 200px;
  }

  #modal .modal-grid .images .cover {
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }

  #modal .modal-grid .info h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1.2rem;
  }

  #modal .modal-grid .info .info-line {
    font-size: 1.1rem;
    font-weight: 400;
    margin-bottom: 0.4rem;
  }

  #modal .modal-grid .info .info-line span {
    font-size: 1.1rem;
    font-weight: 900;
  }

  #modal .modal-grid .info p {
    font-size: 1.1rem;
    font-weight: 400;
    line-height: 1.4;
    margin-bottom: 1.5rem;
  }
</style>

<section id="modal" class={popupOpen ? 'active' : ''}>
  <div class="modal-container">
    <div class="close-modal" on:click={closeModal}>
      <!-- closing info book here-->
      <i class="fa fa-times" aria-hidden="true" />
    </div>
    <div class="modal-grid">
      <div class="images">
        <div
          class="cover"
          style="background-image: url('{currentBook.coverURL == undefined ? '' : currentBook.coverURL}')" />
      </div>
      <div class="info">
        <h2>{currentBook.title}</h2>
        <div class="info-line">
          <span class="bold">Author:</span>
           {currentBook.author}
        </div>
        <div class="info-line">
          <span class="bold">Category:</span>
           {currentBook.category}
        </div>
        <div class="info-line">
          <span class="bold">Published:</span>
           {currentBook.published}
        </div>
        <p class="review"> {currentBook.review} </p>
        <div class="add-btn" on:click={addBook}>Add To My List</div>
      </div>
    </div>
  </div>
</section>
