<div id="home">
  <div class="logo-container">
    <img alt="D&Z Crane and Rigging Logo" src="/dzcrane_logo.webp" />
  </div>
  <div class="title-container">
    <h1>
      <span class="line1">D&Z Crane</span>
      <span class="line2">and Rigging</span>
    </h1>
  </div>
</div>
<script context="module">
  export const prerender = true
</script>
<style>
  .logo-container {
    width: 60%;
    margin: auto;
    margin-top: 24px;
    margin-bottom: 12px;
  }
  #home img {
    width: 100%;
  }
  .title-container {
    color: white;
    padding: 6px;
    text-align: center;
    font-size: 2em;
    line-height: 1.8em;
  }
  .title-container span {
    display: inline-block;
    width: 100%;
  }
  .title-container .line2 {
    font-size: 0.84em;
  }

  @media screen and (min-width: 768px) {
    #home {
      display: flex;
      align-items: center;
    }
    .logo-container {
      width: 25%;
      display: inline-block;
      padding-left: 36px;
    }
    .title-container {
      display: inline-block;
    }
  }
  
  @media screen and (min-width: 1024px) {
    #home {
      max-width: 1024px;
      margin-left: auto;
      margin-right: auto;
    }
  }
</style>