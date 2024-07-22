//개발->테스팅->최적화->빌드->배포
//최적화 : lazy loading
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";

//blogpage를 필요할때만 로딩되도록(페이지와 로더 모두 적용)
/*
기존코드
import BlogPage, { loader as postsLoader } from "./pages/Blog";

loader : 선택적 import, import는 promise 반환
loader: () =>import("./pages/Blog").then((module) => module.loader())

컴포넌트  : lazy()함수
const BlogPage=lazy(()=>import('./pages/Blog'))
*/
const BlogPage = lazy(() => import("./pages/Blog"));

//import PostPage, { loader as postLoader } from "./pages/Post";
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <BlogPage />
              </Suspense>
            ),
            loader: () =>
              import("./pages/Blog").then((module) => module.loader()),
          },
          {
            path: ":id",
            element: (
              <Suspense fallback={<p>loading...</p>}>
                <PostPage />
              </Suspense>
            ),
            loader: (meta) =>
              import("./pages/Post").then((module) => module.loader(meta)),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
