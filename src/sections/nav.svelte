<nav>
  <input type="checkbox" id="nav-box" name="nav-box">
  <label for="nav-box">
    <svg viewBox="0 0 100 80" width="40" height="40">
      <rect width="100" height="16" fill="white"></rect>
      <rect y="30" width="100" height="16" fill="white"></rect>
      <rect y="60" width="100" height="16" fill="white"></rect>
    </svg>
  </label>
  <div class="links-box">
    <a href="#home">Home</a>
    <a href="#service">Service</a>
    <a href="#gallery">Gallery</a>
    <a href="#contact">Contact</a>
  </div>
</nav>
<script context="module">
  export const prerender = true
</script>
<style>
  nav {
    position: fixed;
    bottom: 0px;
    background-color: #181617;
    color: white;
    height: 58px;
    width: 100%;
    display: flex;
    align-items: center;
    z-index: 50;
  }
  input {
    display: none;
  }
  label {
    padding: 8px;
  }
  nav .links-box {
    z-index: 40;
    height: 0px;
    bottom: 0px;
    background-color:  #181617;
    margin-left: 5%;
    width: 90%;
    position: fixed;
    padding: 0;
    transition: height .268s, padding .4s, transform .4s;
    transition-timing-function: ease-out;
    box-shadow: 0 -2px 6px grey;
  }
  #nav-box:checked ~ .links-box {
    height: 204px;
    padding: 12px;
    bottom: 58px;
  }
  nav a {
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    padding: 12px;
    display: inline-block;
    width: 100%;
  }

  @media screen and (min-width: 768px) {
    nav {
      position: sticky;
      top: 0;
      bottom: auto;
    }
    nav .links-box {
      background-color: transparent;
      box-shadow: none;
      height: auto;
      bottom: auto;
      position: relative;
      text-align: right;
    }
    nav a {
      width: auto;
      font-size: 1.2em;
    }
    label {
      display: none;
    }
  }
</style>