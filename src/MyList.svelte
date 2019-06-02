<script>
  import { myList, listIsOpen } from "./stores.js";

  function toggleList() {
    listIsOpen.update(n => !n);
  }

  function removingBook(title) {
    myList.update(n => n.filter(item => item != title));
  }
</script>

<style>
  #myList {
    background: white;
    position: fixed;
    top: 0;
    right: 0;
    width: 400px;
    height: 100vh;
    padding: 20px;
    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    -moz-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
    transform: translate3d(460px, 0, 0);
    transition: transform 0.4s ease-in-out;
  }

  #myList.active {
    -webkit-box-shadow: -12px 10px 71px -11px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -12px 10px 71px -11px rgba(0, 0, 0, 0.75);
    box-shadow: -12px 10px 71px -11px rgba(0, 0, 0, 0.75);
    transform: translate3d(0, 0, 0);
  }

  #myList h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 1.5rem;
  }

  #myList ul {
    margin: 0 0 1.5rem 20px;
  }

  #myList ul li {
    display: list-item;
    padding: 10px 0;
    list-style-type: circle !important;
  }

  #myList ul li span.delete-btn {
    display: inline-block;
    padding: 10px;
    background: red;
    color: white;
    border-radius: 5px;
    margin-left: 20px;
    cursor: pointer;
  }

  #myList .close-list {
    display: block;
    margin: 0 auto;
    background: black;
    color: white;
    padding: 20px 40px;
    text-align: center;
    cursor: pointer;
  }
</style>

<section id="myList" class={$listIsOpen ? 'active' : ''}>
  <h3>My List of Books</h3>
  <ul>
    {#each $myList as title}
      <div class="book-container">
        <li>
           {title}
          <span class="delete-btn" on:click={removingBook.bind(null, title)}>
            Delete
          </span>
        </li>
      </div>
    {/each}
  </ul>
  <div class="close-list" on:click={toggleList}>Close List</div>
</section>
