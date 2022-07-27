import { Octokit } from "octokit";

const owner: string = "callumr1"

const octokit = new Octokit({ auth: process.env.REACT_APP_GITHUB_KEY});

export async function getProject(repo: string):Promise<Project>{
    var repoContent: string = "";
    var repoLanguages: string[] = [];
    
    await getProjectContent(repo).then(resp => repoContent = resp);
    await getProjectLanguages(repo).then(resp => repoLanguages = resp);
    
    var project: Project = {
        name: repo,
        content: repoContent,
        languages: repoLanguages,
        image: "./images/" + repo + ".png",
        url: null,
        projectUrl: null
    }

    await getProjectUrl(project).then(proj => project = proj);
    return project;
}

async function getProjectUrl(proj: Project):Promise<Project>{
    let repo : string = proj.name;
    const res = await octokit.rest.repos.get({
        owner,
        repo
    });
    // res.data.homepage is the site url
    proj.projectUrl = res.data.homepage;
    proj.url = res.data.svn_url;

    return proj
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
    url: string | null,
    projectUrl: string | null,
    languages: string[],
    image: string
}

export interface IProject {
    name: string;
}