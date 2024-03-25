"use client";

import { useState } from "react";

import ContactInfo from "@/components/Contacts/ContactInfo";
import CustomDatePicker from "@/components/DatePicker/page";
import FooterPage from "@/components/Footer/Footer";
import LimitedTimeOffer from "@/components/LimitedTimeOffer/page";

import "./BookACall.css";

export default function BookACall() {
  const [selectedSubject, setSelectedSubject] = useState("Book a demo");

  return (
    <>
      <header className="book-a-call-hero-bg px-[5%] pb-[8rem] pt-[16rem] lg:pt-[20rem] xl:px-[18%] 2xl:px-[25%]">
        <div className="flex flex-col">
          <h2 className="global-header-text-1 mb-6">Let’s have a chat</h2>
          <h1 className="global-header-text-2 mb-6">Book a Call</h1>
          <p className="global-header-text-3 max-w-[650px]">
            We&apos;ll have a free 15-min discovery call to discuss which
            subscription fits best for your content, objectives and goals.
          </p>
        </div>
      </header>

      <section className="flex items-center bg-[#F1F1F1] md:px-[5%] md:py-40 xl:px-[18%] 2xl:px-[25%]">
        <div className="flex min-h-[35rem] w-full flex-col items-start rounded-[10px] bg-[#FFF] px-4 pb-32 pt-20 md:p-8 lg:flex-row">
          <div className="mb-20 flex h-full w-full flex-col md:pr-6 lg:mb-0">
            <div className="md:pl-2 lg:pl-10">
              <div className="mb-4 flex flex-row items-center lg:flex-col lg:items-start">
                <div className="lg:min-h-[8rem]">
                  <img
                    src="/images/BookACall/shinefy-robot-head.png"
                    alt="close icon"
                    width={100}
                    height={100}
                  />
                </div>

                <p className="book-a-call-custom-text-1 ml-6 text-[#100826] lg:mb-4 lg:ml-0">
                  shine<span className="global-text-to-light-blue">Ai</span>
                </p>
              </div>

              <hr className="border" />
              <p className="book-a-call-custom-text-1 mb-10 mt-5 text-[#8844DA]">
                Discovery Call
              </p>

              <div className="mb-4 flex flex-row gap-x-3">
                <img
                  src="/images/BookACall/time.png"
                  alt="close icon"
                  width={28}
                  height={28}
                />

                <p className="book-a-call-custom-text-2">15 minutes</p>
              </div>

              <div className="mb-10 flex flex-row gap-x-3">
                <img
                  src="/images/BookACall/zoom.png"
                  alt="close icon"
                  width={28}
                  height={28}
                />

                <p className="book-a-call-custom-text-2">Zoom</p>
              </div>

              <p className="book-a-call-custom-text-3">
                Tell us about your content topics, objectives and goals for your
                channel. We will walk you through our process and our relevant
                experience. We will make suggestions so that you can use our AI
                tools to their full potential.
              </p>
            </div>
          </div>

          <div className="my-auto hidden h-[28rem] w-[1px] border lg:block"></div>

          <div className="flex h-full w-full flex-col items-center md:px-4 lg:max-w-[470px] lg:pl-8 lg:pr-0">
            <div className="flex min-h-[6rem] w-full flex-wrap items-start justify-between lg:min-h-[8rem]">
              <button
                onClick={() => setSelectedSubject("Features")}
                className={`${
                  selectedSubject == "Features"
                    ? "active-subject"
                    : "unactive-subject"
                } rounded-xl px-4 py-3`}
              >
                Features
              </button>
              <button
                onClick={() => setSelectedSubject("Services")}
                className={`${
                  selectedSubject == "Services"
                    ? "active-subject"
                    : "unactive-subject"
                } rounded-xl px-4 py-3`}
              >
                Services
              </button>
              <button
                onClick={() => setSelectedSubject("Blog")}
                className={`${
                  selectedSubject == "Blog"
                    ? "active-subject"
                    : "unactive-subject"
                } rounded-xl px-4 py-3`}
              >
                Blog
              </button>
              <button
                onClick={() => setSelectedSubject("Book a demo")}
                className={`${
                  selectedSubject == "Book a demo"
                    ? "active-subject"
                    : "unactive-subject"
                } rounded-xl px-4 py-3`}
              >
                Book a demo
              </button>
            </div>

            <p className="book-a-call-custom-text-1 mb-8 mt-8 w-full text-[#0b3558] md:mt-0">
              Select a Date &amp; Time
            </p>

            <CustomDatePicker />

            <div className="flex w-full flex-row">
              <img
                src="/images/BookACall/earth-globe.png"
                alt="close icon"
                width={20}
                height={20}
                className="self-center"
              />

              <select
                defaultValue={"+00:00"}
                name="selectedTimeZone"
                id="selectedTimeZone"
                className="timezone-select w-full border-none md:max-w-[380px]"
              >
                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                <option value="-11:00">
                  (GMT -11:00) Midway Island, Samoa
                </option>
                <option value="-10:00">(GMT -10:00) Hawaii</option>
                <option value="-09:50">(GMT -9:30) Taiohae</option>
                <option value="-09:00">(GMT -9:00) Alaska</option>
                <option value="-08:00">
                  (GMT -8:00) Pacific Time (US &amp; Canada)
                </option>
                <option value="-07:00">
                  (GMT -7:00) Mountain Time (US &amp; Canada)
                </option>
                <option value="-06:00">
                  (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                </option>
                <option value="-05:00">
                  (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                </option>
                <option value="-04:50">(GMT -4:30) Caracas</option>
                <option value="-04:00">
                  (GMT -4:00) Atlantic Time (Canada), Caracas, La Paz
                </option>
                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                <option value="-03:00">
                  (GMT -3:00) Brazil, Buenos Aires, Georgetown
                </option>
                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                <option value="-01:00">
                  (GMT -1:00) Azores, Cape Verde Islands
                </option>
                <option value="+00:00">
                  (GMT) Western Europe Time, London, Lisbon, Casablanca
                </option>
                <option value="+01:00">
                  (GMT +1:00) Brussels, Copenhagen, Madrid, Paris
                </option>
                <option value="+02:00">
                  (GMT +2:00) Kaliningrad, South Africa
                </option>
                <option value="+03:00">
                  (GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg
                </option>
                <option value="+03:50">(GMT +3:30) Tehran</option>
                <option value="+04:00">
                  (GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi
                </option>
                <option value="+04:50">(GMT +4:30) Kabul</option>
                <option value="+05:00">
                  (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                </option>
                <option value="+05:50">
                  (GMT +5:30) Bombay, Calcutta, Madras, New Delhi
                </option>
                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                <option value="+06:00">
                  (GMT +6:00) Almaty, Dhaka, Colombo
                </option>
                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                <option value="+07:00">
                  (GMT +7:00) Bangkok, Hanoi, Jakarta
                </option>
                <option value="+08:00">
                  (GMT +8:00) Beijing, Perth, Singapore, Hong Kong
                </option>
                <option value="+08:75">(GMT +8:45) Eucla</option>
                <option value="+09:00">
                  (GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk
                </option>
                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                <option value="+10:00">
                  (GMT +10:00) Eastern Australia, Guam, Vladivostok
                </option>
                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                <option value="+11:00">
                  (GMT +11:00) Magadan, Solomon Islands, New Caledonia
                </option>
                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                <option value="+12:00">
                  (GMT +12:00) Auckland, Wellington, Fiji, Kamchatka
                </option>
                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                <option value="+14:00">
                  (GMT +14:00) Line Islands, Tokelau
                </option>
              </select>
            </div>
          </div>
        </div>
      </section>

      <ContactInfo />

      <LimitedTimeOffer />

      <FooterPage />
    </>
  );
}
