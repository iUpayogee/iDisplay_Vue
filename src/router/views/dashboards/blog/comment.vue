<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <h5 class="card-title mb-3">Comments</h5>
        </div>
        <b-dropdown
          class="ms-auto"
          variant="white"
          menu-class="dropdown-menu-end"
          toggle-class="font-size-16 p-0"
          right
        >
          <template #button-content>
            <i class="mdi mdi-dots-horizontal"></i>
          </template>
          <b-dropdown-item href="#">Action</b-dropdown-item>
          <b-dropdown-item href="#">Another action</b-dropdown-item>
          <b-dropdown-item href="#">Something else here</b-dropdown-item>
          <b-dropdown-divider></b-dropdown-divider>
          <b-dropdown-item href="#">Separated link</b-dropdown-item>
        </b-dropdown>
      </div>

      <div data-simplebar style="max-height: 310px">
        <ul class="list-group list-group-flush">
          <li class="list-group-item py-3">
            <div class="d-flex">
              <div class="avatar-xs me-3">
                <div class="avatar-title rounded-circle bg-light text-primary">
                  <i class="bx bxs-user"></i>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-14 mb-1">
                  Delores Williams
                  <small class="text-muted float-end">1 hr Ago</small>
                </h5>
                <p class="text-muted">
                  What is the maintenace fee for Upayogee ETFs?
                  Where Can I find performance comparance of all Upayogee ETFs?
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply me-1"></i> Reply</a
                  >
                </div>
              </div>
            </div>
          </li>

          <li class="list-group-item py-3">
            <div class="d-flex">
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
                  <small class="text-muted float-end">2 hrs Ago</small>
                </h5>
                <p class="text-muted">
                  To View Past Performance Records of All Upayogee ETS and Strategies
                  You May Vist https://Stats.Upayogee.in
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply"></i> Reply</a
                  >
                </div>

                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <div class="avatar-xs">
                      <div
                        class="avatar-title rounded-circle bg-light text-primary"
                      >
                        <i class="bx bxs-user"></i>
                      </div>
                    </div>
                  </div>
                  <div class="flex-grow-1">
                    <h5 class="font-size-14 mb-1">
                      Delores Williams
                      <small class="text-muted float-end">1 hr Ago</small>
                    </h5>
                    <p class="text-muted">
                      Thank you for your quick response.
                      Upayogee is Amazing.
                    </p>
                    <div>
                      <a href="javascript: void(0);" class="text-success"
                        ><i class="mdi mdi-reply me-1"></i> Reply</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

          <li class="list-group-item py-3">
            <div class="d-flex">
              <div class="avatar-xs me-3">
                <div class="avatar-title rounded-circle bg-light text-primary">
                  <i class="bx bxs-user"></i>
                </div>
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-14 mb-1">
                  Keith McCoy
                  <small class="text-muted float-end">12 Aug</small>
                </h5>
                <p class="text-muted">
                  Thank you soo much for creating useful tools for
                  the average investor.
                </p>
                <div>
                  <a href="javascript: void(0);" class="text-success"
                    ><i class="mdi mdi-reply"></i> Reply</a
                  >
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
