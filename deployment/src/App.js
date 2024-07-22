//개발->테스팅->최적화->빌드->배포(서버에 업로드)
//최적화 : lazy loading
//빌드 : npm run build(CRA일 경우)=> 프로덕션 빌드 => build폴더를 배포서버에 업로드
//react는 spa라는 것을 인지하기, 정적웹서버호스트 사용하면 됨(static site host) ex)firebase host
//spa로 설정해야 firebase 서버는 항상 index.html을 반환(클라이언트 라우팅 )
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

import HomePage from "./pages/Home";
import RootLayout from "./pages/Root";
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
