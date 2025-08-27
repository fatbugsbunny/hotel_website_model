"use client";

import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { setLocale } from "@/actions";
import { usePathname } from "next/navigation";

const locales = ["en-US", "sq-AL"];

const map = new Map();
map.set("en-US", "English");
map.set("sq-AL", "Shqip");

function getNextPath(paths: string[], locale: string) {
	paths[1] = locale;
	return paths.join("/");
}

export function LanguageSwitcher({ className, text }: Readonly<{ className?: string; text: string }>) {
	const pathName = usePathname();
	const paths = pathName.split("/");

	return (
		<Disclosure>
			<div className={"grid grid-cols-1 justify-items-left "}>
			<DisclosureButton as="button" className={`${className} cursor-pointer`}>
				{text}
			</DisclosureButton>
			<DisclosurePanel className={"grid grid-cols-1 justify-items-left "}>
				{locales.map((locale) => (
					<DisclosureButton className={"cursor-pointer hover:text-tertiary"} key={locale} onClick={async () => await setLocale(locale, getNextPath(paths, locale))}>
						 {map.get(locale)}
					</DisclosureButton>
				))}
			</DisclosurePanel>
		</div>
		</Disclosure>
	);
}
