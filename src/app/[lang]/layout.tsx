import "../globals.css";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import getDictionary from "@/dictionaries";

export async function generateStaticParams() {
	return [{ lang: "en-US" }, {lang: "sq-AL"}];
}

export default async function RootLayout({
	params,
	children,
}: Readonly<{
	params: Promise<{ lang: string }>;
	children: React.ReactNode;
}>)
{
	const { lang } = await params;
	const dict = getDictionary(lang);

	return (
		<html lang={lang}>
			<body className={"overflow-x-hidden"}>
				<Navbar navbar={dict.navbar} />
				{children}
				<Footer footer={dict.footer} />
			</body>
		</html>
	);
}
