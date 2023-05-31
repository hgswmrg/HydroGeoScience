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

export async function getProfile () {
    const client = createClient({
        projectId: "wefrxt7t",
        dataset: "production",
        apiVersion: "2023-03-09",
    });

    return client.fetch(
        groq`*[_type == "profile"]`
    )
    
}