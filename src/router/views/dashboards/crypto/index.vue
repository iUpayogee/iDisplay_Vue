<script>
import Layout from "../../../layouts/main";
import appConfig from "@/app.config";
import PageHeader from "@/components/page-header";

import { SimpleBar } from "simplebar-vue3"
import WalletBalance from "./wallet-balance.vue";
import Overview from "./overview.vue";

import {
  walletRadialChart,
  overviewChart,
  transactionsData,
  bitconinChart,
  ethereumChart,
  litecoinChart,
} from "./data";

/**
 * Crypto Dashboard Component
 */
export default {
  page: {
    title: "Upayogee Client Dashboard",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: { Layout, PageHeader, SimpleBar, WalletBalance, Overview },
  data() {
    return {
      walletRadialChart: walletRadialChart,
      overviewChart: overviewChart,
      transactionsData: transactionsData,
      bitconinChart: bitconinChart,
      ethereumChart: ethereumChart,
      litecoinChart: litecoinChart,
      title: "Upayogee",
      items: [
        {
          text: "Dashboards",
          href: "/",
        },
        {
          text: "Crypto",
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
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <b-dropdown
              class="float-end ms-2"
              variant="white"
              right
              toggle-class="text-muted p-0"
              menu-class="dropdown-menu-end"
            >
              <template v-slot:button-content>
                <i class="mdi mdi-dots-horizontal font-size-18"></i>
              </template>
              <b-dropdown-item>Action</b-dropdown-item>
              <b-dropdown-item>Another action</b-dropdown-item>
              <b-dropdown-item>Something else here</b-dropdown-item>
            </b-dropdown>
            <div>
              <div class="mb-4 me-3">
                <i class="mdi mdi-account-circle text-primary h1"></i>
              </div>

              <div>
                <h5>Ojay Ojas</h5>
                <p class="text-muted mb-1">Ojay@Upayogee.in</p>
                <p class="text-muted mb-0">Id no: #SK01</p>
              </div>
            </div>
          </div>

          <div class="card-body border-top">
            <div class="row">
              <div class="col-sm-6">
                <div>
                  <p class="fw-medium mb-2">Balance :</p>
                  <h4>$ 96,134.39</h4>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="mt-4 mt-sm-0">
                  <p class="fw-medium mb-2">Assets :</p>
                  <div class="d-inline-flex align-items-center mt-1">
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      v-b-tooltip.hover
                      data-placement="top"
                      title="Bonds"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-warning text-warning font-size-18"
                        >
                          <i class="mdi mdi-bitcoin"></i>
                        </span>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Crypto"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-primary text-primary font-size-18"
                        >
                          <i class="mdi mdi-ethereum"></i>
                        </span>
                      </div>
                    </a>
                    <a
                      href="javascript: void(0);"
                      class="m-1"
                      data-placement="top"
                      v-b-tooltip.hover
                      title="Equities"
                    >
                      <div class="avatar-xs">
                        <span
                          class="avatar-title rounded-circle bg-soft bg-info text-info font-size-18"
                        >
                          <i class="mdi mdi-litecoin"></i>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="card-footer bg-transparent border-top">
            <div class="text-center">
              <a
                href="javascript: void(0);"
                class="btn btn-outline-light me-2 w-md"
                >Deposit</a
              >
              <a href="javascript: void(0);" class="btn btn-primary me-2 w-md"
                >Buy / Sell</a
              >
            </div>
          </div>
        </div>
      </div>

      <div class="col-xl-8">
        <div class="card">
          <div>
            <div class="row">
              <div class="col-lg-9 col-sm-8">
                <div class="p-4">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <p>Upayogee Dashboard</p>

                  <div class="text-muted">
                    <p class="mb-1">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      Component Names
                    </p>
                    <p class="mb-1">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      Something Useful
                    </p>
                    <p class="mb-0">
                      <i
                        class="mdi mdi-circle-medium align-middle text-primary me-1"
                      ></i>
                      Call To Action
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-sm-4 align-self-center">
                <div>
                  <img
                    src="@/assets/images/crypto/features-img/img-1.png"
                    alt
                    class="img-fluid d-block"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-bitcoin h2 text-warning align-middle mb-0 me-3"
                  ></i>
                  Bonds
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$34,134</h5>
                      <p class="text-muted text-truncate mb-0">
                        + 0.0012 ( 0.2 % )
                        <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="bitconinChart.series"
                        :options="bitconinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-ethereum h2 text-primary align-middle mb-0 me-3"
                  ></i>
                  Crypto
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$24,544</h5>
                      <p class="text-muted text-truncate mb-0">
                        - 4.102 ( 0.1 % )
                        <i class="mdi mdi-arrow-down ms-1 text-danger"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="ethereumChart.series"
                        :options="ethereumChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-4">
            <div class="card">
              <div class="card-body">
                <p class="text-muted mb-4">
                  <i
                    class="mdi mdi-litecoin h2 text-info align-middle mb-0 me-3"
                  ></i>
                  Equities
                </p>

                <div class="row">
                  <div class="col-6">
                    <div>
                      <h5>$62,361</h5>
                      <p class="text-muted text-truncate mb-0">
                        + 1.792 ( 0.1 % )
                        <i class="mdi mdi-arrow-up ms-1 text-success"></i>
                      </p>
                    </div>
                  </div>
                  <div class="col-6">
                    <div>
                      <apexchart
                        class="apex-charts"
                        height="40"
                        type="area"
                        dir="ltr"
                        :series="litecoinChart.series"
                        :options="litecoinChart.chartOptions"
                      ></apexchart>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
    <div class="row">
      <div class="col-xl-8">
        <WalletBalance />
      </div>
      <div class="col-xl-4">
        <Overview />
      </div>
    </div>

    <div class="row">
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Transactions</h4>
            <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
              <b-tab title="All" active>
                <b-card-text>
                  <SimpleBar style="max-height: 330px">
                    <table
                      class="table table-centered table-nowrap align-middle"
                    >
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.icon">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </SimpleBar>
                </b-card-text>
              </b-tab>
              <b-tab title="Buy">
                <b-card-text>
                  <SimpleBar style="max-height: 330px">
                    <table
                      class="table table-centered table-nowrap align-middle"
                    >
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.id">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </SimpleBar>
                </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                <b-card-text>
                  <SimpleBar style="max-height: 330px">
                    <table
                      class="table table-centered table-nowrap align-middle"
                    >
                      <tbody>
                        <tr v-for="data of transactionsData" :key="data.id">
                          <td style="width: 50px">
                            <div :class="`font-size-22 text-${data.color}`">
                              <i
                                :class="{
                                  'bx bx-down-arrow-circle':
                                    `${data.color}` === 'primary',
                                  'bx bx-up-arrow-circle':
                                    `${data.color}` === 'danger',
                                }"
                              ></i>
                            </div>
                          </td>
                          <td>
                            <div>
                              <h5 class="font-size-14 mb-1">{{ data.name }}</h5>
                              <p class="text-muted mb-0">{{ data.date }}</p>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 mb-0">{{ data.text }}</h5>
                            </div>
                          </td>
                          <td>
                            <div class="text-end">
                              <h5 class="font-size-14 text-muted mb-0">
                                {{ data.price }}
                              </h5>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </SimpleBar>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">News</h4>
            <ul class="list-group">
              <SimpleBar style="max-height: 390px">
                <li class="list-group-item border-0">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-1.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14">AAPL</h5>
                      <p class="text-muted">
                        Apple hikes prices of Apple Music, Apple One and Apple TV+,
                        Indian Prices Remain The Same
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Equities
                        </p>
                      </div>
                      <p class="text-muted mb-0">12 Mar, 2022</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-2.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14">Bonds - Kerala India</h5>
                      <p class="text-muted">
                        Kerala to raise ???3,000 crore via sale of bonds
                         The auction will be held on the Reserve Bank of 
                          India Core Banking Solution (EKuber) system on August 29
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Lending
                        </p>
                      </div>
                      <p class="text-muted mb-0">13 Mar, 2022</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-3.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14">NVDA</h5>
                      <p class="text-muted">
                        After losing 46% in the past year,
                        owners must be relieved by the recent gain
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> Equities
                        </p>
                      </div>
                      <p class="text-muted mb-0">14 Mar, 2022</p>
                    </div>
                  </div>
                </li>
                <li class="list-group-item border-0">
                  <div class="d-flex">
                    <div class="avatar-xs me-3">
                      <span class="avatar-title rounded-circle bg-light">
                        <img
                          src="@/assets/images/companies/img-1.png"
                          alt
                          height="18"
                        />
                      </span>
                    </div>
                    <div class="flex-grow-1">
                      <h5 class="font-size-14">ETHEREUM</h5>
                      <p class="text-muted">
                        Ethereum was trading at $1,469.10.
                        up 10.03% on the day. It was the largest one-day percentage gain since Wednesday, July 27, 2022.
                      </p>

                      <div class="float-end">
                        <p class="text-muted mb-0">
                          <i class="mdi mdi-account me-1"></i> BloackChain
                        </p>
                      </div>
                      <p class="text-muted mb-0">12 Mar, 2022</p>
                    </div>
                  </div>
                </li>
              </SimpleBar>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Exchange</h4>
            <b-tabs pills nav-class="bg-light rounded" content-class="mt-4">
              <b-tab title="Buy" active>
                <b-card-text>
                  <div class="float-end ms-2">
                    <h5 class="font-size-14">
                      <i
                        class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                      ></i>
                      $4235.23
                    </h5>
                  </div>
                  <h5 class="font-size-14 mb-4">Buy Coin</h5>

                  <div>
                    <!-- <div class="form-group mb-3">
                      <label>Payment method :</label>
                      <select class="form-select">
                        <option>Credit / Debit Card</option>
                        <option>Paypal</option>
                      </select>
                    </div> -->

                    <div>
                      <!-- <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>
                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected>BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div> -->

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Quantity</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="button" class="btn btn-success w-md">
                        Buy Coin
                      </button>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
              <b-tab title="Sell">
                <b-card-text>
                  <div class="float-end ms-2">
                    <h5 class="font-size-14">
                      <i
                        class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                      ></i>
                      $4235.23
                    </h5>
                  </div>
                  <h5 class="font-size-14 mb-4">Sell Coin</h5>

                  <div>
                    <div class="form-group mb-3">
                      <label>Email :</label>
                      <input type="email" class="form-control" />
                    </div>
                    <div>
                      <label>Add Amount :</label>
                      <div class="input-group mb-3">
                        <label class="input-group-text">Amount</label>

                        <select class="form-select" style="max-width: 90px">
                          <option value="BT" selected>BTC</option>
                          <option value="ET">ETH</option>
                          <option value="LT">LTC</option>
                        </select>
                        <input type="text" class="form-control" />
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Price</label>
                        </div>
                        <input type="text" class="form-control" />
                        <div class="input-group-append">
                          <label class="input-group-text">$</label>
                        </div>
                      </div>

                      <div class="input-group mb-3">
                        <div class="input-group-prepend">
                          <label class="input-group-text">Total</label>
                        </div>
                        <input type="text" class="form-control" />
                      </div>
                    </div>

                    <div class="text-center">
                      <button type="button" class="btn btn-danger w-md">
                        Sell Coin
                      </button>
                    </div>
                  </div>
                </b-card-text>
              </b-tab>
            </b-tabs>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>
