<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Invoice-list component
 */
export default {
  page: {
    title: "Invoice List",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader },
  data() {
    return {
      title: "Invoice List",
      items: [
        {
          text: "Invoices",
          href: "/",
        },
        {
          text: "Invoice List",
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
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none"
                  >
                    <span
                      class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16"
                    >
                      M
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Marion Burton</h5>
                  <a href="#" class="text-muted">@001</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14251</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">iProspect Completion Bonus</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $1455
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 10 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-2.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Bardiya Freeman</h5>
                  <a href="#" class="text-muted">@002</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Payment #14252</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Monthly Salary</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 11 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-7.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Joseph Flint</h5>
                  <a href="#" class="text-muted">@003</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                   <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14253</router-link
                  > 
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Monthly Salary
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1189
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 12 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-8.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Ojay Ojas</h5>
                  <a href="#" class="text-muted">@004</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14254</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Monthy Salary
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1245
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 12 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-5.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Maria Evans</h5>
                  <a href="#" class="text-muted">@005</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                 <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14255</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Monthly Salary
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1024
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 11 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none"
                  >
                    <span
                      class="avatar-title rounded-circle bg-info bg-soft text-primary font-size-16"
                    >
                      T
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Timothy Lee</h5>
                  <a href="#" class="text-muted">@006</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14256</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    Monthly Salary
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1189
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 13 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-1.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Stanley Bland</h5>
                  <a href="#" class="text-muted">@007</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14257</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">Mothly Salary</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1148
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 14 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <div
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none"
                  >
                    <span
                      class="avatar-title rounded-circle bg-success bg-soft text-success font-size-16"
                    >
                      T
                    </span>
                  </div>
                  <h5 class="mb-1 font-size-15 text-truncate">Tommy Wilson</h5>
                  <a href="#" class="text-muted">@008</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link 
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14258</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">
                    iStrategy Consultation
                  </h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1259
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 15 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="row">
              <div class="col-lg-4">
                <div class="text-lg-center">
                  <img
                    src="@/assets/images/users/avatar-4.jpg"
                    class="avatar-sm me-3 mx-lg-auto mb-3 mt-1 float-start float-lg-none rounded-circle"
                    alt="img"
                  />
                  <h5 class="mb-1 font-size-15 text-truncate">Louis Brandon</h5>
                  <a href="#" class="text-muted">@009</a>
                </div>
              </div>

              <div class="col-lg-8">
                <div>
                  <router-link 
                    to="/invoices/detail"
                    class="d-block text-primary text-decoration-underline mb-2"
                    >Invoice #14259</router-link
                  >
                  <h5 class="text-truncate mb-4 mb-lg-5">iDatabase Completion Bonus</h5>
                  <ul class="list-inline mb-0">
                    <li class="list-inline-item me-3">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Amount"
                      >
                        <i class="bx bx-money me-1 text-muted"></i> $ 1355
                      </h5>
                    </li>
                    <li class="list-inline-item">
                      <h5
                        class="font-size-14"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Due Date"
                      >
                        <i class="bx bx-calendar me-1 text-muted"></i> 15 Oct,
                        2022
                      </h5>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->

    <div class="row">
      <div class="col-12">
        <div class="text-center my-3">
          <a href="javascript:void(0);" class="text-success"
            ><i class="bx bx-loader bx-spin font-size-18 align-middle me-2"></i>
            Load more
          </a>
        </div>
      </div>
      <!-- end col-->
    </div>
    <!-- end row -->
  </Layout>
</template>