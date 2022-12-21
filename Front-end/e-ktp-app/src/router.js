import Home from "./pages/Home.vue";
import Form from "./pages/FormAddKK.vue";
import Anggota from "./pages/FormAnggota.vue";
import DetailKK from "./pages/DetailKK.vue";
import ListAnggota from "./pages/ListAnggota.vue";
import FormDetailAk from "./pages/DetailAkForm.vue";
import LoginReg from "./pages/LoginRegist.vue"

export default [
    {
        neme: "LoginReg",
        path: '/',
        component: LoginReg
    },
  {
    name: "Home",
    path: "/home",
    component: Home,
  },
  {
    name: "Addkk",
    path: `/addkk`,
    component: Form,
  },
  {
    name: "Anggota",
    path: `/anggota`,
    component: Anggota,
  },

  {
    name: "DetailKK",
    path: `/detailKK/:no_kk`,
    component: DetailKK,
  },
  {
    name: "ListAnggota",
    path: `/detailKK/:no_kk/listAnggota`,
    component: ListAnggota,
  },
  {
    name: "DetailAnggota",
    path: `/detailKK/:id/listAnggota/detailAnggota`,
    component: FormDetailAk,
  },
  

  
];
