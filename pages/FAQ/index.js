import Footer from "@/Components/Footer/Footer";
import StayLoop from "@/Components/StayLoop/StayLoop";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useMediaQuery } from "react-responsive";
import MiniNavbar from "@/Components/MiniNavbar/MiniNavbar";

const FAQ = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 640 });
  return (
    <div>
      <MiniNavbar />
      <div className="w-full h-auto p-2 px-8 pb-12 text-white bg-gradient-to-b from-gray-900 to-indigo-900 sm:px-16">
        <div className="mt-32 flex flex-col items-center justify-between mt-24 text-indigo-200 flex-nowrap max-md:mx-0 ">
          <p className="text-sm  h-[18px]">FAQs</p>
          <h1 className="py-1 my-4 text-4xl font-semibold font-playfair">
            Ask us anything
          </h1>
          <p className="mb-4 font-sm text-light ">
            Have any questions? We&apos;re here to assist you.
          </p>

          <div className="bg-white w-[275px] h-[40px] flex rounded-[8px] mt-4">
            <Image
              src="/assets/search1.svg"
              alt=""
              width={25}
              height={1}
              className="p-1 mx-2"
            />
            <input
              type="text"
              placeholder="Search here"
              className="w-full h-auto text-sm rounded placeholder-grey-900 focus:outline-none"
            ></input>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 text-gray-700 px-28 mt-14 sm:grid-cols-2 lg:grid-cols-3 max-md:px-8">
        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src="/assets/mail.svg" width={20} height={20} alt="icon" />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            Hoarding Meaning
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            Hoardings are the large advertising boards erected on top of
            buildings or road sides, which can prominently feature printed
            graphics and designs. While these panels can be hosting with vinyl
            or flex, they’re hugely effective as the basis for an outdoor
            advertising campaign. There is being a bit of confusion over the
            British vs American definitions of what hoardings advertising are.
            In the US, hoardings can refer to roadside advertisement panels –
            such as billboards <br></br> which can make things a little
            confusing. In the UK, hoardings mainly refer to the protective
            panels that protect the public from construction sites, but in India
            Hoardings refer to Large Advertising display boards .These are a
            legal requirement, and so any construction site in a public place
            will have a set of these – making for plentiful advertising
            opportunities!
            <br></br>
            <br></br>
            Hoarding Definition : A very large sign in a public place on which
            advertisements are shown: advertising hoardings, A number of
            buildings have been demolished, with hoardings put up around the
            empty spaces.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/credit-card.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            Hoarding Design
          </h1>
          <p className="text-sm max-sm:mx-2">
            Hoarding design is the artwork which will use for displaying
            advertising in hoarding. Your artwork will only be visible for a few
            seconds at a time. Good hoarding designs communicate without a lot
            of content. In fact, most travelers will stop reading after five
            words. Try to convey the essence of a creative rather than
            describing it with prose. <br></br>
            <br></br>
            The hoarding you choose will determine the dimensions of the artwork
            that you will need to create. The ads you submit must match the
            pixel size of the hoardings they will appear on. Hoarding sizes vary
            by board. The required sizes for your artwork are listed as “ad
            size” in the board display information for each hoarding
            individually. This information can be found after you select a
            hoarding board during the campaign set-up process.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src="/assets/slash.svg" width={20} height={20} alt="icon" />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How much does a Hoarding or billboard cost?
          </h1>
          <p className="text-sm max-sm:mx-2">
            Hoardings or Billboards are priced according to size, location, and
            length of agreement. We offer competitive pricing based on your
            needs. Please feel free to search on search bar type location and
            city vise.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src="/assets/truck.svg" width={20} height={20} alt="icon" />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How do I place my Outdoor media booking?
          </h1>
          <p className="text-sm max-sm:mx-2">
            Search the media location and town vise, once you have finished
            adding media to booking cart and are ready to complete your
            transaction, move your cursor to the Top-right corner of the screen
            and click on the “Booking cart” button. You will then be transferred
            to our secure server and asked to either create a new account or
            place an order without an account.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How do I view what’s in my ooh media booking cart?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            To view the contents of your cart, click on the “Booking cart” icon
            in the upper-right corner of your computer screen. Once you click on
            this icon, you can easily change the number of copies you want to
            booking Ooh space of a particular media in your cart by updating the
            campaign in months listed and then clicking the “Update cart” link.
            You can also delete any item in your cart by clicking the “Remove”
            check box to the left of that item and then updating your cart with
            the “Update cart” link.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How do I add items to Media Plan?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            To add to Media Plan navigate to the page of the media you are
            interested in and then choose your desired media from that plan (for
            media plan share to social media and mail also). When you click the
            “Add to Booking Cart” link, you will be brought to your “Booking
            cart” page where you can then enter the duration of the ad campaign
            that you would like to booking using the “campaign in months” field
            on the right side of the screen. After you have entered duration,
            you can continue booking or choose to complete your booking order.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            Where do you have Hoardings in India?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            We have over 18 States in India. We are expanding our operations all
            over India, Please go to the Location tab and take a look to see if
            we match up to your area of interest!.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How can I sign into my account on the booking store and/or edit the
            information in my account?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            If you have previously purchased or booked media or made an online
            booking, then you may have opted to create a personal account in our
            website. If so, you can access this account by clicking on the “Log
            In” link in the upper-left corner of your computer screen. This
            takes you to a page where you will be prompted to enter the e-mail
            address and password that you registered with us when you created
            the account. If you have forgotten your password, you can create a
            new one by click on the “Lost Your password” tab. After your data
            has been verified, your account data will appear and you can either
            edit existing information or proceed with the checkout process.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            What is the minimum duration of a outdoor campaign?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            Our traditional outdoor advertising campaign programs require
            typically a minimum term of 1 month. However, most programs run 3
            months to a year for many reasons, the most obvious of which is
            savings per month per board (Discounts on long-term campaigns).
            Strategy, campaign objectives, and budget are the main factors in
            determining a campaign length.
          </p>
        </div>
        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            How will I know that you have received my order?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            After you complete the checkout process, a receipt will appear on
            your screen detailing your final order including booking charges,
            your billing address, and the booking invoice that are being sent to
            your mail and our marketing executive will reach you booking address
            for final conformation and payment. Please keep this receipt for
            your reference. You will also receive confirmation via e-mail that
            we have received your order. (Please be sure to enter your e-mail
            address correctly on the order form so that we can be sure to
            deliver your confirmation to you.)
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            What are your online booking and service charge rates?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            No extra charges for online booking after booking conformation
            service tax 15% allowed on total amount as per government
            conditions. All booking media costs are calculated using a Indian
            Service tax module.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            Do you offer discounts or specials?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            We offer multiple opportunities for a customer to receive a
            discount. Our specials run throughout various times of the year.
            Please Contact Us to learn what we can offer you!
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            What are your payment options?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
            We accept Four kind of payment methods 1) Direct Transform to
            Account 2) Cheque payments 3) cash on delivery 4) Paypal Onine
            Payment types of major as well as chequs, Net banking transfers (for
            nonlocal customers only), and Purchase Orders (P.O.) from
            incorporated organizations. All checks submitted for payment should
            be made payable to “Mera Hoardings.” Note that checks must be
            written in Indian. Rupees and must be drawn from any bank account
            pay. Any international checks received that are drawn from an
            international bank will be returned. Also, when placing an order
            with a check, please be sure to add the appropriate GST tax (18%).
            If you want flex printing and mounting 10/- per sft flex printing
            and 5/- per sft mounting charges also, DC, you’ll need to add 6% vat
            tax to your total as well.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image
              src="/assets/dollar-sign.svg"
              width={20}
              height={20}
              alt="icon"
            />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
          How can I obtain review of my campaign on the booking duration?
          </h1>
          <p className="text-sm max-sm:mx-2 ">
          After hosting of your creative, campaign starting day and ending day we will send hosted photo copies of proofs (Soft to mail address and hard to billing address), we will insert in “Campaigns” Option at top of our website. we are introduced live campaign monitoring technology to check campaign auditing through live video and photos by “Hello ooH” Technology.
          </p>
        </div>

        <div className="flex-col w-full h-auto px-6 my-4 text-gray-700">
          <span className="flex items-center justify-center w-10 h-10 bg-indigo-200 rounded-full">
            <Image src="/assets/tag.svg" width={20} height={20} alt="icon" />
          </span>
          <h1 className="py-4 font-bold text-gray-700 max-sm:py-2 max-sm:mx-2">
            Will you help me design my billboard?
          </h1>
          <p className="text-sm max-sm:mx-2">
            Sorry, we are only outdoor media providers, right now this service
            not available here.
          </p>
        </div>
        <Image
          src="/assets/Vectortop.png"
          alt=""
          width={70}
          height={70}
          className="absolute z-10 left-[85%] sm:left-[90%] top-[-15px] md:top-[725px] w-[37px] h-[35px] md:w-[57px] md:h-[65px] max-md:sr-only sm:inline-block"
        />
      </div>

      <div className="px-44 max-md:px-14">
        <div className="flex h-auto p-3 px-3 mt-10 bg-indigo-200 rounded-xl mb-44 max-lg:flex-col max-md:mx-1 max-md:px-2 max-md:mb-28">
          <div className="w-full h-auto px-6 py-4">
            <h1 className="text-lg font-bold text-gray-700">
              Still have questions?
            </h1>
            <p className="my-2 text-lg text-gray-700">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
          </div>
          <button
            className=" w-80 h-16 self-center font-bold rounded-[50px]  bg-pink-600 hover:bg-pink-800 border-pink-600 hover:border-pink-800 text-lg border-4 text-white  mr-5 my-6 px-6  max-md:self-center  max-md:mx-6 max-md:w-40 "
            type="button"
          >
            Get in touch
          </button>
        </div>{" "}
      </div>

      <Image
        src="/assets/VectorFAQ.png"
        alt=""
        width={80}
        height={40}
        className="absolute mt-[-5.5rem] z-3  max-lg:sr-only "
      />

      <StayLoop />
      <Footer />
    </div>
  );
};

export default FAQ;
