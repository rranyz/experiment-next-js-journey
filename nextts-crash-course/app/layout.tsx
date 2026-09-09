import "./globals.css";
import Header from "@/components/mainheader/main-header";
import HeaderBackGround from "@/components/mainheader/main-header-background";

export const metadata = {
  title: "NextLevel Food",
  description: "Delicious meals, shared by a food-loving community.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <HeaderBackGround />
        <Header />
        {children}
      </body>
    </html>
  );
}
