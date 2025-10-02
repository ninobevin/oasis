import { withAuth } from "next-auth/middleware"

export default withAuth({
  pages: { signIn: "/login" },
})

export const config = {
  matcher: ["/application/:path*"],
}

// redirection to application if user is logged in
// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;

//   const url = req.nextUrl.clone();
//   if (url.pathname === "/login" && token) {
//     url.pathname = "/application";
//     return NextResponse.redirect(url);
//   }
//   return NextResponse.next();
// }

// export const config = {
//   matcher: ["/login"],
// }  
