import { MainProvider } from "@/context/MainContext";
import "@/styles/global.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
