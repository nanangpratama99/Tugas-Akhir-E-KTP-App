<template>
  <div>
    <div class="side">
      <div class="sidebar d-flex flex-column">
        <div>
          <h1 class="e-ktp d-flex justify-content-center">
            <span class="material-symbols-outlined" id="badge"> badge </span>
            <p class="pt-2">E-KTP</p>
          </h1>
        </div>
        <hr />

        <div class="menu">
          <router-link to="/home" class="nav-link">
            <div>
              <h6 class="text-white home d-flex">
                <span>
                  <img class="home-ico" src="../assets/home2.svg" alt="">
                </span>
                <p class="pt-2 home-text text-menu">Home</p>
              </h6>
            </div>
          </router-link>

          <router-link to="/addkk" class="nav-link">
            <div>
              <h6 class="text-white tambah-kk d-flex">
                <span>
                  <img class="tambah-kk-ico" src="../assets/tambah-kk.svg" alt="">
                </span>
                <p class="pt-2 tambah-kk-text text-menu">Tambah KK</p>
              </h6>
            </div>
          </router-link>

          <!-- Daftar Anggota -->
          <router-link to="/anggota" class="nav-link">
            <div>
              <h6 class="text-white daftar-anggota d-flex">
                <span>
                  <img class="anggota-ico" src="../assets/anggota.svg" alt="">
                </span>
                <p class="pt-2 anggota-text text-menu">Daftar Anggota</p>
              </h6>
            </div>
          </router-link>
        </div>

        <div class="mt-auto mb-3">
          <router-link to="/" class="nav-link">
            <h4 class="text-white d-flex">
              <span>
                <img class="logout-ico" src="../assets/logout (2).svg" alt="">
              </span>
              <p class="pt-1 logout-text text-menu">Logout</p>
            </h4>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SidebarS",
};
</script>

<!-- CSS -->
<style scoped>
span {
  margin-right: 10px;
  padding-bottom: 5px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar {
  width: 300px;
  height: 90vh;
  background-color: #4B56D2;
  box-shadow: 0 4px 15px 0 rgba(66, 67, 67, 0.436);
  /* background-color: rgb(39, 201, 63); */

  /* background-color: rgb(255, 189, 46); */

  /* background-color: rgb(255, 95, 86); */
  border-radius: 25px;
  margin-top: 25px;
  margin-left: 10px;
  position: fixed;
}

.logout {
  margin: auto;
}

h1 {
  margin-top: 30px;
  padding-top: 5px;
  margin-right: 10px;
}

hr {
  background-color: rgb(255, 255, 255);
  padding: 5px;
  margin-top: 15px;
  margin-bottom: 10px;
  border: none;
}

svg {
  width: 50px;
  height: auto;
  margin-right: 10px;
  margin-left: 10px;
}

.menu div {
  margin-left: 25px;
  margin-top: 15px;
}

h4 {
  margin-left: 20px;
}

svg {
  width: 30px;
  height: auto;
}

.home {
  padding: 5px 5px;
  border-radius: 10px 0px 0px 10px;
}

.home:hover {
  background-color: #5F9DF7;
  cursor: pointer;
}

.tambah-kk {
  padding: 5px 5px;
  border-radius: 10px 0px 0px 10px;
}

.tambah-kk:hover {
  background-color: #5F9DF7;
  cursor: pointer;
}

.daftar-anggota {
  padding: 5px 5px;
  border-radius: 10px 0px 0px 10px;
}

.daftar-anggota:hover {
  background-color: #5F9DF7;
  cursor: pointer;
}

.router-link-exact-active {
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;
  background-color: #5F9DF7;
}

.router-link-active {
  border-radius: 10px 0px 0px 10px;
  cursor: pointer;
}

h4 .text-white mt-auto mb-3:hover {
  background-color: #5F9DF7;
  padding: 5px 5px 5px 5px;
  border-radius: 10px 0px 0px 10px;
}

div .mt-auto:hover {
  background-color: #5F9DF7;
  cursor: pointer;
}

/* Material Icon */
.material-symbols-outlined {
  font-weight: 100;
}

#badge {
  font-size: 60px;
}

#home {
  font-size: 40px;
}

#add-card {
  font-size: 40px;
}

#post-id {
  font-size: 40px;
}

#logout {
  font-size: 40px;
}

.e-ktp {
  color: white;
}

/* menu sidebar */
.home-ico {
  width: 130%;
  margin-right: 5px;
}

.home-text {
  margin-left: 7px;
  margin-top: 2px;
}

.tambah-kk-ico {
  width: 130%;
  margin-right: 5px;
}

.tambah-kk-text {
  margin-left: 7px;
  margin-top: 2px;
}

.anggota-ico {
  width: 130%;
  margin-right: 5px;
}

.anggota-text {
  margin-left: 7px;
  margin-top: 2px;
}

.logout-ico {
  width: 130%;
  margin-right: 5px;
}

.logout-text {
  margin-left: 7px;
  margin-top: 2px;
}

.text-menu {
  font-weight: 400;
}
</style>