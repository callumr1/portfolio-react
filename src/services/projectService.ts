import { Octokit } from "octokit";
import auth from "./auth.json";

const owner: string = "callumr1"

const octokit = new Octokit({ auth: auth.authToken});

export async function getProject(repo: string):Promise<Project>{
    var repoUrl: string = "";
    var repoContent: string = "";
    var repoLanguages: string[] = [];

    await getProjectUrl(repo).then(resp => repoUrl = resp);
    await getProjectContent(repo).then(resp => repoContent = resp);
    await getProjectLanguages(repo).then(resp => repoLanguages = resp);
    
    var project: Project = {
        name: repo,
        content: repoContent,
        url: repoUrl,
        languages: repoLanguages,
        image: "./images/" + repo + ".png"
    }
    return project;
}

async function getProjectUrl(repo: string):Promise<string>{
    const res = await octokit.rest.repos.get({
        owner,
        repo
    });
    console.log(res.data);
    // res.data.homepage is the site url
    return res.data.svn_url
}

async function getProjectContent(repo: string):Promise<string>{
    const res = await octokit.rest.repos.getReadme({
        owner,
        repo,
        mediaType: {
            format: "html"
        },
    });
    return res.data.toString();
}

async function getProjectLanguages(repo: string){
    const res = await octokit.rest.repos.listLanguages({
        owner,
        repo
    });
    // Only retun the language name, as the api gives a key value pair
    return Object.keys(res.data);
}

export interface Project {
    name: string,
    content: string,
    url: string,
    languages: string[],
    image: string
}