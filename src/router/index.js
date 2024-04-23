import { createRouter, createWebHistory } from "vue-router";

//routes
import HomeView from "../views/Home/HomeView.vue";
import AboutView from "@/views/Home/AboutView.vue";
import ContactView from "@/views/Home/ContactView.vue";
import BlogsView from "@/views/Home/BlogsView.vue";
import CoursesView from "@/views/Home/CoursesView.vue";
import TeachersView from "@/views/Home/TeachersView.vue";
import ShowCourse from "@/views/Home/ShowCourse.vue";

//error page
import ErrorPage from "@/views/ErrorPage.vue";

//blogs view
import ShowBlog from "@/views/Dashboard/blogs/ShowBlog.vue";
import UpdateBlog from "@/views/Dashboard/blogs/UpdateBlog.vue";
import CreateBlog from "@/views/Dashboard/blogs/CreateBlog.vue";

// category
import ShowCat from "@/views/Dashboard/category/ShowCategory.vue";
import CreateCat from "@/views/Dashboard/category/CreateCategory.vue";
import EditCat from "@/views/Dashboard/category/EditCategory.vue";
import CatView from "@/views/Home/CategoryView.vue";

//registration
import LoginView from "@/views/Home/registration/login.vue";
import RegisterView from "@/views/Home/registration/register.vue";

//dashboard view
// import DashView from "@/views/Dashboard/DashView.vue";
// courses view

import DashCourse from "@/views/Dashboard/courses/ShowCourse.vue";
import UpdateCourse from "@/views/Dashboard/courses/UpdateCourse.vue";
import CreateCourse from "@/views/Dashboard/courses/CreateCourse.vue";
import CoursesDash from "@/views/Dashboard/courses/CoursesView.vue";
import ProfileView from "@/views/Dashboard/Profile.vue";
import UpdateProfile from "@/views/Dashboard/Update.vue";
import MyCourses from "@/views/Dashboard/courses/MyCourses.vue";

//blogs
import AllBlogs from "@/views/Dashboard/blogs/index.vue";
import MyBlogs from "@/views/Dashboard/blogs/MyBlogs.vue";

const dashRoute = [
  {
    path: "/dashboard/course/:id",
    name: "dash-course",
    component: DashCourse,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/courses/create",
    name: "create-course",
    component: CreateCourse,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/course/edit/:id",
    name: "update-course",
    component: UpdateCourse,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/category",
    name: "category",
    component: ShowCat,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/category/create",
    name: "create-category",
    component: CreateCat,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/category/edit/:id",
    name: "edit-category",
    component: EditCat,
    meta: { requiresAuth: true },
  },

  {
    path: "/dashboard/course/show/:slug",
    name: "showCat",
    component: ShowCat,
    props: true,
    meta: { requiresAuth: true },
  },

  {
    path: "/dashboard/courses",
    name: "CoursesView",
    component: CoursesDash,

    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/profile",
    name: "profile",
    component: ProfileView,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/profile/update",
    name: "update-profile",
    component: UpdateProfile,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/my-courses",
    name: "my-courses",
    component: MyCourses,
    meta: { requiresAuth: true },
  },
  //blogs route
  {
    path: "/dashboard/blogs",
    name: "all-blogs",
    component: AllBlogs,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/blog/show/:name",
    name: "show-blog",
    component: ShowBlog,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/blog/update/:id",
    name: "update-blog",
    component: UpdateBlog,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/blog/create",
    name: "create-blog",
    component: CreateBlog,
    meta: { requiresAuth: true },
  },
  {
    path: "/dashboard/my-blogs",
    name: "my-blogs",
    component: MyBlogs,
    meta: { requiresAuth: true },
  },
];

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    props: true,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/blogs",
    name: "blogs",
    component: BlogsView,
  },
  {
    path: "/courses",
    name: "courses",
    component: CoursesView,
  },

  {
    path: "/show-course/:course",
    name: "ShowCourse",
    component: ShowCourse,
    props: true,
  },
  {
    path: "/teachers",
    name: "teachers",
    component: TeachersView,
  },
  {
    path: "/category/:category",
    name: "category-view",
    component: CatView,
    props: true,
  },

  //error page
  {
    path: "/:catchAll(.*)",
    name: "ErrorPage",
    component: ErrorPage,
  },

  //courses view
  dashRoute[0],
  dashRoute[1],
  dashRoute[2],
  dashRoute[3],
  dashRoute[4],
  dashRoute[5],
  dashRoute[6],
  dashRoute[7],
  dashRoute[8],
  dashRoute[9],
  dashRoute[10],
  dashRoute[11],
  dashRoute[12],
  dashRoute[13],
  dashRoute[14],
  dashRoute[15],

  //dashboard

  //registration
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem("jwt")) {
      next({ path: "/login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
