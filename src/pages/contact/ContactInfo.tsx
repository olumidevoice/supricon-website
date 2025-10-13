const ContactInfo = () => {
    return (
        <div>
            <div className="bg-white p-5 md:p-10 ">
                <div className="">
                    <h3 className="text-2xl md:text-[1.75rem] font-bold ">
                        Contact Info
                    </h3>
                    {/* conatct info section */}
                    <div className="">
                        <h4 className="text-blue-500 font-semibold uppercase mt-5">
                            Give us a Call
                        </h4>
                        <div className="flex flex-col gap-1 mt-1 text-lg text-black-500 ">
                            <a href="tel:+234700SUPRICON" className="">
                                +234 700SUPRICON
                            </a>
                            <a href="tel:+2347069512932" className="">
                                +234 7069512932
                            </a>
                        </div>
                    </div>

                    <div className="">
                        <h4 className="text-blue-500 font-semibold uppercase mt-5">
                            Send Us an Email
                        </h4>
                        <div className="flex flex-col gap-1 mt-1 text-lg text-black-500 ">
                            <a href="mailto:info@supricon.com" className="">
                                info@supricon.com
                            </a>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-blue-500 font-semibold uppercase mt-5">
                            Location
                        </h4>
                        <div className="flex flex-col gap-1 mt-1 text-lg text-black-500 ">
                            A306 Alhaja Mogaji Complex, <br /> Ogba, Lagos
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactInfo;
