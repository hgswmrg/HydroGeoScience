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