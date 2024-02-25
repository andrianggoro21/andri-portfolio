import { IconMail } from "@tabler/icons-react";

const Contact = () => {
  return (
    <div id="contact" className="bg-bg-color max-w-screen min-h-fit flex justify-center pt-6 pb-20">
      <div className="w-full lg:w-4/5 h-50">
        <div className="flex flex-col items-center lg:items-start gap-4">
          <span className="text-white font-raleway font-extrabold text-48">
            Contact
          </span>
          <p className="text-white font-raleway font-normal text-lg text-center">
            Get in touch & Let’s make some
            awesome
          </p>
          <div className="flex flex-col items-center lg:items-start gap-4">
            <div className="flex items-center gap-8">
              <div className="w-20 hidden lg:block">
                <span className="text-white font-raleway font-normal text-lg">
                  Email
                </span>
              </div>
              <div className="w-fit lg:w-400 h-10 bg-bg-email rounded-lg flex items-center justify-center lg:justify-start px-3 gap-3">
                <div className="hidden lg:block">
                  <IconMail color="#A6A6A6" size={32} strokeWidth={1.5} />
                </div>
                <span className="text-white font-raleway font-normal text-lg">
                  andri.anggoro21@gmail.com
                </span>
              </div>
            </div>
            <div className="flex items-center gap-8">
              <div className="w-20 hidden lg:block">
                <span className="text-white font-raleway font-normal text-lg">
                  Location
                </span>
              </div>
              <div className="w-fit lg:w-400 h-10 flex items-center justify-center lg:justify-start">
                <span className="text-white font-raleway font-normal text-lg">
                  Surabaya, Indonesia
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
