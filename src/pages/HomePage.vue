<template>
  <div class="container-fluid">
    <section class="row">
      <div class="col-12">
        <section class="row justify-content-center" v-for="b in blogs" :key="b.id">
          <BlogCard :blog="b" />
          <!-- This is the post card -->
          <!-- <div class="card col-10 m-3 p-2">
            <section class="row set-height">
              <div class="col-8">
                <section class="row">
                  <div class="col-8 d-flex">
                    <img
                      src="https://plus.unsplash.com/premium_photo-1664811569273-861bd7f3fe9d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                      class="img-fluid rounded-circle profile-pic" />
                    <h5 class="m-2">Blogger name</h5>
                  </div>
                </section>
                <section class="row">
                  <div class="col-12 p-3">
                    <h6>blog title blah blah blah</h6>
                    <p class="cut-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde necessitatibus quis
                      sed commodi,
                      minima itaque incidunt asperiores dolores vel fugiat, accusantium corporis distinctio veritatis
                      explicabo a saepe nesciunt officiis animi! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quis debitis laboriosam odit esse iure officia libero itaque. Vitae tenetur voluptate a alias culpa
                      nam. Quia beatae non necessitatibus perferendis molestias?</p>
                  </div>
                </section>
              </div>
              <div class="col-4">
                <img
                  src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
                  class="img-fluid rounded blog-cover-image" />
              </div>

            </section>
          </div> -->

        </section>

      </div>
    </section>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { blogsService } from '../services/BlogsService.js';
import Pop from '../utils/Pop.js';
import { AppState } from '../AppState.js';

export default {
  setup() {
    onMounted(() => getBlogs())
    async function getBlogs() {
      try {
        await blogsService.getBlogs()
      } catch (error) {
        Pop.error(error)
      }
    }
    return {
      blogs: computed(() => AppState.blogs)
    }
  }
}
</script>

<style scoped lang="scss">
// .profile-pic {
//   height: 40px;
//   width: 40px;
//   object-fit: cover;
// }

// .blog-cover-image {
//   height: 100%;
//   object-fit: cover;
// }

// .cut-text {
//   white-space: wrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   max-height: 150px;
// }
</style>
