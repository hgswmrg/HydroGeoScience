import { createClient, groq } from "next-sanity";


export async function getNews(){
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "news"]`
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
        groq`*[_type == "carousel"]{
            name,
            "image" : newsImage.asset->url,
        }`
    )
    
}