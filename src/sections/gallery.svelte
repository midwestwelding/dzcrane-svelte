<div id="gallery">
  <h2>Gallery</h2>
  <hr>
  <div class="gallery-container">
    <img alt="From inside the cockpit looking low" src="full_stick.webp" />
    <img alt="From inside the cockpit looking low" src="helping_hand.webp" />
    <img alt="From inside the cockpit looking low" src="off_the_ground.webp" />
    <img alt="From inside the cockpit looking low" src="rear.webp" />
    <img alt="From inside the cockpit looking low" src="wide_jib.webp" />
    <img alt="From inside the cockpit looking low" src="with_jib.webp" />
    <img alt="From inside the cockpit looking up" src="cockpit_high.webp" />
    <img alt="From inside the cockpit looking low" src="cockpit_low.webp" />
    <img alt="From inside the cockpit looking low" src="packed.webp" />
  </div>
</div>
<script context="module">
  export const prerender = true
</script>
<style>
#gallery {
  padding: 18px;
  color: white;
}
#gallery h2 {
  text-align: center;
  font-size: 2.4em;
  margin-bottom: 12px;
}
#gallery hr {
  width: 67%;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 18px;
}
.gallery-container img {
  margin-top: 12px;
}

@media screen and (min-width: 768px) {
  #gallery {
    padding: 54px 0 54px 0;
  }
  .gallery-container {
    margin-left: 18px;
    margin-right: 18px;
  }
  .gallery-container img {
    width: calc(50% - 21px);
    margin: 12px 9px;
  }
}
@media screen and (min-width: 1024px) {
  #gallery {
    max-width: 1024px;
    margin-left: auto;
    margin-right: auto;
  }
  .gallery-container img {
    width: calc(33% - 21px);
    margin: 12px 9px;
  }
}

</style>