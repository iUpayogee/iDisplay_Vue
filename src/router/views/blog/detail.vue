<script>
import Layout from "../../layouts/main";
import PageHeader from "@/components/page-header";
import appConfig from "@/app.config";

/**
 * Blog-detail component
 */
export default {
  page: {
    title: "Blog Details",
    meta: [{ name: "description", content: appConfig.description }],
  },
  components: {
    Layout,
    PageHeader,
  },
  data() {
    return {
      title: "Blog Details",
      items: [
        {
          text: "Blog",
          href: "/",
        },
        {
          text: "Blog Details",
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
      <div class="col-lg-12">
        <div class="card">
          <div class="card-body">
            <div class="pt-3">
              <div class="row justify-content-center">
                <div class="col-xl-8">
                  <div>
                    <div class="text-center">
                      <div class="mb-4">
                        <a href="#" class="badge bg-light font-size-12">
                          <i
                            class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                          ></i>
                          Project
                        </a>
                      </div>
                      <h4>Dynamic Asset Managment vs Passive ETF vs Passive</h4>
                      <p class="text-muted mb-4">
                        <i class="mdi mdi-calendar me-1"></i> 10 Apr, 2022
                      </p>
                    </div>

                    <hr />
                    <div class="text-center">
                      <div class="row">
                        <div class="col-sm-4">
                          <div>
                            <p class="text-muted mb-2">Categories</p>
                            <h5 class="font-size-15">Project</h5>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mt-4 mt-sm-0">
                            <p class="text-muted mb-2">Date</p>
                            <h5 class="font-size-15">10 Apr, 2022</h5>
                          </div>
                        </div>
                        <div class="col-sm-4">
                          <div class="mt-4 mt-sm-0">
                            <p class="text-muted mb-2">Post by</p>
                            <h5 class="font-size-15">Bardiya Freeman</h5>
                          </div>
                        </div>
                      </div>
                    </div>
                    <hr />

                    <div class="my-5">
                      <img
                        src="@/assets/images/small/img-2.jpg"
                        alt=""
                        class="img-thumbnail mx-auto d-block"
                      />
                    </div>

                    <hr />

                    <div class="mt-4">
                      <div class="text-muted font-size-14">
                        <p>
                          Risk is a determining factor in potential Rate of Return.
                          When Risk Levels Increase, so Should the expected Rate of Return of your Investment.
                          Everytime You make an Effort to Reduce your Risk Exposure, You will also be reducing your 
                          potential profit. 
                          At the same Time you may increase or decrease your potential profit,
                          through variables involved in selection of Underlaying aka Investment Vehicles.
                        </p>

                        <p class="mb-4">
                          
                          The Major Difference Between and ETF and Upayogee Dynamic Asset Managment is that
                          ETFs Main Characteristic is Reduction of Risk throgh a Set Basket of Investment; 
                          An ETF basket tends to keep the same members for long term and never balance thier portfolio
                          based on imporvment of performance. 
                          
                          Contrary To ETFs the Main Characteristic of
                          Upayogee Artificial Dynamic Asset Managment Intelligent is that its not static like ETF.

                          With Our Dynamic Analysis Approach, Upayogee A.I is able to Analyze Market Activities
                          and Dynamically Scan for Active Trends and Dynamically Add and Remove Members of the ETF Basket. \
                          Henceforth Managment of Risk and Capturing of Alpha is more attainable. 
                        </p>

                        <blockquote
                          class="p-4 border-light border rounded mb-4"
                        >
                          <div class="d-flex">
                            <div class="me-3">
                              <i
                                class="bx bxs-quote-alt-left text-dark font-size-24"
                              ></i>
                            </div>
                            <div>
                              <p class="mb-0">
                                If Your Aim is To Grow Your Wealth and Perserve Your Assets,
                                 then having a usefuil tool is a Necessity. 
                                Upayogee has taken the mission to provide the public with a one of a kind tool. 
                                Simplicity is the Differentiating Factor between Upayogee and the Rest. 
                                We are pleased to offer you a Useful Tool to Track and Manage Your Assets.
                              </p>
                            </div>
                          </div>
                        </blockquote>

                        <p>
                          <!-- Itaque earum rerum hic tenetur a sapiente delectus, ut -->
                        </p>

                        <div class="mt-4">
                          <h5 class="mb-3">Key Points:</h5>

                          <div>
                            <div class="row">
                              <div class="col-lg-4 col-sm-6">
                                <div>
                                  <ul class="pl-4">
                                    <li class="py-1">ETF Reduce Risk and Profit </li>
                                    <li class="py-1">DETF - Dynamic ETFs Can Rebalance Daily </li>
                                    <li class="py-1">DETF Scout for Alpha</li>
                                  </ul>
                                </div>
                              </div>
                              <div class="col-lg-4 col-sm-6">
                                <div>
                                  <ul class="pl-4">
                                    <li class="py-1">DEFT A.I. Manages Risk Dynamically</li>
                                    <li class="py-1">Missed Oppertunites Have a Cost</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <hr />

                      <div class="mt-5">
                        <h5 class="font-size-15">
                          <i
                            class="bx bx-message-dots text-muted align-middle me-1"
                          ></i>
                          Comments :
                        </h5>

                        <div>
                          <div class="d-flex py-3">
                            <div class="avatar-xs me-3">
                              <div
                                class="avatar-title rounded-circle bg-light text-primary"
                              >
                                <i class="bx bxs-user"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Delores Williams
                                <small class="text-muted float-end"
                                  >1 hr Ago</small
                                >
                              </h5>
                              <p class="text-muted">
                                What is the maintenace fee for Upayogee ETFs?
                                Where Can I find performance comparance of all Upayogee ETFs?
                                
                              </p>
                              <div>
                                <a
                                  href="javascript: void(0);"
                                  class="text-success"
                                  ><i class="mdi mdi-reply"></i> Reply</a
                                >
                              </div>
                            </div>
                          </div>
                          <div class="d-flex py-3 border-top">
                            <div class="avatar-xs me-3">
                              <img
                                src="@/assets/images/users/avatar-2.jpg"
                                alt=""
                                class="img-fluid d-block rounded-circle"
                              />
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Bardiya Freeman
                                <small class="text-muted float-end"
                                  >2 hrs Ago</small
                                >
                              </h5>
                              <p class="text-muted">
                                To View Past Performance Records of All Upayogee ETS and Strategies
                                You May Vist https://Stats.Upayogee.in
                              </p>
                              <div>
                                <a
                                  href="javascript: void(0);"
                                  class="text-success"
                                  ><i class="mdi mdi-reply"></i> Reply</a
                                >
                              </div>

                              <div class="d-flex pt-3">
                                <div class="avatar-xs me-3">
                                  <div
                                    class="avatar-title rounded-circle bg-light text-primary"
                                  >
                                    <i class="bx bxs-user"></i>
                                  </div>
                                </div>
                                <div class="flex-grow-1">
                                  <h5 class="font-size-14 mb-1">
                                    Delores Williams
                                    <small class="text-muted float-end"
                                      >2 hrs Ago</small
                                    >
                                  </h5>
                                  <p class="text-muted">
                                    Thank you for your quick response.
                                    Upayogee is Amazing.
                                  </p>
                                  <div>
                                    <a
                                      href="javascript: void(0);"
                                      class="text-success"
                                      ><i class="mdi mdi-reply"></i> Reply</a
                                    >
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div class="d-flex py-3 border-top">
                            <div class="avatar-xs me-3">
                              <div
                                class="avatar-title rounded-circle bg-light text-primary"
                              >
                                <i class="bx bxs-user"></i>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h5 class="font-size-14 mb-1">
                                Keith McCoy
                                <small class="text-muted float-end"
                                  >12 Aug</small
                                >
                              </h5>
                              <p class="text-muted">
                                Thank you soo much for creating useful tools for 
                                the average investor.
                              </p>
                              <div>
                                <a
                                  href="javascript: void(0);"
                                  class="text-success"
                                  ><i class="mdi mdi-reply"></i> Reply</a
                                >
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="mt-4">
                        <h5 class="font-size-16 mb-3">Leave a Message</h5>

                        <form>
                          <div class="row">
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="commentname-input">Name</label>
                                <input
                                  type="text"
                                  class="form-control"
                                  id="commentname-input"
                                  placeholder="Enter name"
                                />
                              </div>
                            </div>
                            <div class="col-md-6">
                              <div class="mb-3">
                                <label for="commentemail-input">Email</label>
                                <input
                                  type="email"
                                  class="form-control"
                                  id="commentemail-input"
                                  placeholder="Enter email"
                                />
                              </div>
                            </div>
                          </div>

                          <div class="mb-3">
                            <label for="commentmessage-input">Message</label>
                            <textarea
                              class="form-control"
                              id="commentmessage-input"
                              placeholder="Your message..."
                              rows="3"
                            ></textarea>
                          </div>

                          <div class="text-end">
                            <button type="submit" class="btn btn-success w-sm">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- end card body -->
        </div>
        <!-- end card -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </Layout>
</template>