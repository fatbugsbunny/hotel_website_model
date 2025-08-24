export default function LocalMap({ className }: { className?: string }) {
	return (
		<div className={`${className} lg:bg-primary absolute left-1/2 z-1 h-[75%] w-full max-w-[450px] -translate-x-1/2 lg:bottom-14 lg:left-full lg:h-71 lg:w-137.5 lg:max-w-[650px] lg:-translate-x-0`}>
			<div className={`text-quinary absolute top-1/2 left-12 hidden h-40 -translate-y-1/2 items-center text-center text-4xl lg:flex`}>
				<p>FIND US</p>
			</div>
			<div className={`absolute top-1/2 w-full max-w-md -translate-y-1/2 p-4 lg:-right-30 lg:p-0`}>
				<p className={"text-quinary mb-6 text-center text-3xl uppercase lg:hidden"}>- Find us -</p>
				<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12144.134516407397!2d19.48540625!3d40.45239264999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753008889930!5m2!1sen!2s" className={`h-55 w-full border-0 lg:h-62`} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={`map`}></iframe>
			</div>
		</div>
	);
}
