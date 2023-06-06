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
      <div className="w-1/2 flex flex-col justify-center m-20  hidden sm:block">
        <div className="pt-6 p-16">
          <p className="text-xl md:text-3xl font-medium mb-4 text-primary-darkgreen">News</p>
          <News
            text={newsData[0].text}
            heading={newsData[0].title}
            link={newsData[0].link}
          />
          <News
            text={newsData[1].text}
            heading={newsData[1].title}
            link={newsData[1].link}
          />
          <div className="">
            <Link href="/news">
              <button className="hover:scale-105 transition duration-300 font-semibold  py-2 mt-4 ml-0 text-primary-darkgreen bg-white rounded-lg flex items-center">
                Read More <FiArrowRight className="ml-2 pt-1 text-xl font-bold" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-500 mx-20 mb-20 md:mb-0">
      <p className="text-xl md:text-3xl font-medium mb-4 text-primary-darkgreen">Recent Tweets</p>
        <div className="tweets">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="a_ameli2" // Replace 'example' with your Twitter handle
            options={{ height: 400 }} // Adjust the height as per your preference
          />
        </div>

      </div>
    </div>
  );
};


