<template>
  <div class="card col-10 m-3 p-2">
    <section class="row set-height">
      <div class="col-8">
        <section class="row">
          <div class="col-8 d-flex">
            <img :src="blog.creator.picture" class="img-fluid rounded-circle profile-pic" />
            <h5 class="m-2">{{ blog.creator.name }}</h5>
          </div>
        </section>
        <section class="row">
          <div class="col-12 p-3">
            <h6>{{ blog.title }}</h6>
            <p class="cut-text">{{ blog.body }}</p>
          </div>
        </section>
      </div>
      <div class="col-4">
        <img :src="blog.imgUrl" class="img-fluid rounded blog-cover-image" />
      </div>

    </section>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from '../models/Blog.js';
export default {
  props: {
    blog: { type: Blog, required: true }
  },
  setup() {
    return {}
  }
};
</script>


<style lang="scss" scoped>
.profile-pic {
  height: 40px;
  width: 40px;
  object-fit: cover;
}

.blog-cover-image {
  height: 250px;
  width: 100%;
  object-fit: cover;
}

.cut-text {
  white-space: wrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 150px;
}
</style>