import AuthProvider from "@/components/AuthProvider/AuthProvider";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { ThemeProvider } from "@/context/ThemeContext";
import { Inter, Roboto } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  weight: ["400", "100", "300", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Home | Homie",
  description: "Blog for educational purpose, let's learn let's earn",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="appContainer">
              <Navbar />
              {children}
              <Footer />
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
