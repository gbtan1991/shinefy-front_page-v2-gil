import { useState, useRef } from "react";

import VideoPlayer from "@/components/VideoPlayer/VideoPlayer";

import { Swiper, SwiperSlide } from "swiper/react";

import "../styles/CreamOfTheCropSection.css";

export default function CreamOfTheCropSection() {
  const [selectedCreamOfCropCategory, setSelectedCreamOfCropCategory] =
    useState("General Purpose");
  const [playCreamOfCropVideo, setPlayCreamOfCropVideo] = useState(false);

  const videoURLToPlay = useRef("");
  const videoPlayerModalRef = useRef();

  const handleChangeCreamOfCropCategory = (event) => {
    setSelectedCreamOfCropCategory(event.target.value);
  };

  const showVideoModal = (url) => {
    videoPlayerModalRef.current.showModal();
    videoURLToPlay.current = url;
    setPlayCreamOfCropVideo(true);
  };

  const hideVideoModal = () => {
    videoPlayerModalRef.current.close();
    setPlayCreamOfCropVideo(false);
  };

  return (
    <section className="px-[10%] py-20 2xl:px-[20%]">
      <header className="flex flex-col items-center">
        <h4 className="global-header-text-1 mb-6 text-center">Your Go-To</h4>
        <h3 className="global-header-text-2 mb-6 text-center">
          Done-In-A-Day Videos & Content
        </h3>
        <p className="global-header-text-3 mb-12 max-w-[600px] text-center">
          This is a never seen before AI tool for content creators, by content
          creators. But most of all, this is a tool for EVERY looking-to-scale
          aspirants who wants to scale their content the fast and easy way.
        </p>
      </header>

      <div className="mx-auto mb-12 flex max-w-[700px] flex-row flex-wrap justify-center gap-3">
        {/* Temporarily hidden because these categories are not yet available - JOHN 18/09/23 */}
        {/* <button 
          value="Motivational"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Motivational" ? "active-radio" : ""}`} 
        >
            Motivational
        </button>
        <button 
          value="TikTok"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="TikTok" ? "active-radio" : ""}`} 
        >
            TikTok
        </button>
        <button 
          value="YouTube Shorts"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="YouTube Shorts" ? "active-radio" : ""}`} 
        >
            YouTube Shorts
        </button>
        <button 
          value="Storytelling"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Storytelling" ? "active-radio" : ""}`} 
        >
            Storytelling
        </button>
        <button 
          value="Trivia"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Trivia" ? "active-radio" : ""}`} 
        >
            Trivia
        </button>
        <button 
          value="Viral Videos"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Viral Videos" ? "active-radio" : ""}`} 
        >
            Viral Videos
        </button>
        <button 
          value="Affiliate"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Affiliate" ? "active-radio" : ""}`} 
        >
            Affiliate
        </button>
        <button 
          value="Instastories"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Instastories" ? "active-radio" : ""}`} 
        >
            Instastories
        </button>
        <button 
          value="Promotional"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Promotional" ? "active-radio" : ""}`} 
        >
            Promotional
        </button>
        <button 
          value="Informational"
          onClick={handleChangeCreamOfCropCategory}        
          className={`whitespace-nowrap p-4 text-white rounded global-outlined-btn-2 ${selectedCreamOfCropCategory=="Informational" ? "active-radio" : ""}`} 
        >
            Informational
        </button> */}

        <button
          value="General Purpose"
          onClick={handleChangeCreamOfCropCategory}
          className={`global-outlined-btn-2 whitespace-nowrap rounded p-4 text-white ${
            selectedCreamOfCropCategory == "General Purpose"
              ? "active-radio"
              : ""
          }`}
        >
          General Purpose
        </button>
        <button
          value="Video Enahncer"
          onClick={handleChangeCreamOfCropCategory}
          className={`global-outlined-btn-2 whitespace-nowrap rounded p-4 text-white ${
            selectedCreamOfCropCategory == "Video Enahncer"
              ? "active-radio"
              : ""
          }`}
        >
          Video Enahncer
        </button>
      </div>

      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        breakpoints={{
          768: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 4,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
          1700: {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
        className=""
      >
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button
              onClick={() =>
                showVideoModal("https://vimeo.com/865649304?share=copy")
              }
              className="cream-of-crop-custom-text rounded px-8 py-2 text-white"
            >
              <img
                src="/images/home/CreamOfCrop/top-5-hacks-ADHD-video-thumbnail.png"
                alt="Top5hacksADHD Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Motivational
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            onClick={() =>
              showVideoModal("https://vimeo.com/865973089?share=copy")
            }
            className="flex flex-col items-center "
          >
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/marie-curie-video-thumbnail.png"
                alt="Marie Curie Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Information
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/shine-ranker-video-thumbnail.png"
                alt="ShineRanker Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Promotional
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/samuel-video-thumbnail.png"
                alt="Samuel Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Storytelling
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/why-indonesians-dont-speak-dutch-video-thumbnail.png"
                alt="Why Indonesians dont speak dutch Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Trivia
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/uranium-video-thumbnail.png"
                alt="uranium Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Recent Viral
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/top-5-hacks-ADHD-video-thumbnail.png"
                alt="Top5hacksADHD Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Motivational
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/marie-curie-video-thumbnail.png"
                alt="Marie Curie Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Information
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/shine-ranker-video-thumbnail.png"
                alt="ShineRanker Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Promotional
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/samuel-video-thumbnail.png"
                alt="Samuel Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Storytelling
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/why-indonesians-dont-speak-dutch-video-thumbnail.png"
                alt="Why Indonesians dont speak dutch Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Trivia
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col items-center ">
            <button className="cream-of-crop-custom-text rounded px-8 py-2 text-white">
              <img
                src="/images/home/CreamOfCrop/uranium-video-thumbnail.png"
                alt="uranium Video thumbnail"
                className="mb-4 min-h-[300px] min-w-[15rem] rounded md:min-w-[205px] lg:min-w-[190px] xl:min-w-[180px] 2xl:min-w-[180px]"
              />
              Recent Viral
            </button>
          </div>
        </SwiperSlide>
      </Swiper>

      <dialog
        ref={videoPlayerModalRef}
        className={` ${
          playCreamOfCropVideo ? "" : "hidden"
        } video-player-dialog flex items-center justify-center`}
      >
        <VideoPlayer
          playVideo={playCreamOfCropVideo}
          hideVideoModal={hideVideoModal}
          videoURL={videoURLToPlay.current}
        />
      </dialog>
    </section>
  );
}
