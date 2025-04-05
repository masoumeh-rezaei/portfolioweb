import Button from "./Button";

export default function NewsLetter() {
    return (
        <div className="md:-mt-[100px] -mt-[50px] px-5 ">
            <div className="container mx-auto">
                <div className="bg-white text-slate-800 border rounded-4xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row justify-between items-center py-10 px-5">
                        {/* Text */}
                        <div className="w-full md:w-1/2 text-center md:text-left mb-6 md:mb-0">
                            <h1 className="font-semibold text-3xl md:text-4xl leading-tight">
                                Subscribe to our Newsletter <br /> & Never miss latest update
                            </h1>
                        </div>

                        {/* Email Input */}
                        <div className="w-full md:w-1/2 flex flex-col items-center">
                            <div className="relative w-full max-w-md">
                                <input
                                    type="email"
                                    className="bg-transparent p-3 border border-violet-800 rounded-xl focus:outline-none w-full pr-24"
                                    placeholder="Email Address"
                                />
                                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-violet-800 text-white px-6 py-2 rounded-xl">
                                    Submit
                                </button>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
