<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Blog-grid component
 */
export default {
  page: {
    title: "Blog Grid",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
  },
  methods: {},
  data() {
    return {
      title: "Blog Grid",
      items: [
        {
          text: "Blog",
          href: "/",
        },
        {
          text: "Blog Grid",
          active: true,
        },
      ],
    };
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />

    <div class="row">
      <div class="col-xl-9 col-lg-8">
        <div class="card">
          <b-tabs
            content-class="p-4"
            class="pt-2"
            nav-wrapper-class="nav-item"
            nav-class="justify-content-center nav-tabs-custom"
          >
            <b-tab title="All Post" active>
              <div>
                <div class="row justify-content-center">
                  <div class="col-xl-8">
                    <div>
                      <div class="row align-items-center">
                        <div class="col-4">
                          <div>
                            <h5 class="mb-0">Blog List</h5>
                          </div>
                        </div>

                        <div class="col-8">
                          <div class="float-end">
                            <ul class="nav nav-pills">
                              <li class="nav-item">
                                <a
                                  class="nav-link disabled"
                                  href="javascript:void(0);"
                                  tabindex="-1"
                                  aria-disabled="true"
                                  >View :</a
                                >
                              </li>
                              <li
                                class="nav-item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="List"
                              >
                                <router-link class="nav-link" to="/blog/list">
                                  <i class="mdi mdi-format-list-bulleted"></i>
                                </router-link>
                              </li>
                              <li
                                class="nav-item"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Grid"
                              >
                                <router-link
                                  class="nav-link active text-white"
                                  to="/blog/grid"
                                >
                                  <i class="mdi mdi-view-grid-outline"></i>
                                </router-link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <!-- end row -->

                      <hr class="mb-4" />

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card p-1 border shadow-none">
                            <div class="p-3">
                              <h5>
                                <router-link to="/blog/detail" class="text-dark"
                                  >Dynamic Asset Managment vs Passive ETF vs Passive</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">10 Apr, 2022</p>
                            </div>

                            <div class="position-relative">
                              <img
                                src="@/assets/images/small/img-2.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </div>

                            <div class="p-3">
                              <ul class="list-inline">
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                    ></i>
                                    Project
                                  </a>
                                </li>
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-comment-dots align-middle text-muted me-1"
                                    ></i>
                                    12 Comments
                                  </a>
                                </li>
                              </ul>
                              <p>
                                If Your Aim is To Grow Your Wealth and Perserve Your Assets, 
                                then having a usefuil tool is a Necessity.
                              </p>

                              <div>
                                <a href="javascript:void(0);" class="text-primary"
                                  >Read more <i class="mdi mdi-arrow-right"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="card p-1 border shadow-none">
                            <div class="p-3">
                              <h5>
                                <router-link to="/blog/detail" class="text-dark"
                                  >Year 2021, What happend?</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">24 Mar, 2022</p>
                            </div>

                            <div class="position-relative">
                              <img
                                src="@/assets/images/small/img-6.jpg"
                                alt=""
                                class="img-thumbnail"
                              />

                              <div class="blog-play-icon">
                                <a
                                  href="javascript: void(0);"
                                  class="avatar-sm d-block mx-auto"
                                >
                                  <span
                                    class="avatar-title rounded-circle font-size-18"
                                    ><i class="mdi mdi-play"></i
                                  ></span>
                                </a>
                              </div>
                            </div>
                            <div class="p-3">
                              <ul class="list-inline">
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                    ></i>
                                    Development
                                  </a>
                                </li>
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-comment-dots align-middle text-muted me-1"
                                    ></i>
                                    08 Comments
                                  </a>
                                </li>
                              </ul>

                              <p>
                                At vero eos et accusamus et iusto odio
                                dignissimos ducimus quos
                              </p>

                              <div>
                                <a href="javascript:void(0);" class="text-primary"
                                  >Read more <i class="mdi mdi-arrow-right"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-sm-6">
                          <div class="card p-1 border shadow-none">
                            <div class="p-3">
                              <h5>
                                <router-link to="/blog/detail" class="text-dark"
                                  >Deligation of Analysis And Execution</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">10 Apr, 2022</p>
                            </div>

                            <div class="position-relative">
                              <img
                                src="@/assets/images/small/img-1.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </div>

                            <div class="p-3">
                              <ul class="list-inline">
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                    ></i>
                                    Travel
                                  </a>
                                </li>
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-comment-dots align-middle text-muted me-1"
                                    ></i>
                                    08 Comments
                                  </a>
                                </li>
                              </ul>
                              <p>
                                Take A Look At What Happend, When We Deligated
                                Strategy Execution To Upayogee Artifical Intelligent Computer.
                              </p>

                              <div>
                                <a href="javascript:void(0);" class="text-primary"
                                  >Read more <i class="mdi mdi-arrow-right"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-sm-6">
                          <div class="card p-1 border shadow-none">
                            <div class="p-3">
                              <h5>
                                <router-link to="/blog/detail" class="text-dark"
                                  >Project discussion with team</router-link
                                >
                              </h5>
                              <p class="text-muted mb-0">24 Mar, 2022</p>
                            </div>

                            <div class="position-relative">
                              <img
                                src="@/assets/images/small/img-2.jpg"
                                alt=""
                                class="img-thumbnail"
                              />
                            </div>

                            <div class="p-3">
                              <ul class="list-inline">
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                                    ></i>
                                    Development
                                  </a>
                                </li>
                                <li class="list-inline-item me-3">
                                  <a href="javascript:void(0);" class="text-muted">
                                    <i
                                      class="bx bx-comment-dots align-middle text-muted me-1"
                                    ></i>
                                    08 Comments
                                  </a>
                                </li>
                              </ul>

                              <p>
                                Sed ut perspiciatis unde omnis iste eaque natus
                                error sit
                              </p>

                              <div>
                                <a href="javascript:void(0);" class="text-primary"
                                  >Read more <i class="mdi mdi-arrow-right"></i
                                ></a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr class="my-4" />

                      <div class="text-center">
                        <ul
                          class="pagination justify-content-center pagination-rounded"
                        >
                          <li class="page-item disabled">
                            <a href="javascript:void(0);" class="page-link"
                              ><i class="mdi mdi-chevron-left"></i
                            ></a>
                          </li>
                          <li class="page-item">
                            <a href="javascript:void(0);" class="page-link">1</a>
                          </li>
                          <li class="page-item active">
                            <a href="javascript:void(0);" class="page-link">2</a>
                          </li>
                          <li class="page-item">
                            <a href="javascript:void(0);" class="page-link">3</a>
                          </li>
                          <li class="page-item">
                            <a href="javascript:void(0);" class="page-link">...</a>
                          </li>
                          <li class="page-item">
                            <a href="javascript:void(0);" class="page-link">10</a>
                          </li>
                          <li class="page-item">
                            <a href="javascript:void(0);" class="page-link"
                              ><i class="mdi mdi-chevron-right"></i
                            ></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
            <b-tab title="Archive">
              <div>
                <div class="row justify-content-center">
                  <div class="col-xl-8">
                    <h5>Archive</h5>

                    <div class="mt-5">
                      <div class="d-flex flex-wrap">
                        <div class="me-2">
                          <h4>2022</h4>
                        </div>
                        <div class="ms-auto">
                          <span
                            class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                            >03</span
                          >
                        </div>
                      </div>
                      <hr class="mt-2" />

                      <div class="list-group list-group-flush">
                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Dynamic Asset Managment vs Passive ETF 
                          vs Passive</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i>Year 2021,
                          What happend?</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Project
                          discussion with team</router-link
                        >
                      </div>
                    </div>

                    <div class="mt-5">
                      <div class="d-flex flex-wrap">
                        <div class="me-2">
                          <h4>2019</h4>
                        </div>
                        <div class="ms-auto">
                          <span
                            class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                            >06</span
                          >
                        </div>
                      </div>
                      <hr class="mt-2" />

                      <div class="list-group list-group-flush">
                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Coffee
                          with Friends</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> If Your Aim is To Grow Your Wealth and Perserve Your Assets,
                           then having a usefuil tool is a Necessity.</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Quis autem
                          vel eum iure</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Cras mi eu
                          turpis</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Year 2019,
                          What happend?</router-link
                        >

                        <router-link
                          to="/blog/detail"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Project
                          discussion with team</router-link
                        >
                      </div>
                    </div>

                    <div class="mt-5">
                      <div class="d-flex flex-wrap">
                        <div class="me-2">
                          <h4>2018</h4>
                        </div>
                        <div class="ms-auto">
                          <span
                            class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                            >03</span
                          >
                        </div>
                      </div>
                      <hr class="mt-2" />

                      <div class="list-group list-group-flush">
                        <router-link
                          to="/blog/details"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Dynamic Asset Managment vs Passive 
                          ETF vs Passive</router-link
                        >

                        <router-link
                          to="/blog/details"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Year 2018,
                          What happend?</router-link
                        >

                        <router-link
                          to="/blog/details"
                          class="list-group-item text-muted"
                          ><i class="mdi mdi-circle-medium me-1"></i> Project
                          discussion with team</router-link
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </b-tab>
          </b-tabs>
          <!-- Nav tabs -->
        </div>
      </div>

      <div class="col-xl-3 col-lg-4">
        <div class="card">
          <div class="card-body p-4">
            <div class="search-box">
              <p class="text-muted">Search</p>
              <div class="position-relative">
                <input
                  type="text"
                  class="form-control rounded bg-light border-light"
                  placeholder="Search..."
                />
                <i class="mdi mdi-magnify search-icon"></i>
              </div>
            </div>

            <hr class="my-4" />

            <div>
              <p class="text-muted">Categories</p>

              <ul class="list-unstyled fw-medium">
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> Design</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> Development
                    <span
                      class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                      >04</span
                    ></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> Business</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> Project</a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> Travel<span
                      class="badge badge-soft-success badge-pill ms-1 float-end font-size-12"
                      >12</span
                    ></a
                  >
                </li>
              </ul>
            </div>

            <hr class="my-4" />
            <div>
              <p class="text-muted">Archive</p>

              <ul class="list-unstyled fw-medium">
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> 2022
                    <span
                      class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                      >03</span
                    ></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> 2019
                    <span
                      class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                      >06</span
                    ></a
                  >
                </li>
                <li>
                  <a href="javascript:void(0);" class="text-muted py-2 d-block"
                    ><i class="mdi mdi-chevron-right me-1"></i> 2018
                    <span
                      class="badge badge-soft-success badge-pill float-end ms-1 font-size-12"
                      >05</span
                    ></a
                  >
                </li>
              </ul>
            </div>
            <hr class="my-4" />

            <div>
              <p class="text-muted mb-2">Popular Posts</p>

              <div class="list-group list-group-flush">
                <a href="javascript:void(0);" class="list-group-item text-muted py-3 px-2">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img
                        src="@/assets/images/small/img-7.jpg"
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="font-size-13 text-truncate">
                        Dynamic Asset Managment vs Passive ETF vs Passive
                      </h5>
                      <p class="mb-0 text-truncate">10 Apr, 2022</p>
                    </div>
                  </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item text-muted py-3 px-2">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img
                        src="@/assets/images/small/img-4.jpg"
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="font-size-13 text-truncate">
                        Year 2021, What happend?
                      </h5>
                      <p class="mb-0 text-truncate">24 Mar, 2022</p>
                    </div>
                  </div>
                </a>

                <a href="javascript:void(0);" class="list-group-item text-muted py-3 px-2">
                  <div class="d-flex align-items-center">
                    <div class="me-3">
                      <img
                        src="@/assets/images/small/img-6.jpg"
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div class="flex-grow-1 overflow-hidden">
                      <h5 class="font-size-13 text-truncate">
                        Project discussion with team
                      </h5>
                      <p class="mb-0 text-truncate">11 Mar, 2022</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            <hr class="my-4" />

            <div>
              <p class="text-muted">Tags</p>

              <div class="d-flex flex-wrap gap-2 widget-tag">
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12">Design</a>
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12"
                    >Development</a
                  >
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12">Business</a>
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12">Project</a>
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12">Travel</a>
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12">Lifestyle</a>
                </div>
                <div>
                  <a href="javascript:void(0);" class="badge bg-light font-size-12"
                    >Photography</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>