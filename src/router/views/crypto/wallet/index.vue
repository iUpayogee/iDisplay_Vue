<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

// Import Data
import { OveviewChart, activitiesData } from "./data";
/**
 * Wallets component
 */
export default {
  page: {
    title: "Wallet",
    meta: [
      {
        name: "description",
        content: appConfig.description,
      },
    ],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      OveviewChart: OveviewChart,
      activitiesData: activitiesData,
      title: "Account Information",
      items: [
        {
          text: "Client",
          href: "/",
        },
        {
          text: "Wallet",
          active: true,
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      pageOptions: [
        { text: '10', value: '10' },
        { text: '25', value: '25' },
        { text: '50', value: '50' },
        { text: '100', value: '100' }
      ],
      filter: null,
      filterOn: [],
      sortBy: "id",
      sortDesc: false,
      // Data Table - Rows of Data - Activity Orders
      fields: [
        {
          key: "id",
          label: "Transaction ID",
          sortable: true,
        },
        {
          key: "date",
          label: "Date",
          sortable: true,
        },
        {
          key: "type",
          sortable: true,
        },
        {
          key: "currency",
          sortable: true,
        },
        {
          key: "amount",
          label: "Quantity",
          sortable: true,
        },
        {
          key: "usd",
          label: "Amount in INR",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    /**
     * Total no. of records
     */
    rows() {
      return this.activitiesData.length;
    },
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },
  methods: {
    /**
     * Search the table data with search input
     */
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
  },
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <div class="d-flex align-items-start">
              <div class="flex-shrink-0 me-4">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div class="flex-grow-1">
                <div class="text-muted">
                  <h5>Ojay Ojas</h5>
                  <p class="mb-1">ojas@upayogee.in</p>
                  <p class="mb-0">Id no: #SK01</p>
                </div>
              </div>

              <b-dropdown
                variant="white"
                toggle-class="text-muted p-0"
                toggle-tag="div"
              >
                <template v-slot:button-content>
                  <i class="mdi mdi-dots-horizontal font-size-18"></i>
                </template>
                <b-dropdown-item>Action</b-dropdown-item>
                <b-dropdown-item>Another action</b-dropdown-item>
                <b-dropdown-item>Something else here</b-dropdown-item>
              </b-dropdown>
            </div>
          </div>
          <div class="card-body border-top">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <p class="text-muted mb-2">Nest Asset Value</p>
                  <h5>$ 9148.23</h5>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="text-sm-end mt-4 mt-sm-0">
                  <p class="text-muted mb-2">Since Last Week</p>
                  <h5>
                    + $ 248.35
                    <span class="badge bg-success ms-1 align-bottom"
                      >+ 1.3 %</span
                    >
                  </h5>
                </div>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <!-- <p class="text-muted mb-4">In this month</p> -->
            <div class="text-center">
              <div class="row">
                <div class="col-sm-4">
                  <div>
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-send"></i>
                    </div>

                    <p class="text-muted mb-2">Send</p>
                    <h5>$ 654.42</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md">Send</a>
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-import"></i>
                    </div>

                    <p class="text-muted mb-2">receive</p>
                    <h5>$ 1054.32</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md"
                        >Receive</a
                      >
                    </div>
                  </div>
                </div>
                <div class="col-sm-4">
                  <div class="mt-4 mt-sm-0">
                    <div class="font-size-24 text-primary mb-2">
                      <i class="bx bx-wallet"></i>
                    </div>

                    <p class="text-muted mb-2">Withdraw</p>
                    <h5>$ 824.34</h5>

                    <div class="mt-3">
                      <a href="#" class="btn btn-primary btn-sm w-md"
                        >Withdraw</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="row">
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-bitcoin h2 text-warning mb-0"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Bond Assets</p>
                    <h5 class="mb-0">
                      195,684 INR
                      <!-- <span class="font-size-14 text-muted"> = $ 9148.00 </span> -->
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-ethereum h2 text-primary mb-0"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Crypto Assets</p>
                    <h5 class="mb-0">
                      84.04121 ETH
                      <!-- <span class="font-size-14 text-muted"> = $ 8235.00 </span> -->
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card mini-stats-wid">
              <div class="card-body">
                <div class="d-flex">
                  <div class="me-3 align-self-center">
                    <i class="mdi mdi-litecoin h2 text-info mb-0"></i>
                  </div>
                  <div class="flex-grow-1">
                    <p class="text-muted mb-2">Equity Assets</p>
                    <h5 class="mb-0">
                      1,975,984 INR
                      <!-- <span class="font-size-14 text-muted"> = $ 4721.00 </span> -->
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->

        <div class="card">
          <div class="card-body">
            <!-- <h4 class="card-title mb-3">Performance</h4> -->

            <div>
              <apexchart
                class="apex-charts"
                height="228"
                type="line"
                dir="ltr"
                :series="OveviewChart.series"
                :options="OveviewChart.chartOptions"
              ></apexchart>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Activities</h4>
            <b-tabs content-class="mt-3" nav-class="nav-tabs-custom">
              <b-tab title="All" active>
                <div class="row mt-4">
                  <div class="col-sm-12 col-md-6">
                    <div id="tickets-table_length" class="dataTables_length">
                      <label class="d-inline-flex align-items-center fw-normal">
                        Show&nbsp;
                        <select
                          v-model="perPage"
                          size="sm"
                          class="form-control form-select form-select-sm"
                        >
                          <option v-for="option in pageOptions" :key="option.value" :value="option.value">
                            {{ option.text }}
                          </option>
                        </select
                        >
                        &nbsp;entries
                      </label>
                    </div>
                  </div>
                  <!-- Search -->
                  <div class="col-sm-12 col-md-6">
                    <div
                      id="tickets-table_filter"
                      class="dataTables_filter text-md-end"
                    >
                      <label class="d-inline-flex align-items-center">
                        Search:
                        <b-form-input
                          v-model="filter"
                          type="search"
                          class="form-control form-control-sm ms-2"
                        ></b-form-input>
                      </label>
                    </div>
                  </div>
                  <!-- End search -->
                </div>
                <!-- Table -->
                <div class="table-responsive table-hover mb-0">
                  <b-table
                    :items="activitiesData"
                    :fields="fields"
                    responsive="sm"
                    :per-page="perPage"
                    :current-page="currentPage"
                    :v-model:sort-by="sortBy"
                    :v-model:sort-desc="sortDesc"
                    :filter="filter"
                    :filter-included-fields="filterOn"
                    @filtered="onFiltered"
                  ></b-table>
                </div>
                <div class="row">
                  <div class="col">
                    <div
                      class="dataTables_paginate paging_simple_numbers float-end"
                    >
                      <ul class="pagination pagination-rounded mb-0">
                        <!-- pagination -->
                        <b-pagination
                          v-model="currentPage"
                          :total-rows="rows"
                          :per-page="perPage"
                        ></b-pagination>
                      </ul>
                    </div>
                  </div>
                </div>
              </b-tab>
              <b-tab title="Buy" disabled> </b-tab>
              <b-tab title="Sell" disabled> </b-tab>
              <b-tab title="Options" disabled> </b-tab>
              <b-tab title="Crypto" disabled> </b-tab>
              <b-tab title="Bonds" disabled> </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
