import { groq } from 'next-sanity';
import {createClient} from '@sanity/client'


export async function getNews(){
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "news"] | order(publishedAt desc)`
    )
}

export async function getJobs () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "jobs"]`
    )
    
}

export async function getProducts() {
    const client = createClient({
      projectId: "wefrxt7t",
      dataset: "production",
      apiVersion: "2023-03-09",
    });
  
    return client.fetch(
      groq`*[_type == "products"]{
        _id,
        name,
        description,
        link,
        "image": image.asset->url
      }`
    );
  }
  

export async function getPublications () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "publications"]`
    )
    
}

export async function getProfile () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "profile"]{
            name,
            position,
            description,
            "image" : profileImage.asset->url,
            profileType,
            linkedIn,
            

        }`
    )
    
}

export async function getGallery () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "gallery"] | order(year desc) {
            _id,
            year,
            title,
            "photos": photos[]{
                caption,
                "url": asset->url,
                "alt": asset->altText
            }
        }`
    )

}

export async function getScienceCommunications () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "scienceCommunication"] | order(coalesce(displayDate, "0001-01-01") desc) {
            _id,
            title,
            section,
            citation,
            description,
            link,
            tags,
            displayDate
        }`
    )

}

export async function getCarousel () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "carousel"] | order(displayDate desc) {
            name,
            "image" : newsImage.asset->url,
            displayDate
        }`
    )
    
}