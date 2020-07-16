<template>
  <div id="home" class="row">
      <div class="col-md-4 offset-md-4">
        <div class="card p-3 home-card" :class="{'home-card--detail': isCardDetail}">
          <div id="portrait">
            <img class="card-img-top img1" src="@/assets/img/portrait.jpg" alt="portrait">
          </div>
          <div class="card-body p-0">
            <div id="card-default" v-show="showDefaultBody">
              <h1 class="card-title mt-3">Badiss Aouragh</h1>
              <h2 class="card-text mb-3">Développeur Web Front-end</h2>
              <div class="contact-items">
                <ul>
                  <li><i class="far fa-envelope"></i></li>
                  <li><i class="fas fa-mobile-alt"></i></li>
                  <li><i class="fab fa-github"></i></li>
                </ul>
              </div>
              <div class="about">
                <button type="button" v-on:click="displayDetail" class="btn btn-outline-dark btn-lg">A propos</button>
              </div>
            </div>
            <div id="card-detail" v-show="showDetailBody">
              <h2>A propos</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, maxime ab magnam quia doloremque facilis similique sed soluta, voluptatem eligendi earum commodi magni eius optio quasi corrupti? Praesentium, adipisci natus.  Inventore, maxime ab magnam quia doloremque facilis similique sed soluta, voluptatem eligendi earum commodi magni eius optio quasi corrupti? Praesentium, adipisci natus.  Inventore, maxime ab magnam quia doloremque facilis similique sed soluta, voluptatem eligendi earum commodi magni eius optio quasi corrupti? Praesentium, adipisci natus.</p>
              <button type="button" v-on:click="displayDefault" class="btn btn-outline-dark btn-lg">Revenir</button>
              <button type="button" class="btn btn-outline-dark btn-lg">Mon CV</button>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Home',
  data: function () {
    return {
      showDetailBody: false,
      showDefaultBody: true,
      isCardDetail: false,
    }
  },
  methods: {
    displayDetail: function () {
      this.showDefaultBody = false
      this.isCardDetail = true
      setTimeout(() => { 
        this.showDetailBody = true; 
      }, 1000);
    },
    displayDefault: function () {
      this.showDetailBody = false
      this.isCardDetail = false
      setTimeout(() => { 
        this.showDefaultBody = true; 
      }, 1000);
    }
  }
}
</script>
