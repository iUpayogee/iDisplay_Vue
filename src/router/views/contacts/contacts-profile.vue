<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

import { revenueChart } from "./data-profile";
import Stat from "@/components/widgets/stat";

/**
 * Contacts-Profile component
 */
export default {
  page: {
    title: "Profile",
    meta: [{ name: "description", content: appConfig.description }]
  },
  components: { Layout, PageHeader, Stat },
  data() {
    return {
      revenueChart: revenueChart,
      title: "Profile",
      items: [
        {
          text: "Contacts",
          href: "/"
        },
        {
          text: "Profile",
          active: true
        }
      ],
      statData: [
        {
          icon: "bx bx-check-circle",
          title: "Active Accounts",
          value: "125"
        },
        {
          icon: "bx bx-hourglass",
          title: "Open Positions",
          value: "12"
        },
        {
          icon: "bx bx-package",
          title: "Total Profit",
          value: "$196,524"
        }
      ]
    };
  }
};
</script>

<template>
  <Layout>
    <PageHeader :title="title" :items="items" />
    <div class="row">
      <div class="col-xl-4">
        <div class="card overflow-hidden">
          <div class="bg-soft bg-primary">
            <div class="row">
              <div class="col-7">
                <div class="text-primary p-3">
                  <h5 class="text-primary">Welcome Back !</h5>
                  <!-- <p>It will seem like simplified</p> -->
                </div>
              </div>
              <div class="col-5 align-self-end">
                <img src="@/assets/images/profile-img.png" alt class="img-fluid" />
              </div>
            </div>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-sm-4">
                <div class="avatar-md profile-user-wid mb-4">
                  <img
                    src="@/assets/images/users/avatar-8.jpg"
                    alt
                    class="img-thumbnail rounded-circle"
                  />
                </div>
                <h5 class="font-size-15 text-truncate">Ojay Ojas</h5>
                <p class="text-muted mb-0 text-truncate">UI/UX Designer</p>
              </div>

              <div class="col-sm-8">
                <div class="pt-4">
                  <div class="row">
                    <div class="col-6">
                      <h5 class="font-size-15">125</h5>
                      <p class="text-muted mb-0">Projects</p>
                    </div>
                    <div class="col-6">
                      <h5 class="font-size-15">$1245</h5>
                      <p class="text-muted mb-0">Revenue</p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <a href class="btn btn-primary btn-sm">
                      View Profile
                      <i class="mdi mdi-arrow-right ms-1"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Personal Information</h4>

            <p
              class="text-muted mb-4"
            >Hi I'm Ojay Ojas.I have been in the industry since 2013.</p>
            <div class="table-responsive ">
              <table class="table table-nowrap mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Full Name :</th>
                    <td>Ojay Ojas</td>
                  </tr>
                  <tr>
                    <th scope="row">Mobile :</th>
                    <td>91- (123) 399 9072</td>
                  </tr>
                  <tr>
                    <th scope="row">E-mail :</th>
                    <td>Ojay@Upayogee.in</td>
                  </tr>
                  <tr>
                    <th scope="row">Location :</th>
                    <td>New Delhi, India</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- end card -->

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-5">Experience</h4>
            <div class>
              <ul class="verti-timeline list-unstyled">
                <li class="event-list active">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle bx-fade-right"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <i class="bx bx-server h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5 class="font-size-15">
                          <a href="javascript: void(0);" class="text-dark">Options Trader</a>
                        </h5>
                        <span class="text-primary">2016 - 2019</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <i class="bx bx-code h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5 class="font-size-15">
                          <a href="javascript: void(0);" class="text-dark">Stock Trader</a>
                        </h5>
                        <span class="text-primary">2013 - 2016</span>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="event-list">
                  <div class="event-timeline-dot">
                    <i class="bx bx-right-arrow-circle"></i>
                  </div>
                  <div class="d-flex">
                    <div class="me-3">
                      <i class="bx bx-edit h4 text-primary"></i>
                    </div>
                    <div class="flex-grow-1">
                      <div>
                        <h5 class="font-size-15">
                          <a href="javascript: void(0);" class="text-dark">Commodities Trader</a>
                        </h5>
                        <span class="text-primary">2011 - 2013</span>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end card -->
      </div>

      <div class="col-xl-8">
        <div class="row">
          <div v-for="stat of statData" :key="stat.icon" class="col-md-4">
            <Stat :icon="stat.icon" :title="stat.title" :value="stat.value" />
          </div>
        </div>
        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">Revenue</h4>
            <apexchart
              class="apex-charts"
              type="bar"
              height="320"
              :series="revenueChart.series"
              :options="revenueChart.chartOptions"
            ></apexchart>
          </div>
        </div>

        <div class="card">
          <div class="card-body">
            <h4 class="card-title mb-4">My Projects</h4>
            <div class="table-responsive">
              <table class="table table-nowrap table-hover mb-0">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Projects</th>
                    <th scope="col">Start Date</th>
                    <th scope="col">Deadline</th>
                    <th scope="col">Budget</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>iWeb</td>
                    <td>18 Oct, 2022</td>
                    <td>28 Dec, 2022</td>
                    <td>$506</td>
                  </tr>

                  <tr>
                    <th scope="row">2</th>
                    <td>iReport</td>
                    <td>1 Sep, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$94</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>iAnalyze</td>
                    <td>21 Sep, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$156</td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>iDatabase</td>
                    <td>29 Sep, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$122</td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>iCampaign</td>
                    <td>05 Oct, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$164</td>
                  </tr>
                  <tr>
                    <th scope="row">6</th>
                    <td>iContract</td>
                    <td>17 Oct, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$192</td>
                  </tr>
                  <tr>
                    <th scope="row">7</th>
                    <td>iBroker</td>
                    <td>04 Nov, 2019</td>
                    <td>28 Dec, 2022</td>
                    <td>$94</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end row -->
  </Layout>
</template>