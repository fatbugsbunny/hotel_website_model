export default function LocalMap(){
    return(
        <div className={`absolute bg-primary w-137.5 h-71 left-full bottom-14 z-[1]`}>
            <div className={`absolute left-12 top-1/2 -translate-y-1/2 text-tertiary text-4xl text-center h-40 flex items-center`}>
                <p>FIND US</p>
            </div>
            <div
                className={`absolute max-w-md w-full -right-30 top-1/2 -translate-y-1/2`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12144.134516407397!2d19.48540625!3d40.45239264999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753008889930!5m2!1sen!2s"
                    className={`border-0 w-full h-62`} allowFullScreen={false} loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade" title={`map`}></iframe>
            </div>
        </div>
    )
}