"use client"
import News from "./News";
import { FiArrowRight } from "react-icons/fi";
import Link from "next/link";
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import {getNews}  from "@backend/sanity-utils";

export default async function NewsAndTweets() {

  const newsData = await getNews();

  return (
    <div className="flex flex-col md:flex-row items-center">
      <div className="w-1/2 flex flex-col justify-center m-20 2xl:m-24 hidden sm:block">
        <div className="pt-6 py-16">
          <p className="ext-xl md:text-3xl 2xl:text-5xl mb-2 text-primary-darkgreen 2xl:mb-10">News</p>
          <News
            text={newsData[0].text}
            heading={newsData[0].title}
            link="/news"
          />
          <News
            text={newsData[1].text}
            heading={newsData[1].title}
            link="/news"
          />
          <News
            text={newsData[2].text}
            heading={newsData[2].title}
            link="/news"
          />
          <div className="">
            <Link href="/news">
              <button className="hover:scale-105 transition duration-300 font-semibold text-base 2xl:text-2xl py-2 mt-4 ml-0 text-primary-darkgreen bg-white rounded-lg flex items-center">
                Read More <FiArrowRight className="ml-2 pt-1 text-xl 2xl:text-2xl font-bold" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-500 mx-20 mb-20 md:mb-0 p-10 md:p-0">
      <p className="text-xl md:text-3xl 2xl:text-5xl mb-2 text-primary-darkgreen 2xl:mb-10">Recent Tweets</p>
        <div className="tweets">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="a_ameli2" // Replace 'example' with your Twitter handle
            options={{ height: 600 }} // Adjust the height as per your preference
          />
        </div>

      </div>
    </div>
  );
};


