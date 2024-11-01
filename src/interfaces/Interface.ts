export interface SkillInterface {
    column: string;
    technologies: string[];
}

export interface Projectlink {
    name: string;
    url: string;
}

export interface ProjectInterface {
    name: string, 
    logoUrl: string,
    links: Projectlink[],
    details : string[],
}

export interface SocialsInterface {
    name: string;
    id: string;
    url: string;
}

export interface BlogInterface {
    title: string;
    url?: string | undefined; 
}
