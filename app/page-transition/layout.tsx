import { NavLinks } from "@/app/_components/nav-links";
import AnimationProvider from "../provider/AnimationProvider";
import { RouterWrapperProvider } from "../provider/RouterWrapperProvider";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <RouterWrapperProvider>
          <AnimationProvider>
            <NavLinks />
            <main>{children}</main>
          </AnimationProvider>
        </RouterWrapperProvider>
      </body>
    </html>
  );
}
