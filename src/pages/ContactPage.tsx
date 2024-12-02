
const Contact = () => {
  return (
    <section className="py-10 bg-[url('assets/otherImg/bg.png')]  bg-cover">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-100 md:px-8">
        <div className="max-w-lg mx-auto space-y-3 sm:text-center">
          <h3 className="text-[#FFC110] font-semibold">Contact</h3>
          <p className="text-gray-100 text-3xl font-semibold sm:text-4xl">
            Get in touch
          </p>
          <p>We'd love to hear from you! Please fill out the form below.</p>
        </div>
        <div className="mt-12 max-w-lg mx-auto">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="flex flex-col items-center gap-y-5 gap-x-6 [&>*]:w-full sm:flex-row">
              <div>
                <label className="font-medium">First name</label>
                <input
                  type="text"
                  required
                  placeholder="Tom"
                  className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border-2 border-gray-900 focus:border-[#FFC110] shadow-sm rounded-lg"
                />
              </div>
              <div>
                <label className="font-medium">Last name</label>
                <input
                  type="text"
                  required
                  placeholder="Holland"
                  className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border-2 border-gray-900 focus:border-[#FFC110] shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                required
                placeholder="tomholland@example.com"
                className="w-full mt-2 px-3 py-2 text-gray-100 bg-transparent outline-none border-2 border-gray-900 focus:border-[#FFC110] shadow-sm rounded-lg"
              />
            </div>
            <div>
              <label className="font-medium">Phone number</label>
              <div className="relative mt-2">
                <input
                  type="number"
                  placeholder="+91 9876543210"
                  required
                  className="w-full px-3 py-2 appearance-none bg-transparent outline-none border-2 border-gray-900 focus:border-[#FFC110] shadow-sm rounded-lg"
                />
              </div>
            </div>
            <div>
              <label className="font-medium">Message</label>
              <textarea
                required
                placeholder="I really love this website.."
                className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border-2 border-gray-900 focus:border-[#FFC110] shadow-sm rounded-lg"
              ></textarea>
            </div>
            <button className="w-full px-4 py-2 text-black font-medium bg-[#FFC110] hover:bg-[#FFC110] active:bg-[#FFC110] rounded-lg duration-150">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
